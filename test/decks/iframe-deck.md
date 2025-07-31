---
title: Iframes
---

# Iframes 

## Some slides can show with iframes

1.  Iframe embedded in slide
2.  Iframe as background
3.  Iframe embedded in slide showing a PDF
4.  Iframe as background showing a PDF
5.  Iframe showing local HTML file

------------------------------------------------------------------------

# Iframe showing a URL address (embedded in slide) {.small }

For Example : <https://hci.uni-wuerzburg.de/>

The Ifram : 

![](https://hci.uni-wuerzburg.de/){.iframe 
width="100%" height="500px" style="border: 2px blue solid;"}

# Source code {.small}
``` {.markdown}
For Example : <https://hci.uni-wuerzburg.de/>

The Ifram : 

![](https://hci.uni-wuerzburg.de/){.iframe 
width="100%" height="500px" style="border: 2px blue solid;"}
```
------------------------------------------------------------------------

# Ifram as Background

Next slide is showing an Iframe as background

# 

![](https://hci.uni-wuerzburg.de/){.iframe} 

# Source code {.small}
``` {.markdown}
![](https://hci.uni-wuerzburg.de/){.iframe} 
```
------------------------------------------------------------------------

# Iframe embedded in slide, showing a PDF {.small}

the PDF : <https://pandoc.org/MANUAL.pdf>

The Iframe : 

![](https://pandoc.org/MANUAL.pdf){width="100%" height="500px"}

# Source code {.small}
``` {.markdown}
the PDF : <https://pandoc.org/MANUAL.pdf>

The Iframe : 

![](https://pandoc.org/MANUAL.pdf){width="100%" height="500px"}
```

------------------------------------------------------------------------

# Iframe as background showing a PDF

Next slide is showing an PDF Iframe as background

# 
 ![](include/06-metal.pdf)

# Source code {.small}
``` {.markdown}
 ![](include/06-metal.pdf)
```

------------------------------------------------------------------------

# Iframe showing local HTML file {.x-small}

## While preserving the URI query string

![](../reload.html?model=../../meshes/blubb.off){.iframe .resource style="border: 2px blue solid;" height="500px"}

# Source code 

markdown source code :
``` {.markdown}
![](../reload.html?model=../../meshes/blubb.off){.iframe .resource style="border: 2px blue solid;" height="500px"}

```

html source code : 

``` {.html}
<iframe 
    data-src="../reload.html?model=../../meshes/blubb.off" 
    class="iframe 
    resource">
Browser does not support iframe.
</iframe>
```
------------------------------------------------------------------------


