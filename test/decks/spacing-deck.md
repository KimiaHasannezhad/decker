---
reveal:
  center: false
title: Spacing and Margins
highlightjs: false
highlight-style: pygments
---

# Introduction to Layout {.columns}

## Text Only {.left}

Empty header.

Just a few lines of text.

## Image Only {.right}

![Image](include/06-metal.png)

# Surce code {.x-small}
```markdown
# Introduction to Layout {.columns}

## Text Only {.left}

Empty header.

Just a few lines of text.

## Image Only {.right}

![Image](include/06-metal.png)
``` 

# Paragraph Spacing

## Short and Long Paragraphs

A short one-line paragraph.

A longer paragraph that `contains a *lot more* words`{.markdown} than the short one-line paragraph.

A short one-line paragraph.

A longer paragraph that contains significantly more words than the short one-line paragraph, demonstrating extended text wrapping and spacing.

# Source code {.x-small}
```markdown
# Paragraph Spacing

## Short and Long Paragraphs

A short one-line paragraph.

A longer paragraph that `contains a *lot more* words`{.markdown} than the short one-line paragraph.

A short one-line paragraph.

A longer paragraph that contains significantly more words than the short one-line paragraph, demonstrating extended text wrapping and spacing.

```

# List Formatting {.columns}

## Standalone List {.left}

- Line one is very short.
- Line two is not much longer.
- Line three is long enough to wrap.

## Framed List {.right}

Text before the list.

- Line one is very short.
- Line two is not much longer.
- Line three is long enough to wrap.

Text after the list.

# Source code {.x-small}
```markdown
# List Formatting {.columns}

## Standalone List {.left}

- Line one is very short.
- Line two is not much longer.
- Line three is long enough to wrap.

## Framed List {.right}

Text before the list.

- Line one is very short.
- Line two is not much longer.
- Line three is long enough to wrap.

Text after the list.
```

# Indented List Formatting {.columns}

## Standalone Indented List {.left}

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

## Framed Indented List {.right}

Text before the indented list.

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

Text after the indented list.

# Source code {.x-small}
```markdown
# Indented List Formatting {.columns}

## Standalone Indented List {.left}

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

## Framed Indented List {.right}

Text before the indented list.

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

Text after the indented list.
```

# Paragraph and Image Layout {.columns}

## Untagged Content {.left}

A short one-line paragraph.

![$e=mc^2$](include/06-metal.png)

A longer paragraph that contains significantly more words than the short one-line paragraph.

## Tagged Content {.right .success}

A short one-line paragraph.

![$e=mc^2$](include/06-metal.png)

A longer paragraph that contains significantly more words than the short one-line paragraph.

# Source code {.x-small}
```markdown
# Paragraph and Image Layout {.columns}

## Untagged Content {.left}

A short one-line paragraph.

![$e=mc^2$](include/06-metal.png)

A longer paragraph that contains significantly more words than the short one-line paragraph.

## Tagged Content {.right .success}

A short one-line paragraph.

![$e=mc^2$](include/06-metal.png)

A longer paragraph that contains significantly more words than the short one-line paragraph.
```

# Multiple Blocks in a Column

## First Block

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

## Second Block

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

# Source code {.x-small}
```markdown
# Multiple Blocks in a Column

## First Block

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.

## Second Block

- Line one is very short.
  - Line two is not much longer.
- Line three is long enough to wrap.
```

# Tagged Blocks

## Terminology Update {.warning}

- No longer called **~~boxes~~**.
- Now referred to as **blocks**.
- Suggested update: `%s/\.box/\.block/g`.

## Image Block

![$e=mc^2$](include/06-metal.png){width="40%"}

# Source code {.x-small}
```markdown
# Tagged Blocks

## Terminology Update {.warning}

- No longer called **~~boxes~~**.
- Now referred to as **blocks**.
- Suggested update: `%s/\.box/\.block/g`.

## Image Block

![$e=mc^2$](include/06-metal.png){width="40%"}
```