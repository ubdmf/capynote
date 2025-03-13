---
layout: doc
title: useLayoutEffect
description: useLayoutEffect 是 React 中用于处理副作用的钩子，用于浏览器重新绘制屏幕之前执行，可以获取到 DOM 信息，并且可以修改 DOM 信息。
date: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useLayoutEffect, 副作用, 纯函数
---

# useLayoutEffect

用于浏览器重新绘制屏幕之前执行，可以获取到 DOM 信息，并且可以修改 DOM 信息。

**案例**：记录滚动条位置，等用户返回这个页面时，滚动到之前记录的位置，增强用户体验。

**用法**：

```javascript
useLayoutEffect(setup, dependencies);
```

- **setup**：执行的函数。
- **dependencies**：依赖项，如果依赖项更新，则重新执行 setup。

**返回值**：undefined

## useLayoutEffect 和 useEffect 的区别

| 执行时机                             | 执行方式 | DOM 渲染        |
| ------------------------------------ | -------- | --------------- |
| 浏览器完成布局和绘制之前，执行副作用 | 同步执行 | 阻塞 DOM 渲染   |
| 浏览器完成布局和绘制之后，执行副作用 | 异步执行 | 不阻塞 DOM 渲染 |

## 使用场景

- 需要同步读取或者更改 DOM：例如读取元素大小或者位置并在渲染前调整。
- 防止闪烁：在某些情况下，异步的 `useEffect` 可能会导致可见的布局跳动或者闪烁。
- 模拟生命周期方法：迁移旧的类组件，并需要模拟 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 等生命周期方法的同步行为。

[useLayoutEffect 示例](https://github.com/capykyo/react-demo/blob/hooks/src/compoments/TypeOperations/UseLayoutEffectStudy.tsx)
