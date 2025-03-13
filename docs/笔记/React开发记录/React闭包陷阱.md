---
layout: doc
title: React 闭包陷阱
description: 本文探讨了在 React 中使用 EventSource 时遇到的闭包陷阱问题，分析了其原因，并提供了多种解决方案，以帮助开发者更好地管理状态更新和事件处理。
date: "2025-03-01"
head:
  - - meta
    - name: keywords
      content: React, 闭包, 状态管理, EventSource
---

# React 闭包陷阱

## 问题示例

下面是一个使用 EventSource 时遇到的闭包陷阱示例：

```tsx
// 创建 EventSource 实例
const eventSource = new EventSource(
  `/api/aiReader?number=${number}&url=${url}`
);
// 处理消息事件
eventSource.onmessage = (event) => {
  const text = event.data;
  setContent((prev) => {
    const newContent = prev + text;
    setWordCount(newContent.length);
    return newContent;
  });
  // 闭包陷阱：这里直接访问的 content 不是最新值
  // console.log("content", content);
};
```

## 问题分析

在 `eventSource.onmessage` 回调函数中，`content` 变量捕获的是**创建闭包时的值**，而不是最新更新后的值。这是 React 中常见的闭包陷阱问题。

### 为什么会发生这种情况？

1. **闭包机制**：当 `handleStreamResponse` 函数执行并设置 `eventSource.onmessage` 回调时，它捕获了当时作用域中的 `content` 值（通常是初始的空字符串）。

2. **状态更新的异步性**：即使通过 `setContent((prev) => prev + text)` 更新了状态，回调中直接引用的 `content` 仍然是旧值，因为闭包保留了创建时的环境。

3. **变量引用不更新**：React 中的状态更新不会自动改变已经被闭包捕获的变量值，这与 React 的状态管理模型有关。

## 解决方案

针对这个问题，有以下几种有效的解决方案：

### 1. 使用 useRef 跟踪最新值

```typescript
const contentRef = useRef("");

const handleStreamResponse = () => {
  // ...其他代码不变...

  eventSource.onmessage = (event) => {
    const text = event.data;
    setContent((prev) => {
      const newContent = prev + text;
      contentRef.current = newContent; // 更新 ref
      return newContent;
    });

    console.log("content", contentRef.current); // 使用 ref 读取最新值
  };
};
```

### 2. 在回调中使用函数式更新并记录新值

```typescript
eventSource.onmessage = (event) => {
  const text = event.data;
  setContent((prev) => {
    const newContent = prev + text;
    console.log("最新内容:", newContent); // 在更新函数内部记录
    return newContent;
  });
};
```

### 3. 仅记录增量数据

```typescript
eventSource.onmessage = (event) => {
  const text = event.data;
  console.log("收到的新内容:", text);
  setContent((prev) => prev + text);
};
```

### 4. 使用 useEffect 监听状态变化

```typescript
useEffect(() => {
  console.log("content updated:", content);
}, [content]); // 每当 content 变化时执行
```

## 最佳实践

在实际开发中，推荐以下做法：

- **首选方案 2 或方案 4**：方案 2 让你可以直接在更新状态的同时记录新值；方案 4 让你可以在组件中用更清晰的方式监控状态变化。

- **使用函数式更新**：在事件监听器中访问最新状态时，函数式更新形式（即 `setContent(prev => ...)`）始终是更安全的做法。

- **理解闭包特性**：在 React 开发中，理解闭包的工作方式对避免此类问题至关重要。

通过正确应用这些技巧，你可以有效避免 React 中的闭包陷阱，构建更可靠的应用程序。
