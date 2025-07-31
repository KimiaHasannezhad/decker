---
title: Sizes in decks
subtitle: Text sizes 
---

# Sizing Divs

::: columns-1-1

::: col

## Normal Usage

::: xx-small

`.xx-small`: 0.4

:::

::: x-small

`.x-small`: 0.6

:::

::: small

`.small`: 0.8

:::

::: normal

`.normal`: 1.0

:::

::: large

`.large`: 1.2

:::

::: x-large

`.x-large`: 1.4

:::

::: xx-large

`.xx-large`: 1.6

:::

:::

::: col

## Nested Usage

::: small

::: small

`.small .small`: 0.64

:::

:::

::: large

::: large

`.large .large`: 1.44

:::

:::

::: large

`.large`

::: normal

`.large .normal`

:::

:::

:::

:::


# Source code  {.xx-small}
```{.markdown}

# Sizing Divs

::: columns-1-1

::: col

## Normal Usage

::: xx-small

`.xx-small`: 0.4

:::

::: x-small

`.x-small`: 0.6

:::

::: small

`.small`: 0.8

:::

::: normal

`.normal`: 1.0

:::

::: large

`.large`: 1.2

:::

::: x-large

`.x-large`: 1.4

:::

::: xx-large

`.xx-large`: 1.6

:::

:::

::: col

## Nested Usage

::: small

::: small

`.small .small`: 0.64

:::

:::

::: large

::: large

`.large .large`: 1.44

:::

:::

::: large

`.large`

::: normal

`.large .normal`

:::

:::

:::

:::
```

# Sizing Spans

[`.xx-small`]{.xx-small}

[`.x-small`]{.x-small}

[`.small`]{.small}

[`.normal`]{.normal}

[`.large`]{.large}

[`.x-large`]{.x-large}

[`.xx-large`]{.xx-large}

# Source code {.x-small}
```markdown

# Sizing Spans

[`.xx-small`]{.xx-small}

[`.x-small`]{.x-small}

[`.small`]{.small}

[`.normal`]{.normal}

[`.large`]{.large}

[`.x-large`]{.x-large}

[`.xx-large`]{.xx-large}
```

# Sizing Tables with Div

::: columns-1-1

::: {}

`.normal` sized

::: normal

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | 50     | 75    |
Table: Table Caption

:::

:::

::: {}

`.xx-large` sized

::: xx-large

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | 50     | 75    |
Table: Table Caption

:::

:::

:::

::: center

Reset with `.normal`

::: x-large

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | [50]{.normal}     | 75    |
Table: Table Caption

:::

:::

# Source code  {.xx-small}
```markdown
# Sizing Tables with Div

::: columns-1-1

::: {}

`.normal` sized

::: normal

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | 50     | 75    |
Table: Table Caption

:::

:::

::: {}

`.xx-large` sized

::: xx-large

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | 50     | 75    |
Table: Table Caption

:::

:::

:::

::: center

Reset with `.normal`

::: x-large

| Left | Middle | Right |
| :--- | :----: | ----: |
| 25   | [50]{.normal}     | 75    |
Table: Table Caption

:::

:::

```
