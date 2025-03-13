// 生成index.md补充list列表
// 提取出docs目录下，所有md文件中frontmatter的type字段为 recommendation 的文件
// 并按照date字段降序排序
// 将文件名作为list列表的item，补充到index.md后面
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 确保从项目根目录读取
const rootDirectory = path.resolve(process.cwd(), "./docs");

/**
 * 格式化日期为 `YYYY-MM-DD`
 * @param dateString - 原始日期字符串
 * @returns 格式化后的日期字符串
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 获取目录下的 Markdown 文件并提取 frontmatter
 * @param dirPath - 目标目录路径
 * @returns 包含 frontmatter 信息的文件列表
 */
function getRecommendationFilesWithFrontmatter(
  dirPath: string
): { title: string; date: string; link: string; description: string }[] {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  const recommendationFiles: {
    title: string;
    date: string;
    link: string;
    description: string;
  }[] = [];

  files.forEach((file) => {
    if (file.isFile() && file.name.endsWith(".md")) {
      const filePath = path.join(dirPath, file.name);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      if (
        data.type === "recommendation" &&
        data.title &&
        data.date &&
        data.description
      ) {
        recommendationFiles.push({
          title: data.title,
          date: formatDate(data.date),
          link: `./${file.name}`,
          description: data.description,
        });
      }
    }
  });

  // 根据日期排序
  recommendationFiles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return recommendationFiles;
}

/**
 * 生成 index.md 的内容
 * @param recommendationFiles - 包含 frontmatter 的文件列表
 * @returns 生成的 Markdown 内容
 */
function generateIndexContent(
  recommendationFiles: {
    title: string;
    date: string;
    link: string;
    description: string;
  }[]
): string {
  let content = "<script setup>\n";
  content += "import Card from './components/Card.vue';\n";
  content += "</script>\n\n";
  recommendationFiles.forEach((file) => {
    // 将link中的.md去掉
    let link = file.link.replace(".md", "");
    content += `<Card title="${file.title}" description="${file.description}" link="${link}" date="${file.date}" />\n`;
  });
  return content;
}

/**
 * 写入 index.md 文件
 * @param dirPath - 目标目录路径
 */
function writeIndexFile(dirPath: string): void {
  const recommendationFiles = getRecommendationFilesWithFrontmatter(dirPath);
  if (recommendationFiles.length > 0) {
    const indexContent = generateIndexContent(recommendationFiles);

    const indexFilePath = path.join(dirPath, "index.md");
    const fileContent = fs.readFileSync(indexFilePath, "utf-8");
    const frontmatter = matter(fileContent);
    const frontmatterString = matter.stringify("", frontmatter.data);
    // console.log(frontmatterString);

    const newContent = `${frontmatterString}\n\n${indexContent}`;
    // console.log(newContent);

    fs.writeFileSync(indexFilePath, newContent, "utf-8");
    console.log(`index.md 文件已生成：${indexFilePath}`);
  }
}

// 从项目根目录开始处理
writeIndexFile(rootDirectory);
