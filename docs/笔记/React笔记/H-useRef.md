---
layout: doc
title: useRef
description: useRef 是 React 中用于处理 DOM 元素或在组件渲染之间保持持久性数据的 Hook。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useRef, 句柄, 暴露, 钩子
---

# useRef

> `useRef` 是 React 中用于处理 DOM 元素或在组件渲染之间保持持久性数据的 Hook。

```tsx
const refValue = useRef(initialValue); // initialValue 可以是任意类型

console.log(refValue.current);
```

## 和 Vue 的 ref 的区别

- 访问 `ref` 的值：类似于 Vue 的 `ref`，Vue 的 `ref` 是一个对象，改变值会导致视图重新渲染组件。
- 响应性：Vue 的 `ref` 是响应式的，而 React 的 `ref` 不是响应式的（是普通的 JavaScript 对象）。

```tsx
const refValue = useRef(initialValue);

console.log(refValue.current);
```

## 通过 Ref 操作 DOM 元素

- **参数**：

  - `initialValue`：`ref` 对象的 `current` 属性的初始值，可以是任意类型的值。这个参数在首次渲染后被忽略。

- **返回值**：

  - `useRef` 返回一个对象，对象的 `current` 属性指向传入的初始值，格式为 `{ current: xxxx }`。

- **注意事项**：
  - 改变 `ref.current` 属性时，React 不会重新渲染组件。React 不知道它何时会发生改变，因为 `ref` 是一个普通的 JavaScript 对象。
  - 除了初始化外，不要在渲染期间写入或读取 `ref.current`，否则会使组件行为变得不可预测。

[Base Use Case](https://github.com/ubdmf/react-demo/tree/useRef/src/compoments/UseRefCom/UseRefExample.tsx)

## 注意

1. 组件在重新渲染时，`useRef` 的值不会被重新初始化。
2. 改变 `ref.current` 属性时，React 不会重新渲染组件。React 不知道它何时会发生改变，因为 `ref` 是一个普通的 JavaScript 对象。
3. `useRef` 的值不能作为 `useEffect` 等其他 Hooks 的依赖项，因为它并不是一个响应式状态。
4. `useRef` 不能直接获取子组件的实例，需要使用 `forwardRef`，而 Vue 的 `ref` 可以。

## React ref 和 Vue ref 的区别总结

| 特性           | React ref                            | Vue ref                          |
| -------------- | ------------------------------------ | -------------------------------- |
| **访问方式**   | 通过 `ref.current` 访问              | 通过 `ref.value` 访问            |
| **响应性**     | 不是响应式的（普通 JavaScript 对象） | 是响应式的                       |
| **视图更新**   | 改变值不会导致组件重新渲染           | 改变值会导致视图重新渲染         |
| **初始化**     | 组件重新渲染时，值不会被重新初始化   | 组件重新渲染时，值会被重新初始化 |
| **子组件实例** | 不能直接获取，需要使用 `forwardRef`  | 可以直接获取                     |
