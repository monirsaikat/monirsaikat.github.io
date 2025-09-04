+++
date = '2025-09-04T00:11:38+06:00'
draft = false
title = 'Reset your branch to a commit'
+++

If you want your current branch (e.g., main) to go back to that commit:
```bash
git fetch origin
git checkout main
git reset --hard that-commit-hash
```