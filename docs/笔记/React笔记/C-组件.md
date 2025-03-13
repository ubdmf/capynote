---
layout: doc
title: React 组件
description: 组件传值，父子组件通信，兄弟组件通信
date: 2025-03-06
head:
  - - meta
    - name: keywords
      content: React, 组件, 传值, 父子组件通信, 兄弟组件通信
---

# React 组件

## 全局组件

[Message 组件源码](https://github.com/capykyo/react-demo/tree/main/src/compoments/Message/index.tsx)

## 组件传值

### 父子组件通信

[组件传值,父>子](https://github.com/capykyo/react-demo/tree/main/src/compoments/Card/index.tsx)

[组件传值,子>父](https://github.com/capykyo/react-demo/tree/main/src/App.tsx)
父组件中定义一个函数，子组件中调用该函数，将值传递给父组件

### 兄弟组件通信

通过发布订阅模式实现：

```ts
//发布
window.dispatchEvent(event);
//订阅
window.addEventListener(event, callback);
```

相关示例：

- [发送组件](https://github.com/capykyo/react-demo/tree/main/src/compoments/Card/index.tsx)
- [接收组件](https://github.com/capykyo/react-demo/tree/main/src/compoments/Card2/index.tsx)
