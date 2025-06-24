---
title: ES6 Modules in Code Blocks
subtitle: How to use ES6 Modules in Code Blocks
---

# Using ES6 Modules in Markdown Slides

Three ways to use ES6 modules interactively in your slide decks:  
- Manual `<script>` embedding  
- Executable `.run` code blocks  
- External script via Markdown image syntax


# 1. Manual Embedding

::: {#manualExample}
:::

<script type="module">
  let anchor = document.getElementById("manualExample");
  import * as mod from "/test/static/es6.js";
  mod.hello(anchor, "green");
</script>

# Source code 

```{.markdown}
::: {#manualExample}
<script type="module">
  let anchor = document.getElementById("manualExample");
  import * as mod from "/test/static/es6.js";
  mod.hello(anchor, "green");
</script>
:::
``` 

# 2. Executable Code Blocks (.run)

```{.javascript .run}
import *  as mod from "/test/static/es6.js";
mod.hello(anchor, "orange");
```

# Source code 

Code inside a code block is automatically executed because of the `.run` class.

```{.markdown}
```{.javascript .run}
import *  as mod from "/test/static/es6.js";
mod.hello(anchor, "orange");
```


# 3. With a caption

``` {.javascript .run}
import *  as mod from "/test/static/es6.js";
mod.hello(anchor, "orange");
```

Caption: This is a caption!

# Source code 


```{.markdown}
``` {.javascript .run}
import *  as mod from "/test/static/es6.js";
mod.hello(anchor, "orange");
``
Caption: This is a caption!
```