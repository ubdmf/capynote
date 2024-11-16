import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

// ESM 环境下等效于 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 项目根目录
const rootDirectory = path.resolve(process.cwd(), "./docs");

/**
 * 动态生成 sidebar 配置
 * @param rootDir - 根目录路径
 * @param basePath - 基础路径，用于生成 link
 * @param blacklist - 要排除的目录
 * @returns 动态生成的 sidebar 配置数组
 */
function generateSidebar(
  rootDir: string,
  basePath: string = "/",
  blacklist: string[] = []
): any[] {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const sidebar: any[] = [];

  const items: { text: string; link: string; date?: string }[] = [];

  entries.forEach((entry) => {
    const entryPath = path.join(rootDir, entry.name);

    // 跳过黑名单目录
    if (blacklist.includes(entry.name)) {
      return;
    }

    if (entry.isDirectory()) {
      // 递归生成子目录的 sidebar
      const subItems = generateSidebar(entryPath, `${basePath}${entry.name}/`, blacklist);
      if (subItems.length > 0) {
        sidebar.push({
          text: entry.name, // 使用目录名作为分组标题
          collapsed: true, // 默认折叠
          items: subItems,
        });
      }
    } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "list.md") {
      // 提取 Markdown 文件信息
      const fileContent = fs.readFileSync(entryPath, "utf-8");
      const { data } = matter(fileContent);

      if (data.title) {
        items.push({
          text: data.title,
          link: `${basePath}${entry.name.replace(/\.md$/, "")}`.replace(/\\/g, "/"),
          date: data.data || "1970-01-01", // 假设 `data` 是日期字段，默认为最早日期
        });
      }
    }
  });

  // 按日期降序排序（最新的日期排在最上面）
  items.sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

  // 将排序后的 items 添加到 sidebar
  if (items.length > 0) {
    sidebar.push(...items);
  }

  return sidebar;
}

// 黑名单
const blacklist = [".vitepress", "cache"];

// 从 `docs/` 根目录扫描所有目录
const sidebarConfig = generateSidebar(rootDirectory, "/", blacklist);

// 输出或导出 sidebar 配置
export const sidebar = sidebarConfig;