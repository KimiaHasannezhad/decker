---
title: Background Videos
subtitle: diffrent ways to add background videos
---

------------------------------------------------------------------------

# Background Videos

## Way of creating Slides with background video :

1.  RevealJS style with `data-background-video` attribute
2.  decker style with image and title text header
3.  decker style with image and title text header and `loop` attribute

------------------------------------------------------------------------

#  RevealJS style with `data-background-video` {data-background-video="movie.mp4"}

# RevealJS style with `data-background-video`
<br><br><br>
Source code :
``` {.markdown}
# RevealJS style with `data-background-video` {data-background-video="movie.mp4"}
```

------------------------------------------------------------------------

# With image and title text header ![This caption is only visible in handouts](movie.mp4){.controls}

# With image and title text header
<br><br><br>
Source code :
``` {.markdown}
# With image and title text header ![](movie.mp4)
```

## Only in handouts {.handout}

-   This additional text is also only visible in handouts

------------------------------------------------------------------------

# With image and title text header and `loop` attribute ![](movie.mp4){loop="1"}

# With image and title text header and `loop` attribute
<br><br><br>
Source code :
``` {.markdown}
# with image and title text header and `loop` attribute ![](movie.mp4){loop="1"}
```
