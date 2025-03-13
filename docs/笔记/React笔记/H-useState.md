---
layout: doc
title: useState
description: useState 是 React 中用于管理状态的 Hook，可以方便的创建和管理状态。
date: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, useState, 复杂类型, 数组, 对象
---

# useState

## 对于复杂类型的使用

### 数组

在 `useState` 中，数组视为只读，不可直接修改原数组。

| 操作类型 | 避免使用的方法（会改变原数组） | 推荐使用的方法（返回新数组） |
| -------- | ------------------------------ | ---------------------------- |
| 增加元素 | push, unshift                  | concat, [...arr]             |
| 删除元素 | pop, shift, splice             | filter, slice                |
| 修改元素 | splice, arr[i] = newValue      | map                          |
| 排序操作 | reverse, sort                  | 先复制一份再操作             |

- **新增数据**：创建一个新数组，包含原有数组的所有元素，然后在末尾添加新元素。如果想在开头添加新元素，反过来操作即可。
- **删除数据**：使用 `filter` 过滤掉不需要的元素。
- **数组替换**：使用 `map` 筛选出需要替换的元素，然后替换为新的元素，其他保持不变。

**原则**：不操作元素，创建一个新的数组。

[数组操作](https://github.com/capykyo/react-demo/blob/hooks/src/compoments/TypeOperations/Arr.tsx)

### 对象

在 `useState` 中，对象视为只读，不可直接修改原对象。

**原则**：不操作元素，创建一个新的对象。

[对象操作](https://github.com/capykyo/react-demo/blob/hooks/src/compoments/TypeOperations/Object.tsx)

[useState 的更新机制](https://github.com/capykyo/react-demo/blob/hooks/src/compoments/TypeOperations/UseStateUpdate.tsx)
