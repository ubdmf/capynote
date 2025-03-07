---
layout: doc
title: React 原理
description: React 原理
data: 2025-03-07
head:
  - - meta
    - name: keywords
      content: React 原理
---

# React 原理

## 虚拟 DOM

> Virtual DOM 就是用 JavaScript 对象去描述一个 DOM 结构，虚拟 DOM 不是直接操作浏览器的真实 DOM.
> 而是首先对 U 的更新在虚拟 DOM 中进行，再将变更高效地同步到真实 DOM 中。

### 优点

1. 性能优化:直接操作真实 DOM 是比较昂贵的，尤其是当涉及到大量节点更新时，虚拟 DOM 通过减少不必要的 DOM 操作，主要体现在 diff 算法的复用操作，其实也提升不了多少性能。
2. 跨平台性:虚拟 DOM 是一个与平台无关的概念，它可以映射到不同的渲染目标，比如浏览器的 DOM 或者移动端(React Native)的原生 UI。

## 动手构建一个虚拟 DOM

需要准备：

1. bable / swc
2. index.html
3. react.js

编译顺序：

jsx/tsx -> babel/swc/esbuild -> React.createElement -> 虚拟 DOM 对象
