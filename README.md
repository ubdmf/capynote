# 午羊的智能笔记

![版本](https://img.shields.io/badge/version-1.0.0-blue)
![VitePress](https://img.shields.io/badge/VitePress-1.5.0-brightgreen)
![许可证](https://img.shields.io/badge/license-MIT-green)

## 📚 项目简介

午羊的智能笔记是一个基于 VitePress 构建的个人知识库系统，旨在提供一个结构化的平台来管理、组织和分享技术学习笔记。通过 AI 辅助生成的内容和优化的知识结构，帮助用户更有效地捕捉和检索信息。

### ✨ 主要特点

- **结构化知识管理**：按主题分类整理的笔记系统
- **Markdown 支持**：使用 Markdown 格式编写所有笔记，支持代码高亮
- **响应式设计**：适配各种设备的界面布局
- **全文搜索**：快速查找所需内容
- **自动生成导航**：通过脚本自动生成侧边栏导航
- **AI 增强**：结合 AI 技术优化内容和结构

## 🔧 技术栈

- [VitePress](https://vitepress.vuejs.org/) - 基于 Vite 和 Vue 的静态网站生成器
- [TypeScript](https://www.typescriptlang.org/) - 类型化的 JavaScript
- [Node.js](https://nodejs.org/) - JavaScript 运行时
- [PNPM](https://pnpm.io/) - 快速、节省磁盘空间的包管理器

## 📥 安装和使用

### 前置要求

- Node.js 16.x 或更高版本
- PNPM 包管理器

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/capykyo/capynote.git
cd capynote
```

2. 安装依赖

```bash
pnpm install
```

3. 本地开发

```bash
pnpm run docs:dev
```

4. 构建静态网站

```bash
pnpm run docs:build
```

5. 仅生成侧边栏导航

```bash
pnpm run generate:lists
```

## 📂 项目结构

```
capynote/
├── docs/                  # 文档目录
│   ├── .vitepress/       # VitePress 配置目录
│   │   ├── config.js     # VitePress 配置文件
│   │   └── theme/        # 自定义主题
│   ├── 笔记/             # 各类笔记内容
│   │   ├── React笔记/    # React 相关笔记
│   │   ├── Git/          # Git 相关笔记
│   │   └── 动手学深度学习/ # 深度学习笔记
│   └── 信息收集/         # 收集的各类信息
├── public/               # 静态资源目录
├── dist/                 # 脚本生成目录
├── package.json          # 项目配置文件
└── README.md             # 项目说明文档
```

## 📝 笔记内容

该知识库包含以下主要内容：

- **React 开发笔记**：React 基础、组件开发、Hooks 使用等
- **深度学习笔记**：基于《动手学深度学习》的学习记录
- **Git 使用技巧**：常用 Git 操作和最佳实践
- **信息收集**：日报、周报等各类信息汇总

## 🛠️ 自定义和扩展

### 添加新笔记

1. 在 `docs/笔记/` 目录下创建新的 Markdown 文件或文件夹
2. 运行 `pnpm run generate:lists` 自动更新侧边栏导航
3. 重启开发服务器查看效果

### 自定义主题

可以在 `docs/.vitepress/theme/` 目录下修改样式和组件：

```bash
docs/.vitepress/theme/
├── custom.css     # 自定义 CSS
└── index.js       # 主题入口文件
```

## 🤝 贡献指南

欢迎为午羊的智能笔记做出贡献！您可以通过以下方式参与：

1. 提交 Issue 报告问题或建议新功能
2. 提交 Pull Request 改进代码或添加新内容
3. 完善文档，修正错别字或不准确的描述

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 发布。

---

🌟 如果这个项目对您有帮助，别忘了给它点个星！
