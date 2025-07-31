---
title: Video Autoplay
subtitle: Testing Video Playback with Autoplay and Start Time Options
---

# Video Autoplay Overview

## Slides

- Video without autoplay
- Video with autoplay
- Video with start time as attribute
- Autoplay on with start time as fragment
- Native video tag

# Source Code

```markdown
## Slides

- Video without autoplay
- Video with autoplay
- Video with start time as attribute
- Autoplay on with start time as fragment
- Native video tag
```

# Autoplay Off

![](pacman-perfect-game.mp4){.controls width="50%"}

# Source Code

```markdown
![](pacman-perfect-game.mp4){.controls
 width="50%"}
```

# Autoplay On

![](pacman-perfect-game.mp4){.controls .autoplay width="50%"}

# Source Code

```markdown
![](pacman-perfect-game.mp4){.controls .autoplay 
width="50%"}
```

# Autoplay Off with Start Time as Attribute

![](pacman-perfect-game.mp4){.controls width="50%" start="200"}

# Source Code

```markdown
![](pacman-perfect-game.mp4){.controls width="50%" 
start="200"}
```

# Autoplay On with Start Time as Fragment

![](pacman-perfect-game.mp4#t=200){.controls
 .autoplay width="50%"}

# Source Code

```markdown
![](pacman-perfect-game.mp4#t=200){.controls 
.autoplay width="50%"}
```

# Native Video Tag

```{=html}
<video style="width:50%;" src="pacman-perfect-game.mp4#t=200"
 controls data-autoplay>
</video>
```

# Source Code

```markdown
```{=html}
<video style="width:50%;" 
src="pacman-perfect-game.mp4#t=200" 
controls data-autoplay>
</video>
```
```