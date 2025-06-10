---
title: Aria Label Generation
subtitle:  Image Accessibility (ALT vs aria-label)
---

# Diffrent type of images : 
<br><br><br>    

An **ALT** text (used by screen readers) :

  -  It is an alternative text which is shown if the image can't load.<br><br><br>

A **TITLE** (shown on hover) :

  -  It can be Title of the image shown as a tooltip on hover.<br><br><br>

An **aria-label** (for accessibility) :

   -  **`aria-label`** is an accessibility attribute that provides a text label to assistive technologies like screen readers.<br><br><br>

# Type 1

-  Has **ALT**, **TITLE**, and **aria-label**

![some text as an ALT](include/06-metal.png "TITLE"){aria-label="ARIA" height="auto"}


Source code :
```` markdown
![some text as an ALT](include/06-metal.png "TITLE"){aria-label="ARIA"}
````


# Type 2

-   Has **ALT** and **TITLE**

![some text as an ALT](include/06-metal.png "TITLE"){height="auto"}


Source code :
```` markdown
![some text as an ALT](include/06-metal.png "TITLE")
````



# Type 3

-   Has **ALT** and **aria-label**

![some text as an ALT](include/06-metal.png){aria-label="ARIA" height="auto"}


Source code :
```` markdown
![some text as an ALT](include/06-metal.png){aria-label="ARIA"}
````

# Type 4

-  Only has **ALT** 

![some text as an ALT](include/06-metal.png){height="auto"}


Source code :
```` markdown
![some text as an ALT](include/06-metal.png)
````


# Type 5

-  These images **do not include any `ALT` text**, and may rely only on an **aria-label** or nothing at all

![](include/06-metal.png){height="auto"}

Source code :
```` markdown
1- ![](include/06-metal.png "TITLE"){aria-label="ARIA"}
2- ![](include/06-metal.png "TITLE")
3- ![](include/06-metal.png){aria-label="ARIA"}
4- ![](include/06-metal.png)
````