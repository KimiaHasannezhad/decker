---
lang: de-DE
title: Include Code
subtitle : show codes in slides
---

# Embedd source code {.small}


``` haskell
includeCode :: Pandoc -> Decker Pandoc
includeCode (Pandoc meta blocks) = do
  included <- doIO $ walkM (P.includeCode Nothing) blocks
  return $ Pandoc meta included
```

# Source code 

```` markdown
``` haskell
includeCode :: Pandoc -> Decker Pandoc
includeCode (Pandoc meta blocks) = do
  included <- doIO $ walkM (P.includeCode Nothing) blocks
  return $ Pandoc meta included
```
````

-------------------------------------------------------

# Include the entire file {.x-small}

![](/src/Text/Decker/Filter/Media.hs){.haskell .code width="100%" height="500px"}


# Source code

``` markdown
![](/src/Text/Decker/Filter/Media.hs){.haskell .code width="100%" height="500px"}
```

-------------------------------------------------------

# Include a tagged snippet (Image syntax) {.small}

![](/src/Text/Decker/Filter/Media.hs#include-even-shorter){.haskell .code 
width="100%" height="500px"}


# Source code {.small}

``` markdown
![](/src/Text/Decker/Filter/Media.hs#include-even-shorter){.haskell .code 
width="100%" height="500px"}
```

--------------------------------------------------------------------------------

<!-- ---8<--- recursive -->

# Include my own Markdown source

## The code of this slide

![](./include-code-deck.md#recursive){.haskell .code}

<!-- ---8<--- -->

--------------------------------------------------------------------------------



# Detent all the things

![](/src/Text/Decker/Filter/Media.hs#dedent-test){.haskell .code}


# Many small code blocks

Paragraph one

``` txt
Code block 1
```

This is code block 2

``` txt
Code block 2
```

Paragraph three

``` txt
Code block 3
```

Paragraph 4

# Souce code {.x-small}

````markdown
Paragraph one

``` txt
Code block 1
```

This is code block 2

``` txt
Code block 2
```

Paragraph three

``` txt
Code block 3
```

Paragraph 4
````