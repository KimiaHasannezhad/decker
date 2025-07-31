---
title: Figures for Images
subtitle: This deck demonstrates how Pandoc handles images as figures and captions
---

# Figures for Images {layout="columns"}

## Pandoc 2.0 {.left}

As of Pandoc 2.0:

> An image with nonempty alt text, occurring by itself in a paragraph,
> will be rendered as a figure with a caption. The image's alt text will
> be used as the caption.

## Image with figure {.right}

Strangely, this does not work.

![This is the alt text of the image](include/06-metal.png)

Strangely, this does not work.

# Source code {.small}
````markdown
![This is the alt text of the image](include/06-metal.png)
````
--------------------------------------------------------------------------------

# Naked Images

## Image without caption

![](include/06-metal.png)

# Source code {.small}
````markdown
![](include/06-metal.png)
````
--------------------------------------------------------------------------------

# Naked Image with Caption {.columns}

## Image with caption {.left}

![Alt text as caption](include/06-metal.png)

# Source code {.small}
````markdown
![Alt text as caption](include/06-metal.png)
````
--------------------------------------------------------------------------------

# Caption as Extra Line {.columns}

## Image with caption {.left}

![](include/06-metal.png)

Caption: Caption on an extra line.

# Source code {.small}
````markdown
![](include/06-metal.png)

Caption: Caption on an extra line.
````
--------------------------------------------------------------------------------

# Naked Image Pair {.columns}

## Two images with caption {.left}

hallo ![Caption 1](include/06-metal.png){width="45%"} holla ![Caption 2](include/06-metal.png){width="45%"}

Just a line of text


# Source code {.small}
````markdown
hallo ![Caption 1](include/06-metal.png){width="45%"} holla ![Caption 2](include/06-metal.png){width="45%"}

Just a line of text
````