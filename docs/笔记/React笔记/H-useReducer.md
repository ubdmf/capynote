---
layout: doc
title: useReducer
description: useReducer 是 React 中用于管理状态的 Hook，可以方便的创建和管理状态。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useReducer, 复杂类型, 数组, 对象
---

# useReducer

`useReducer` 是一个高级 Hook，虽然不使用它也可以正常开发，但它能够显著提高代码的可读性和可维护性。

与 `useState` 类似，`useReducer` 也是用于管理状态的，但它采用集中式管理的方式，特别适合处理复杂的数据类型，例如对象和数组。

## 用法：

```ts
const [state, dispatch] = useReducer(reducer, initialArg, initfn?);
```

## 参数说明：

- **reducer**：一个函数，接收两个参数：当前状态 (`state`) 和动作 (`action`)，并返回新的状态。
- **initialArg**：状态的初始值。
- **initfn**：可选参数，初始化函数，用于初始化状态。如果提供了 `initfn`，则默认值将使用 `initfn` 的返回值；否则，将使用 `initialArg`。

## 返回值：

- **state**：当前状态。
- **dispatch**：一个函数，用于派发动作。

## 示例：

- [简单示例](https://github.com/ubdmf/react-demo/tree/useReducer/src/compoments/UseReducer/SimpleDemo.tsx)
- [购物车示例](https://github.com/ubdmf/react-demo/tree/useReducer/src/compoments/UseReducer/CartDemo.tsx)
