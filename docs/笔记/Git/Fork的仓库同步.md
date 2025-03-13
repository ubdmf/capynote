---
layout: doc
title: Fork 仓库分支同步
description: 学习如何将原始仓库的新分支同步到自己fork的仓库中，包含完整的Git命令步骤指南
date: "2025-03-05"
head:
  - - meta
    - name: keywords
      content: Git，Fork，分支同步
---

# Fork 仓库分支同步

要同步目标仓库的新建分支到您 fork 的仓库，可以按照以下步骤操作：

1. **添加上游仓库**（目标仓库）为远程源：

   ```bash
   git remote add upstream <目标仓库的URL>
   ```

2. **获取上游仓库的更新**：

   ```bash
   git fetch upstream
   ```

3. **查看上游仓库的分支**：

   ```bash
   git branch -r
   ```

4. **创建并切换到新分支**（假设目标仓库中新建的分支名为 `new-branch`）：

   ```bash
   git checkout -b new-branch upstream/new-branch
   ```

5. **推送新分支到您的 fork 仓库**：
   ```bash
   git push origin new-branch
   ```
