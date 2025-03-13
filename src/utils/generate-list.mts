import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

// ESM 环境下等效于 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确保从项目根目录读取
const rootDirectory = path.resolve(process.cwd(), "./docs");

/**
 * 格式化日期为 `YYYY-MM-DD`
 * @param dateString - 原始日期字符串
 * @returns 格式化后的日期字符串
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * 获取目录下的 Markdown 文件并提取 frontmatter
 * @param dirPath - 目标目录路径
 * @returns 包含 frontmatter 信息的文件列表
 */
function getMarkdownFilesWithFrontmatter(
  dirPath: string
): { title: string; date: string; link: string }[] {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  const markdownFiles: { title: string; date: string; link: string }[] = [];

  files.forEach((file) => {
    if (file.isFile() && file.name.endsWith(".md") && file.name !== "list.md") {
      const filePath = path.join(dirPath, file.name);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      if (data.title && data.date) {
        markdownFiles.push({
          title: data.title,
          date: formatDate(data.date), // 使用 formatDate 格式化日期
          link: `./${file.name}`,
        });
      }
    }
  });

  // 根据日期排序
  markdownFiles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return markdownFiles;
}

/**
 * 生成 list.md 的内容
 * @param markdownFiles - 包含 frontmatter 的文件列表
 * @returns 生成的 Markdown 内容
 */
function generateListContent(
  markdownFiles: { title: string; date: string; link: string }[]
): string {
  let content = `# 目录\n\n`;
  markdownFiles.forEach((file, index) => {
    content += `${index + 1}. [${file.date} ${file.title}](${file.link})\n`;
  });
  return content;
}

/**
 * 写入 list.md 文件
 * @param dirPath - 目标目录路径
 */
function writeListFile(dirPath: string): void {
  const markdownFiles = getMarkdownFilesWithFrontmatter(dirPath);
  if (markdownFiles.length > 0) {
    const listContent = generateListContent(markdownFiles);

    const listFilePath = path.join(dirPath, "list.md");
    fs.writeFileSync(listFilePath, listContent, "utf-8");
    console.log(`list.md 文件已生成：${listFilePath}`);
  }
}

/**
 * 递归遍历目标目录，在每个含 Markdown 文件的子目录生成 list.md
 * @param rootDir - 根目录路径
 * @param blacklist - 要排除的目录名称列表
 */
function processDirectoriesRecursively(
  rootDir: string,
  blacklist: string[] = []
): void {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });

  let hasMarkdownFiles = false;

  entries.forEach((entry) => {
    const entryPath = path.join(rootDir, entry.name);

    // 跳过黑名单目录
    if (entry.isDirectory() && blacklist.includes(entry.name)) {
      return;
    }

    if (entry.isDirectory()) {
      processDirectoriesRecursively(entryPath, blacklist);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".md") &&
      entry.name !== "list.md"
    ) {
      hasMarkdownFiles = true;
    }
  });

  // 如果当前目录包含 Markdown 文件，生成 list.md
  if (hasMarkdownFiles) {
    writeListFile(rootDir);
  }
}

// 指定要排除的目录
const blacklist = [".vitepress", "node_modules", "ignored-folder"];

// 从项目根目录开始递归处理
processDirectoriesRecursively(rootDirectory, blacklist);
