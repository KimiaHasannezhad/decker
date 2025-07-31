---
title: Slide Separation
subtitle: How to creat a new slide 
---

# Slide Separation

## Implicit

-   Level 1 headers (`#`) always start a new slide

## Explicit

-   Horizontal rules (`---`) always start a new slide

# Slide number 1

-   Next slide will start with `#`

# Slide number 2

-   Next slide will start with `---`

--------------------------------------------------------------------------------

# Slide number 3

-   Next slide will start with `---`

--------------------------------------------------------------------------------

This is slide 4, it has no header. But an empty header ist generated anyways.

--------------------------------------------------------------------------------

This is slide 5, it also has no header. But an empty header ist generated
anyways.

--------------------------------------------------------------------------------

# Source code {.x-small}
```markdown
# Slide number 3

-   Next slide will start with `---`

--------------------------------------------------------------------------------

This is slide 4, it has no header. But an empty header ist generated anyways.

--------------------------------------------------------------------------------

This is slide 5, it also has no header. But an empty header ist generated
anyways.

--------------------------------------------------------------------------------
```

# Header attributes {#header-attributes .header-class data-msg="What?"}

## Check

-   Slide has
    -   id `#header-attributes`
    -   class `.header-class`
    -   attribute `data-msg="What?"`

# Source code 
```markdown

# Header attributes {#header-attributes .header-class data-msg="What?"}

## Check

-   Slide has
    -   id `#header-attributes`
    -   class `.header-class`
    -   attribute `data-msg="What?"`

```
