---
layout: doc
title: useContext
description: useContext 是 React 中用于处理上下文数据的钩子，可以方便地在组件树间传递数据。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useContext, 上下文, 数据传递
---

# useContext

> `useContext` 提供了一种在组件树间进行数据传递的方法，无需为每层组件手动添加 props。其设计目的是解决组件树间数据传递的问题。

## 用法

```tsx
const MyThemeContext = React.createContext({ theme: "light" }); // 创建一个上下文

function App() {
  return (
    <MyThemeContext.Provider value={{ theme: "light" }}>
      <MyComponent />
    </MyThemeContext.Provider>
  );
}

function MyComponent() {
  const themeContext = useContext(MyThemeContext); // 使用上下文
  return <div>{themeContext.theme}</div>;
}
```

## 多层嵌套

内部的 Provider 会覆盖外层的 Provider：

```tsx
<MyThemeContext.Provider value={{ theme: "light" }}>
  <MyThemeContext.Provider value={{ theme: "dark" }}>
    <MyComponent />
  </MyThemeContext.Provider>
</MyThemeContext.Provider>
```

## React 版本说明

- **React 18**: 使用 `MyThemeContext.Provider`
- **React 19**: 使用 `MyThemeContext`
