---
title: Special Filenames
subtitle: Handling Unusual and URL-Encoded Filenames in Presentations
---

# Introduction

This deck demonstrates embedding images with unusual filenames or URL-encoded characters in a presentation, using relative and absolute paths with Decker path transformations.

# Relative Path Filenames {.columns}

## Unusual Filename {.left}

```markdown
![](./@f{u}nn y.png)
```

![](./@f{u}nn y.png)

## URL-Encoded Filename {.right}

```markdown
![](./@f%7Bu%7Dnn%20y.png)
```

![](./@f%7Bu%7Dnn%20y.png)

# Absolute Path Filenames {.columns}

## Unusual Filename {.left}

```markdown
![](/test/decks/@f{u}nn y.png)
```

![](/test/decks/@f{u}nn y.png)

## URL-Encoded Filename {.right}

```markdown
![](/test/decks/@f%7Bu%7Dnn%20y.png)
```

![](/test/decks/@f%7Bu%7Dnn%20y.png)