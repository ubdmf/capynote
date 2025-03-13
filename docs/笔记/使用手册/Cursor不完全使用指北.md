---
layout: doc
title: Cursor不完全使用指北
description: 深入浅出的Cursor AI编程助手使用指南，涵盖基础配置、核心功能、使用技巧及最佳实践
date: 2025-03-09
head:
  - - meta
    - name: keywords
      content: Cursor, AI编程助手, 使用指南, 配置教程, 功能说明, 最佳实践, 工作流程
---

# Cursor 不完全使用指北

<p class="tip">
本指南旨在快速掌握 Cursor AI 编程助手的核心功能和使用技巧。
</p>

## 安装与配置

### 安装方式

<p class="supplementary">
Cursor 提供了便捷的安装方式，可以通过以下官方渠道获取：
</p>

- [Cursor 官网](https://www.cursor.com/cn)
- [Cursor 文档](https://docs.cursor.com/get-started/welcome)

### 基础配置

#### 恢复 VSCode 布局

<p class="tip">
如果习惯了 VSCode 的布局，可以通过以下步骤恢复：
</p>

```text
# cursor -> preferences -> vscode settings
search workbench.activityBar.orientation
选择 vertical
```

## 核心概念与快捷键

### 重要概念辨析

<p class="important">
以下是两个容易混淆但概念截然不同的术语：
</p>

- <span class="definition">submit</span>：代码提交操作
- <span class="definition">codebase</span>：代码库，指整个项目的代码集合

### Cmd + K 快捷键

<p class="tip">
Cmd + K 是 Cursor 中最常用的快捷键之一，它具有以下功能：
</p>

- <span class="note">上下文感知建议</span>：根据当前光标位置，智能提供代码片段、函数或变量的建议
- <span class="success">全场景支持</span>：在编辑器和命令行中均可使用

## 功能特性

### @Web 功能

<p class="supplementary">
@Web 是 Cursor 提供的强大功能之一：
</p>

- <span class="definition">功能定义</span>：用于引用外部网络资源和文档
- <span class="success">使用场景</span>：获取参考资料、查询 API 文档、浏览相关示例

### 实际应用示例

<p class="tip">
以下是一些常见的使用场景：
</p>

1. <span class="example">查看函数定义</span>：在代码中遇到陌生函数时，按 <span class="keyword">Cmd + K</span> 快速查看其定义
2. <span class="example">查找文档示例</span>：使用 <span class="keyword">@Web</span> 搜索相关库的使用示例

## @ 召唤工具

<p class="important">
Cursor 提供了丰富的工具集，可以通过 @ 符号快速调用：
</p>

### 核心工具

<p class="supplementary">
以下是最常用的核心工具：
</p>

1. <span class="definition">@Files</span> - 引用项目中的特定文件
2. <span class="definition">@Folders</span> - 引用整个文件夹以获取更广泛的上下文
3. <span class="definition">@Code</span> - 引用代码库中的特定代码片段或符号
4. <span class="definition">@Docs</span> - 访问文档和指南

### 版本控制工具

5. <span class="definition">@Git</span> - 访问 git 历史记录和更改
6. <span class="definition">@Recent Changes</span> - 查看最近的代码修改

### AI 辅助工具

7. <span class="definition">@Cursor Rules</span> - 使用光标规则
8. <span class="definition">@Summarized Composers</span> - 使用总结的作曲家会话
9. <span class="definition">@Codebase</span> - 作为上下文引用整个代码库（仅限聊天）
10. <span class="definition">@Lint Errors</span> - 引用 lint 错误（仅限聊天）

### 其他工具

11. <span class="definition">@Web</span> - 引用外部网络资源和文档
12. <span class="definition">@Link</span> - 创建指向特定代码或文档的链接
13. <span class="definition">@Definitions</span> - 查找符号定义（仅限 Cmd K）
14. <span class="definition">@Notepads</span> - 访问笔记本

<p class="tip">
此外，还有一些特殊符号可以使用：
</p>

- <span class="keyword">#Files</span> - 添加文件到上下文而不引用
- <span class="keyword">/Commands</span> - 将打开和活动文件添加到上下文

## 三种工作模式详解

<p class="important">
Cursor 提供了三种不同的工作模式，每种模式都有其特定的使用场景和权限范围：
</p>

### Ask 模式

<p class="supplementary">
最基础的交互模式，适合快速获取信息和解答问题。
</p>

<p class="tip">
主要特点：
</p>

- <span class="success">简单直接的问答交互</span>
- <span class="success">快速响应</span>
- <span class="warning">无代码修改权限</span>
- <span class="note">适合获取知识和建议</span>

### Agent 模式

<p class="supplementary">
强大的任务执行模式，适合处理复杂的开发任务。
</p>

<p class="tip">
核心能力：
</p>

- <span class="success">执行多步骤任务</span>
- <span class="success">分析整个代码库</span>
- <span class="success">提供深度上下文建议</span>
- <span class="note">可执行授权命令</span>
- <span class="warning">处理时间较长</span>

### Edit 模式

<p class="supplementary">
直接的代码编辑模式，最适合实际的编码工作。
</p>

<p class="tip">
关键特性：
</p>

- <span class="success">直接修改代码</span>
- <span class="success">实时代码建议</span>
- <span class="success">支持代码重构</span>
- <span class="note">深度集成编辑器功能</span>

## Rules 系统

<p class="important">
Cursor 的 Rules 系统是一个强大的定制化工具，可以帮助你更好地管理和使用 AI 助手。
</p>

### 全局 Rules

<p class="supplementary">
在 Cursor settings 中配置的全局规则，将应用于所有项目：
</p>

- <span class="success">统一的编码风格</span>
- <span class="success">通用的开发规范</span>
- <span class="success">跨项目的 AI 行为定制</span>

### 项目 Rules

<p class="tip">
项目级别的规则需要启用 `Include .cursorrules file` 选项。
</p>

#### 版本 0.45 之前

<p class="supplementary">
在项目根目录创建 `.cursorrules` 文件来配置规则：
</p>

![.cursorrules](https://raw.githubusercontent.com/capykyo/images/master/capynote/cursorrules.jpeg)

<video controls>
  <source src="https://raw.githubusercontent.com/capykyo/images/master/capynote/cursorrules.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

#### 版本 0.45 及之后

<p class="supplementary">
支持将规则分类存储在不同文件中，通过 `@Cursor Rules` 引用：
</p>

![Cursor Rules](https://raw.githubusercontent.com/capykyo/images/master/capynote/cursor-rules.jpeg)

<p class="tip">
使用 `npx codefetch` 可以获取项目结构，方便配置 Cursor Rules。
</p>

<video controls>
  <source src="https://raw.githubusercontent.com/capykyo/images/master/capynote/cursor-rules.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>
