import fs from 'fs';
import path from 'path';
import { DefaultTheme } from 'vitepress';

type NavItem = DefaultTheme.NavItem;

/**
 * 检查目录下是否存在指定文件
 * @param dirPath - 目录路径
 * @param fileName - 文件名
 * @returns 是否存在该文件
 */
function fileExists(dirPath: string, fileName: string): boolean {
  const fullPath = path.join(dirPath, fileName);
  return fs.existsSync(fullPath);
}

/**
 * 递归获取文件夹中的子目录并生成导航列表
 * @param dirPath - 起始目录路径
 * @param basePath - 基础路径，用于生成链接
 * @param blacklist - 黑名单，指定要排除的文件夹名称
 * @returns 导航列表
 */
function getNavFromDocs(dirPath: string, basePath: string = '/', blacklist: string[] = []): NavItem[] {
  const nav: NavItem[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.isDirectory() && !blacklist.includes(entry.name)) {
      const folderPath = path.join(dirPath, entry.name);
      const linkBase = path.join(basePath, entry.name).replace(/\\/g, '/'); // 确保链接格式为正斜杠

      const children = getNavFromDocs(folderPath, linkBase, blacklist);

      if (children.length > 0) {
        // 如果有子导航，明确使用 NavItemWithChildren 类型
        nav.push({
          text: entry.name,
          items: children // 子导航
        } as DefaultTheme.NavItemWithChildren);
      } else if (fileExists(folderPath, 'list.md')) {
        // 如果没有子导航，但存在 list.md 文件，使用 NavItemWithLink 类型
        nav.push({
          text: entry.name,
          link: `${linkBase}/list.md`
        } as DefaultTheme.NavItemWithLink);
      }
    }
  });

  return nav;
}

// 黑名单：排除 .vitepress 等文件夹
const blacklist = ['.vitepresss'];

// 获取 docs 目录下的导航结构
export const docsNav: NavItem[] = getNavFromDocs(path.resolve(__dirname, '../../docs'), '/', blacklist);
