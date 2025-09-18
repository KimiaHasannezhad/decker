---
lang: de
title: Examiner Questions Import
subtitle: This deck demonstrates different types of exam questions
zoom: false
---

# Overview {#overview .columns}

## Three question types {#three-question-types .top}

1.  Multiple choice
2.  Free text (impossible to grade automatically)
3.  Multiple answer selection

# Multiple choice grading

## {#section .left}

The number of points $p$ is

$$
p=\frac{(c-w)^+}{n}t
$$

## {#section-1 .right}

where

-   $t$ is maximum points possible
-   $c$ is correctly checked boxes
-   $w$ is incorrectly checked boxes
-   $n$ is correct choices available

# Souce code {.small}
` markdown
# Multiple choice grading

## {#section .left}

The number of points $p$ is

$$
p=\frac{(c-w)^+}{n}t
$$

## {#section-1 .right}

where

-   $t$ is maximum points possible
-   $c$ is correctly checked boxes
-   $w$ is incorrectly checked boxes
-   $n$ is correct choices available

<!--
--------------------------------------------------------------------------------

![](./data/homogenous-coordinates-quest.yaml){ .poll}

--------------------------------------------------------------------------------

![](./data/homogenous-coordinates-quest.yaml){}

# Source code {.small}
` markdown
![](./data/homogenous-coordinates-quest.yaml){.question}



--------------------------------------------------------------------------------

![](./data/replacement-transform-1-quest.yaml){ .poll}


# Source code {.small}
` markdown
![](./data/replacement-transform-1-quest.yaml){.question .poll}


--------------------------------------------------------------------------------
![](./data/composite-pattern-2-quest.yaml){}

# Source code {.small}
` markdown
![](./data/composite-pattern-2-quest.yaml){.question}


--------------------------------------------------------------------------------

![](./data/texture-transformation-quest.yaml){.question}
-->

# 
![](./data/quest1.yaml){.question .poll}

--------------------------------------------------------------------------------


# 
![](./data/quest2.yaml){.question .poll}

--------------------------------------------------------------------------------
<!-- 
![](./data/many-many-quest.yaml){ .poll }

# Source code {.small}
` markdown
![](./data/many-many-quest.yaml){ .poll }
--> -->
