---
title: Image Stack Test
subtitle: Show images in a stack
reveal:
  center: true
---

# Image Stack Slide

::: stack

![](./assets/picard-facepalm.jpeg){ width=256px .fragment }
![](./assets/slab-test-0.svg){ width=256px .fragment }
![](./dumbell-hard.svg){ width=256px .fragment }
![](./example-stanford-bunny-200x160.jpg){ width=256px .fragment }

:::

# Souce code 

The TUDO resource pack uses the following syntax for stacked images:

``` markdown
::: stack

![](image){ .fragment }
![](image){ .fragment }
![](image){ .fragment }
![](image){ .fragment }

:::
```
