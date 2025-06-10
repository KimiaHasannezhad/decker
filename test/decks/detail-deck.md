---
title: Collapsible detail sections
subtitle: ways to create collapsible detail sections using headers and div blocks, including pop-up and custom summary styles
---

# Clickable header 

This turns a header into a clickable summary.

When clicked, it reveals the content that follows (like a bullet list):

<br><br>

## sample : 
## header clickable summary {.details}

-   this is more detaile 1 
-   this is more detaile 2


# Clickable header source code : 

```` markdown 
## sample : 
## header clickable summary {.details}

-   this is more detaile 1 
-   this is more detaile 2
````

# popup-style detail box 

This creates a popup-style detail box (like a modal or side-float),could containing an image:

<br><br>

## Sample :

<br><br>

## This is Pop-ups sample {.details .popup width="90%"}

![](include/06-metal.png){width="90%"}

# popup-style detail box source code : 

```` markdown 
## Sample :

## This is Pop-ups sample {.details .popup width="90%"}

![](include/06-metal.png){width="90%"}
````


# Div Block Detail

This shows how to create a detail block using a div container : 

## Sample :

<br><br>

::: {.details summary="Div detail summmary."}
-   detail number one 
-   detail number two
:::

# Div Block Detail source code : 

```` markdown
## Sample :

::: {.details summary="Div detail summmary."}
-   detail number one 
-   detail number two
:::
````

# Mixed header and div block

This mixes a header collapsible and a div-based collapsible on the same slide. So you'll have:

- A clickable header to reveal a list.

- A collapsible div inside the same slide.

<br>

## Sample : 

<br>

## header clickable summary {.details}

-   this is more detaile 1 
-   this is more detaile 2

::: {.details summary="Div detail summmary."}
-   detail number one 
-   detail number two
:::

# Mixed header and div block source code : 

```` markdown
## Sample :

## header clickable summary {.details}

-   this is more detaile 1 
-   this is more detaile 2

::: {.details summary="Div detail summmary."}
-   detail number one 
-   detail number two
:::
````