---
layout: doc
title: capynote 文本编辑规则 - AI 使用
description: capynote 是一个基于 vitepress 的文档管理工具，可以方便的创建和管理文档。
date: 2025-03-06
type: recommendation
head:
  - - meta
    - name: keywords
      content: capynote, vitepress, markdown
---

# Capynote 使用说明

欢迎来到 capynote 使用说明文档！

# Capynote 自定义样式类使用手册

## p 元素样式 - 只用于包裹单行文本

以下样式类用于包裹单行内容：

<p class="important">
重要 - 用于突出显示关键定义。背景为红色系，浅色模式下红底白字，深色模式下深红底浅红字。适用于必须引起注意的重要信息。不要轻易和整段使用。
</p>

<p class="supplementary">
补充 - 用于提醒的额外上下文的补充信息。背景为绿色系，浅色模式下浅绿底深绿字，深色模式下深绿底浅绿字。适用于提示对主要内容的补充说明。不要轻易和整段使用。
</p>

<p class="tip">
提示 - 用于提供提醒的建议或小技巧。背景为蓝色系，浅色模式下浅蓝底深蓝字，深色模式下深蓝底浅蓝字。适用于提醒提示性内容。不要轻易和整段使用。
</p>

## 行内元素样式

以下样式类用于标记句子中的特定文本：

- <span class="warning">警告</span> - 橙色文本，用于强调潜在问题或需要注意的风险。
- <span class="error">错误</span> - 红色文本，用于标识错误或不应该遵循的做法。
- <span class="success">成功</span> - 绿色文本，用于标识正确做法或成功结果。
- <span class="example">实例</span> - 紫色文本，用于提供实例说明。
- <span class="definition">术语</span> - 青色文本，用于术语解释或概念定义。
- <span class="quote">引用</span> - 斜体灰色文本，用于引述文献或他人观点。
- <span class="note">注意</span> - 蓝色文本，用于一般需要注意的事项。
- <span class="keyword">关键词</span> - 带有特殊边距和字重的文本，用于突出显示关键术语。
- <span class="warning_underline">警告下划线</span> - 带有橙色下划线的文本，用于警示性强调。

## 其他工具类

<p class="text-center">文本居中 - 使文本居中对齐，通常应用于段落元素。</p>

## 使用示例

<p class="important">
这是一段非常重要的信息，需要引起读者的高度注意。
</p>

这段文本中包含<span class="warning">需要特别注意的警告内容</span>和<span class="definition">专业术语解释</span>。

<p class="text-center">这是一段居中显示的文本</p>

## 注意事项

1. <p class="note">块级元素样式</p>（important、supplementary、tip）应使用 `p` 标签包裹整个内容块。
2. <span class="note">行内元素样式</span>应使用 `<span>` 标签包裹特定文本。
3. 所有样式类都有对应的深色模式适配，无需额外设置。
4. <span class="warning">不要混用块级元素样式和行内元素样式</span>，以免造成显示异常。
5. 不要轻易使用 p 元素样式，除非是单行文本。
