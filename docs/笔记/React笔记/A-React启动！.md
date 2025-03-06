---
layout: doc
title: React 启动！
description: Vite 构建的 React 项目结构和说明
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, Vite, 项目结构, 技术栈
---

# React 启动！

## 项目初始化

### 创建项目

使用以下命令创建一个新的 Vite 项目：

```bash
pnpm create vite@latest
```

### 技术栈

本项目使用以下技术栈：

```bash
TypeScript + SWC
```

> **SWC** 是 Vite 的默认编译器，相比 Babel 更加高效。

## 项目结构说明

以下是项目的基本目录结构：

```bash
my-vite-react-app/
├── public/                  # 静态资源文件夹
│   ├── favicon.ico          # 网站图标
│   └── assets/              # 其他静态资源
│       └── images/          # 图片文件夹
├── src/                     # 源代码文件夹
│   ├── assets/              # 资源文件（如图片、样式等）
│   ├── components/          # 组件文件夹
│   │   ├── Header.tsx       # 头部组件
│   │   ├── Footer.tsx       # 底部组件
│   │   └── ...              # 其他组件
│   ├── pages/               # 页面文件夹
│   │   ├── Home.tsx         # 首页
│   │   ├── About.tsx        # 关于页
│   │   └── ...              # 其他页面
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口文件
│   ├── styles/              # 样式文件夹
│   │   ├── index.css        # 全局样式
│   │   └── ...              # 其他样式文件
│   └── vite-env.d.ts        # Vite 环境变量声明文件
├── .gitignore               # Git 忽略文件
├── index.html               # 入口 HTML 文件
├── package.json             # 项目依赖和脚本
├── tsconfig.json            # TypeScript 配置文件
├── vite.config.ts           # Vite 配置文件
└── README.md                # 项目说明文件
```

## 目录结构说明

- **public/**: 存放静态资源的文件夹，Vite 会直接将这些文件复制到构建输出中。
- **src/**: 源代码文件夹，包含所有的 React 组件、页面和样式。
  - **assets/**: 存放项目中使用的资源文件，如图片和样式。
  - **components/**: 存放可复用的 React 组件，文件扩展名为 `.tsx`。
  - **pages/**: 存放不同页面的组件，文件扩展名为 `.tsx`。
  - **App.tsx**: 主应用组件，通常是应用的根组件。
  - **main.tsx**: 应用的入口文件，负责渲染根组件。
  - **styles/**: 存放样式文件的文件夹。
  - **vite-env.d.ts**: Vite 环境变量声明文件，通常用于声明 Vite 特有的环境变量类型。
- **.gitignore**: 指定 Git 忽略的文件和文件夹。
- **index.html**: 应用的入口 HTML 文件，Vite 会在这里注入 JavaScript 和 CSS。
- **package.json**: 项目的依赖和脚本配置。
- **tsconfig.json**: TypeScript 的配置文件，用于设置 TypeScript 编译选项。
- **vite.config.ts**: Vite 的配置文件，使用 TypeScript 编写，用于自定义构建和开发设置。
- **README.md**: 项目的说明文件，通常包含项目的介绍、安装和使用说明。

### `vite-env.d.ts` 文件示例

在 `vite-env.d.ts` 文件中，你可以添加以下内容来声明 Vite 特有的环境变量：

```typescript
/// <reference types="vite/client" />

// 自定义环境变量类型
interface ImportMetaEnv {
  VITE_API_URL: string; // 示例：API URL
  // 其他环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

这个文件帮助 TypeScript 理解 Vite 的环境变量，确保在使用这些变量时不会出现类型错误。`///` 注释是 Vite 的特殊指令，三斜杆指令会被 Vite 处理，例如 `/// <reference types="vite/client" />` 会被处理成 `import.meta.hot.accept()`，从而实现热更新。

### src 文件夹

- **assets** 文件夹：存放静态资源
- **components** 文件夹：存放组件
- **App.tsx**：主组件
- **main.tsx**：入口文件

### public 文件夹与 assets 文件夹的区别

- **public** 文件夹中的文件会被复制到 `dist` 文件夹的根目录中，而 **assets** 文件夹中的文件会被编译构建后复制到 `dist` 的 `assets` 文件夹中。
- **public** 文件夹中的文件不会被压缩，而 **assets** 文件夹中的文件会被压缩。
- **public** 文件夹中的文件可以在浏览器中通过 URL 直接访问。

### 项目入口

Vite 的入口文件是 `index.html`，而不是 `main.js`。

[下一笔记:Babel 编译](./A-Babel编译.md)
