---
color:
  black: "#000"
  magenta: "#f0f"
  white: "#fff"
csl: /test/decks/acm-sig-proceedings.csl
deep:
  down:
    bool: true
meta-data:
  - chart-meta.yaml
  - level1.yaml
rpv-test:
  branch:
    no-path: just some value
    path: /test/decks/data/just-used-in-template.png
  deeper:
    leaf-path: /test/decks/data/just-used-in-template.png
  leaf-no-path: just some value
  leaf-path: /test/decks/data/just-used-in-template.png
runtime-path-variables:
  - one.more.from.doc.meta
something: /test/decks/include/06-metal.png
static-resource-dirs:
  - assets
template:
  css: dummy.css
test:
  default-decker-deck: From this deck
  merge-list:
    - This line is from this deck
  some-value: This line is from this deck
title: Meta Resources 
subtitle: explains how **metadata** is used in a Decker deck. Each slide focuses on a specific metadata concept
whiteboard-background-color: "#f0f"
---

# Introduction to Metadata in Decker

**Title:** What is Metadata in Decker?  

**Content:**

- Metadata is data that describes other data.
- In Decker, it is used to customize slides and resources.
- It includes things like colors, file paths, reveal.js settings, and more.

---

# The metadata is used for this deck {.xx-small}

```markdown 
---
color:
  black: "#000"
  magenta: "#f0f"
  white: "#fff"
csl: /test/decks/acm-sig-proceedings.csl
deep:
  down:
    bool: true
meta-data:
  - chart-meta.yaml
  - level1.yaml
rpv-test:
  branch:
    no-path: just some value
    path: /test/decks/data/just-used-in-template.png
  deeper:
    leaf-path: /test/decks/data/just-used-in-template.png
  leaf-no-path: just some value
  leaf-path: /test/decks/data/just-used-in-template.png
runtime-path-variables:
  - one.more.from.doc.meta
something: /test/decks/include/06-metal.png
static-resource-dirs:
  - assets
template:
  css: dummy.css
test:
  default-decker-deck: From this deck
  merge-list:
    - This line is from this deck
  some-value: This line is from this deck
title: Meta Resources 
subtitle: explains how **metadata** is used in a Decker deck. Each slide focuses on a specific metadata concept
whiteboard-background-color: "#f0f"
---
```

# Using External Metadata Files (`meta-data`)

**Title:** Importing Metadata from YAML Files 

**Content:**
- Use the `meta-data` key to include external YAML files.

- Example:x
  ```yaml
  meta-data:
    - chart-meta.yaml
    - level1.yaml
  ```
- These files define reusable values for the deck.

---

# Referencing Metadata in Slides (`[:meta](...)`)

**Title:** Displaying Metadata Values Inside Slides  

**Content:**

- Use `[:meta](key.path)` to show metadata values.

- Example:  

  `[:meta](color.white)` → white color  
  `[:meta](test.default-decker)` → value from decker.yaml

---

# Metadata Source Precedence

**Title:** Metadata Loading Order  

**Content:**

1. Current deck (in the markdown file)
2. `decker.yaml`
3. `default.yaml`
- Higher-priority sources override the lower ones.

---

# Merging List Values

**Title:** Combining Lists from Multiple Sources 

**Content:**

- Lists with the same key are merged from various sources.
- Example:  

  The `test.merge-list` includes values from `default.yaml`, `decker.yaml`, and the current deck.

---

# File Path Metadata (`runtime-path-variables`)

**Title:** Variables that Hold File Paths  

**Content:**

- Stores file paths such as images or data files.
- Example:

  ```yaml
  rpv-test:
    leaf-path: /path/to/image.png
  ```

- Useful for loading assets in the deck.


# Color Values in Metadata

**Title:** Defining and Using Colors  

**Content:**

- Define color values in metadata:

  ```yaml
  color:
    white: "#fff"
    black: "#000"
    magenta: "#f0f"
  ```
- Use them in slides:  
  `[:meta](color.magenta)`

---

# Reveal.js Configuration via Metadata

**Title:** Reveal Settings Like Centering, Slide Numbers  

**Content:**

- Reveal.js uses metadata to control presentation behavior.

- Examples:

  - `reveal.center`: center slide content
  - `reveal.slideNumber`: show slide numbers
  - `reveal.history`, `reveal.fragments`

---

# Transitive Inclusion Chain

**Title:** Following Metadata Inclusion Chains  

**Content:**

- Metadata files can include others, forming a chain.

- Example:

  ```txt
  meta-resources-deck.md <- level1.yaml <- include/level2.yaml <- 06-metal-v.png
  ```

---

# Static Resource Paths

**Title:** Declaring Static Files and Paths  

**Content:**

- Static resources are declared using `static-resource-dirs`.
- Metadata may also include absolute file paths for resources like images.

---

# Conclusion

**Title:** Why Use Metadata?  

**Content:**

- Better control, structure, and reusability.
- Easy to adjust global settings without editing all slides.
- Clean separation of data and presentation logic.