---
layout: doc
title: useSyncExternalStore
description: useSyncExternalStore 是 React 中用于从组件外部存储（例如状态管理库、浏览器 API）获取状态并在组件中同步显示的 Hook。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useSyncExternalStore, 外部存储, 状态管理, 浏览器 API
---

# useSyncExternalStore

> `useSyncExternalStore` 是 React 18 版本引入的，用于从组件外部存储（例如状态管理库、浏览器 API）获取状态并在组件中同步显示。它对于需要跟踪外部状态的应用非常有用。

## 使用场景

1. 订阅外部 store，例如：Redux、Zustand、Jotai；Vue 的 Vuex、Pinia。
2. 订阅浏览器 API，例如：在线状态、存储、位置、历史哈希。
3. 抽离逻辑，编写自定义 hooks。
4. 支持服务端渲染。

## 用法

```tsx
const [state, setState] = useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot?
);
```

## 参数说明

- **subscribe**：用于订阅数据源的变化，接收一个回调函数，在数据源更新时调用该回调函数。
- **getSnapshot**：获取当前数据源的快照（当前状态）。
- **getServerSnapshot**：在服务器渲染时，用于获取数据源的快照。

## 返回值

返回当前快照 `res`，可以在你的渲染逻辑中使用。

## 示例代码

```tsx
const subscribe = (callback: () => void) => {
  // 订阅
  callback();
  return () => {
    // 取消订阅
  };
};

const getSnapshot = () => {
  return data; // 返回当前数据
};

const getServerSnapshot = () => {
  return data; // 返回服务器快照
};
```

## 注意事项

- 如果 `getSnapshot` 返回值与上一次不同，React 会重新渲染组件。如果总是返回不同的值，会导致无限循环并报错。
- 数组、对象和函数是引用类型，每次都会重新渲染，可能导致无限循环。在这种情况下，需要增加判定。

```ts
const getSnapshot = () => {
  return obj.todos; // 返回对象引用
};
```

这种写法每次返回对象的引用，即使对象内容没有改变，React 也会重新渲染组件。如果你的 store 数据是可变的，`getSnapshot` 函数应返回不可变快照。这意味着确实需要创建新对象，但不是每次调用都如此。应保存最后一次计算得到的快照，并在 store 中的数据不变的情况下返回与上一次相同的快照。如何判断可变数据是否发生改变则取决于你的可变 store。

## 优化示例

```ts
function getSnapshot() {
  if (obj.todos !== lastTodos) {
    // 只有在 todos 真的发生变化时，才更新快照
    lastSnapshot = { todos: obj.todos.slice() }; // 创建新的数组快照
    lastTodos = obj.todos; // 更新上一次的 todos
  }
  return lastSnapshot; // 返回当前快照
}
```

- **`if (obj.todos !== lastTodos)`**：检查 `obj.todos` 是否与上一次的 `lastTodos` 相同。只有在它们不相同时，才会执行更新快照的逻辑。
- **`lastSnapshot = { todos: obj.todos.slice() };`**：如果 `todos` 发生变化，使用 `slice()` 方法创建一个新的数组快照，确保返回的快照是新的引用。
- **`lastTodos = obj.todos;`**：更新 `lastTodos` 变量，以便在下次调用时进行比较。
- **`return lastSnapshot;`**：返回当前快照。如果 `todos` 没有变化，则返回上一次的快照，避免不必要的重新渲染。

## 相关示例

- [useStorage 示例](https://github.com/ubdmf/react-demo/blob/useSyncExternalStore/src/hooks/useStorage.ts)
- [useHistory 示例](https://github.com/ubdmf/react-demo/blob/useSyncExternalStore/src/hooks/useHistory.ts)
