---
title: bash snippits
title_nav: bash
hide: false
---

A collection of misc bash snippits for my own memory.

```
# Converting all files in a directory to unix EOL markers
find . -type f -print0 -name '*.ext' | xargs -0 dos2unix
```