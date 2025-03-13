---
layout: doc
title: useEffect
description: useEffect 是 React 中用于处理副作用的钩子，可以方便地执行副作用函数，类似于之前类组件中的 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 处理生命周期的事件。
date: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useEffect, 副作用, 纯函数
---

# useEffect

`useEffect` 是处理副作用的钩子，并且充当生命周期函数，类似于之前类组件中的 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 处理生命周期的事件。

## 什么是副作用函数，什么是纯函数

- **副作用函数**：在函数执行过程中，除了计算结果之外，还对外部环境产生了影响。可能导致意外的行为，比如修改全局变量、发送网络请求、操作 DOM 等。
- **纯函数**：在函数执行过程中，不会对外部环境产生任何影响，也不会修改外部变量的值。只依赖于输入参数，并且对于相同的输入参数，总是返回相同的结果。

## useEffect 的用法

```javascript
useEffect(setup, dependencies);
```

- **setup**：Effect 的处理函数，可以返回一个清理函数，用于在组件卸载时执行清理操作。
- **dependencies**：可选，setup 中使用的响应式变量列表（props、state 等）。必须以数组形式存在。

## useEffect 的不同用法对比

| 用法                       | 描述                               | 触发时机                                 |
| -------------------------- | ---------------------------------- | ---------------------------------------- |
| `useEffect(setup)`         | 没有依赖项，组件每次渲染时都会执行 | 每次渲染后                               |
| `useEffect(setup, [])`     | 空数组，组件挂载时执行一次         | 组件挂载时（相当于 `componentDidMount`） |
| `useEffect(setup, [dep1])` | 指定依赖项，依赖项变化时执行       | 组件挂载时和依赖项变化时                 |

### 示例代码

1. **没有依赖项**：

```javascript
useEffect(() => {
  console.log("每次渲染后都会执行");
});
```

2. **空数组**：

```javascript
useEffect(() => {
  console.log("组件挂载时执行一次");
}, []);
```

3. **指定依赖项**：

```javascript
useEffect(() => {
  console.log("依赖项变化时执行");
}, [dep1]);
```

## 相关链接

- [useEffect 示例](https://github.com/capykyo/react-demo/blob/hooks/src/components/TypeOperations/UseEffectStudy.tsx)
- [useEffect 请求数据示例](https://github.com/capykyo/react-demo/blob/hooks/src/components/TypeOperations/UseEffectStudyFetch.tsx)
