---
layout: doc
title: Babel 和 SWC
description: 了解 Babel 和 SWC 的工作原理及其区别
date: 2025-03-06
head:
  - - meta
    - name: keywords
      content: Babel, SWC, VitePress, Markdown
---

# Babel 和 SWC

[Babel 文档](https://www.babeljs.cn/docs/)

## Babel 转换流程

Babel 的代码转换流程如下：

1. **解析代码**：将代码转换为抽象语法树（AST）。
2. **遍历 AST**：对 AST 进行修改。
3. **生成代码**：将修改后的 AST 转换为可执行的代码。

## 相关库说明

以下是 Babel 相关的主要库：

- **@babel/parser**：将代码解析为 AST。
- **@babel/traverse**：用于遍历 AST。
- **@babel/types**：用于修改 AST。
- **@babel/generator**：将 AST 转换为代码。
- **@babel/core**：Babel 的核心库，包含上述所有库。

## 基本使用示例

以下是一个基本的 Babel 使用示例：

```javascript
const fs = require("fs");
const babel = require("@babel/core");

const code = fs.readFileSync("./src/index.js", "utf-8");
const res = babel.transform(code, {
  presets: ["@babel/preset-env"],
});
console.log(res.code);
```

## CoreJS 转换新特性

使用 CoreJS 进行按需引入的示例：

```javascript
import presetEnv from "@babel/preset-env";

const code = fs.readFileSync("./src/index.js", "utf-8");
const res = babel.transform(code, {
  presets: [
    [
      presetEnv,
      {
        // 按需引入，手动引入
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
});
console.log(res.code);
```

## React 代码转换

以下是 React 代码转换的示例：

```javascript
import presetEnv from "@babel/preset-env";
import presetReact from "@babel/preset-react";

const code = fs.readFileSync("./src/app.jsx", "utf-8");
const res = babel.transform(code, {
  presets: [
    [
      presetEnv,
      {
        // 按需引入，手动引入
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    presetReact,
  ],
});
console.log(res.code);
```

## Babel 插件开发示例

以下是一个简单的 Babel 插件开发示例：

```javascript
import babel from "@babel/core";
const fs = require("fs");

const code = fs.readFileSync("./src/app.jsx", "utf-8");
const res = babel.transform(code, {
  plugins: [
    {
      visitor: {
        JSXElement(path) {
          path.node.openingElement.name.name = "div"; // 将 JSX 元素转换为 div
        },
      },
    },
  ],
});
console.log(res.code);
```

## JSX 示例

以下是一个简单的 JSX 示例：

```tsx
// 函数传值，直接调用会直接使用，需要通过匿名函数
const fn = <T,>(params: T, e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(params, "/", e);
};

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={(e) => fn(1, e)}>Click</button>
    </div>
  );
}

export default App;
```

## SWC 了解

### SWC 和 Babel 的区别

[SWC 文档](https://swc.rs/docs/getting-started)

#### 1. 性能差异

- **SWC** 使用 Rust 编写，编译速度比 Babel 快 20-70 倍。
- **Babel** 使用 JavaScript 编写，相对较慢。

#### 2. 功能支持

- **Babel** 生态系统更加成熟，插件丰富，可定制性强。
- **SWC** 功能相对较新，但已支持大多数常用转换功能。

#### 3. 使用场景

- **Babel** 适合需要高度定制化的项目。
- **SWC** 适合追求构建速度的大型项目。

#### 4. 配置方式

- **Babel** 配置较为复杂，需要安装多个依赖。
- **SWC** 配置相对简单，开箱即用。

#### 5. 社区支持

- **Babel** 社区更加成熟，文档和资源丰富。
- **SWC** 社区正在快速成长。
