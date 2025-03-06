---
layout: doc
title: useTransition - useDeferredValue
description: useTransition 是 React 中用于管理 UI 中的过渡状态的 Hook。useDeferredValue 是 React 中用于延迟某些状态的更新，直到主渲染任务完成。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useTransition, useDeferredValue, 过渡, 延迟更新
---

# useTransition 和 useDeferredValue

共性：

- 都是 React 18 中引入的 Hook。
- 都是用于管理 UI 中的过渡状态。
- 都是用于延迟某些状态的更新，直到主渲染任务完成。

# useTransition

> `useTransition` 是 React 18 中引入的一个 Hook，用于管理 UI 中的过渡状态，特别是在处理长时间运行的状态更新时。它允许你将某些更新标记为"过渡"状态，这样 React 可以优先处理更重要的更新，比如用户输入，同时延迟处理过渡更新。

## 用法

```typescript
const [isPending, startTransition] = useTransition();
```

- **参数**：不需要任何参数。
- **返回值**：
  - `isPending`：一个布尔值，表示过渡状态是否正在进行。
  - `startTransition`：一个函数，用于将某些更新标记为过渡状态。

```typescript
startTransition(() => {
  setState(newState);
});
```

> **注意**：`startTransition` 必须是同步的，不能是异步的。

## 错误示例

```typescript
startTransition(() => {
  setTimeout(() => {
    setState(newState);
  }, 1000);
});
```

## 正确示例

```typescript
setTimeout(() => {
  startTransition(() => {
    setState(newState);
  });
}, 1000);
```

> **注意**：`async/await` 是异步的，不能在 `startTransition` 中使用。

## 原理剖析

`useTransition` 的核心原理是将一部分状态更新处理为低优先级任务，这样可以将关键的高优先级任务先执行，而低优先级的过渡更新则会稍微延迟处理。这在渲染大量数据、进行复杂运算或处理长时间任务时特别有效。

React 通过调度机制来管理优先级：

1. **高优先级更新**：直接影响用户体验的任务，比如表单输入、按钮点击等。
2. **低优先级更新**：相对不影响交互的过渡性任务，比如大量数据渲染、动画等，这些任务可以延迟执行。

## useTransition 的实现原理

1. 在 React 内部维护一个任务队列，用于存储所有待执行的任务。
2. 在任务队列中，根据任务的优先级进行排序，高优先级的任务排在前面。

## 和防抖的区别

| 特性         | useTransition                                     | useDeferredValue                                 | 防抖（Debounce）                                       |
| ------------ | ------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| **关注点**   | 状态的过渡                                        | 单个值的延迟更新                                 | 控制函数执行频率，减少不必要的调用                     |
| **用途**     | 控制某个更新的延迟更新，提供过渡反馈              | 将特定状态的更新标记为低优先级                   | 处理频繁触发的事件，如输入框的输入                     |
| **实现方式** | 使用调度机制，将状态更新标记为过渡                | 使用调度机制，将更新标记为低优先级               | 使用定时器，确保在事件触发后的一段时间内只执行一次     |
| **示例**     | `startTransition(() => { setState(newState); });` | `const deferredValue = useDeferredValue(value);` | `const debouncedSearch = debounce(handleSearch, 300);` |

[useTransition 示例](https://github.com/ubdmf/react-demo/blob/useTransition-useDeferred/src/compoments/UseTrasitionCom/UesTransitionCom.tsx)

# useDeferredValue

> `useDeferredValue` 用于延迟某些状态的更新，直到主渲染任务完成。这对于高频更新的内容（如输入框、滚动等）非常有用，可以让 UI 更加流畅，避免由于频繁更新而导致的性能问题。

## 面试问题：useTransition 和 useDeferredValue 的区别

`useTransition` 和 `useDeferredValue` 都涉及延迟更新，但它们关注的重点和用途略有不同：

- **useTransition**：主要关注点是状态的过渡。它允许开发者控制某个更新的延迟更新，还提供了过渡标识，让开发者能够添加过渡反馈。
- **useDeferredValue**：主要关注点是单个值的延迟更新。它允许你把特定状态的更新标记为低优先级。

| 特性       | useTransition                        | useDeferredValue               |
| ---------- | ------------------------------------ | ------------------------------ |
| **关注点** | 状态的过渡                           | 单个值的延迟更新               |
| **用途**   | 控制某个更新的延迟更新，提供过渡反馈 | 将特定状态的更新标记为低优先级 |

## 用法

```typescript
const deferredValue = useDeferredValue(value);
```

- **参数**：

  - `value`：延迟更新的值（支持任意类型）。

- **返回值**：
  - `deferredValue`：延迟更新的值。在初始化渲染期间，返回的延迟值将与你提供的值相同。

## 和防抖的区别

| 特性         | useTransition                                     | useDeferredValue                                 | 防抖（Debounce）                                       |
| ------------ | ------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| **关注点**   | 状态的过渡                                        | 单个值的延迟更新                                 | 控制函数执行频率，减少不必要的调用                     |
| **用途**     | 控制某个更新的延迟更新，提供过渡反馈              | 将特定状态的更新标记为低优先级                   | 处理频繁触发的事件，如输入框的输入                     |
| **实现方式** | 使用调度机制，将状态更新标记为过渡                | 使用调度机制，将更新标记为低优先级               | 使用定时器，确保在事件触发后的一段时间内只执行一次     |
| **示例**     | `startTransition(() => { setState(newState); });` | `const deferredValue = useDeferredValue(value);` | `const debouncedSearch = debounce(handleSearch, 300);` |

#### 陷阱

- `useDeferredValue` 并不是防抖。防抖需要一个固定的延迟时间，例如 1 秒后再处理某些行为，而 `useDeferredValue` 并不是一个固定的延迟。它会根据用户设备的情况进行延迟，当设备情况好时，延迟几乎是无感知的。
- 如果用户输入的值变化很快，那么 `useDeferredValue` 的延迟时间会很长，这样就会导致用户体验很差。

[useDeferredValue 示例](https://github.com/ubdmf/react-demo/blob/useTransition-useDeferred/src/compoments/UseTrasitionCom/UseDeferredCom.tsx)
