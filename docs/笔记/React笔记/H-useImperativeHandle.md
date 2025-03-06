---
layout: doc
title: useImperativeHandle
description: useImperativeHandle 是 React 中用于处理子组件暴露给父组件的钩子，可以方便地在子组件内部暴露给父组件，句柄父组件可以调子组件的方法，或者访问子组件的属性。如果你学过 Vue，就类似于 Vue 的 `defineExpose`。
data: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useImperativeHandle, 句柄, 暴露, 钩子
---

# useImperativeHandle

> 可以在子组件内部暴露给父组件，句柄父组件可以调子组件的方法，或者访问子组件的属性。如果你学过 Vue，就类似于 Vue 的 `defineExpose`。

```tsx
useImperativeHandle(ref, () => {
  return {
    // 暴露给父组件的方法或属性
  }, [deps]);
```

## 参数

- **ref**: 父组件传递的 ref 对象
- **createHandle**: 返回值，返回一个对象，对象的属性就是子组件暴露给父组件的方法或属性。
- **deps?**: [可选] 依赖项，当依赖项发生变化时，会重新调用 createHandle 函数，类似于 useEffect 的依赖项。

## 注意

- React 18 和 19 版本不一样。

## 执行时机 [第三个参数]

1. **不传入第三个参数**:

   - `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，都会执行一次。
   - 示例:
     ```tsx
     useImperativeHandle(ref, createHandle);
     ```

2. **传入空数组**:

   - `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，不会执行。
   - 示例:
     ```tsx
     useImperativeHandle(ref, createHandle, []);
     ```

3. **传入依赖项**:
   - `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，会根据依赖项的变化而决定是否再次执行。
   - 示例:
     ```tsx
     useImperativeHandle(ref, createHandle, [deps]);
     ```

| 传入第三个参数 | 执行时机描述                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------- |
| 不传入         | `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，都会执行一次                         |
| 空数组         | `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，不会执行                             |
| 有依赖项       | `useImperativeHandle` 会在组件挂载时执行一次，然后状态更新时，会根据依赖项的变化而决定是否再次执行 |

[useImperativeHandle](https://github.com/ubdmf/react-demo/tree/useImperativeHandle/src/compoments/UseImperativeHandleCom/UseImperativeHandleExample.tsx)

[FormExample](https://github.com/ubdmf/react-demo/tree/useImperativeHandle/src/compoments/UseImperativeHandleCom/FormExample.tsx)
