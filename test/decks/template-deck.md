---
lork: true
meta-data:
- /test/decks/macro-templates.yaml
templates:
  block-test: |
    :(1) :(2) :(3) :(param1) :(param2) :(code)
  test: ":(1) :(2) :(3) [:(title)](:(url)) :(args)"
  test2: |
    `<a href=":(url)">`{=html}Pony`</a>`{=html} :(args)
    `<a href=":(url)">`{=html}Unicorn`</a>`{=html} [:fas](ghost)
  video: |
    ```{=html}
    <video controls style="width: var(--slide-width); height: var(--slide-height);">
    <source src=":(url)" type="video/mp4" />
    <track kind="subtitles" label="Deutsch" srclang="de" src=":(title)" default />
    </video>
    ```
title: Template Macros
subtitle: Showcasing how to define and invoke macros for generating dynamic content like links, Wikipedia references, video embeds with subtitles, and code blocks with parameterized substitutions
---

# Introduction to Template Macros

Template macros allow dynamic content generation in presentations by defining reusable templates for links, media, and code blocks. This deck demonstrates their definition and invocation.

---

# Basic Macro: Definition

## Template: `test`

```yaml
templates:
  test: :(1) :(2) :(3) [:(title)](:(url))
```

This macro combines three arguments with a titled link.

---

# Basic Macro: Invocation

## Using the `test` Macro

```markdown
[@test arg1 arg2 arg3](the%20url "Title")
```

Invokes the `test` macro with three arguments, a URL, and a title.

---

# Basic Macro: Result

## Output of `test` and `test2`

- Hallo [@test arg1 arg2 arg3](the%20url "Title")
- Was denn [@test2 There is no](the%20url "Title")

Shows the rendered result of the `test` and `test2` macros.

---

# Wikipedia Link Macro: Definition

## Template: `wp`

```yaml
templates:
  wp: |
    <a href=":(url)"><i class="fa-brands fa-wikipedia-w"></i> - :(title)</a>
```

Defines a macro for creating Wikipedia links with an icon.

---

# Wikipedia Link Macro: Invocation

## Using the `wp` Macro

```markdown
[@wp](https://de.wikipedia.org/wiki/SRGB-Farbraum "sRGB Farbraum")
```

Invokes the `wp` macro with a Wikipedia URL and title.

---

# Wikipedia Link Macro: Result

## Output of `wp`

[@wp](https://de.wikipedia.org/wiki/SRGB-Farbraum "sRGB Farbraum")

Displays the rendered Wikipedia link with an icon.

---

# Video Macro: Definition

## Template: `video`

```yaml
templates:
  video: |
    ```{=html}
    <video controls style="width: var(--slide-width); height: var(--slide-height);">
    <source src=":(url)" type="video/mp4" />
    <track kind="subtitles" label="Deutsch" srclang="de" src=":(title)" default />
    </video>
    ```
```

Defines a macro for embedding videos with subtitles.

---

# Video Macro: Invocation

## Using the `video` Macro

```markdown
[@video](/videos/myvideo.mp4 "/videos/mycaptions.vtt")
```

Invokes the `video` macro with a video URL and subtitle file.

---

# Video Macro: Result

## Output HTML

```html
<video controls style="width: var(--slide-width); height: var(--slide-height);">
<source src="/videos/myvideo.mp4" type="video/mp4" />
<track kind="subtitles" label="Deutsch" srclang="de" src="/videos/mycaptions.vtt" default />
</video>
```

Shows the generated HTML for the video embed.

---

# Code Block Macro: Example

## Using the `block-test` Macro

``` {.arg1 .arg2 .arg3 macro="block-test" param1="p1" param2="p2"}
The Block Test Code
```

Demonstrates a code block macro with parameterized substitutions.

# Source code 
````markdown
# Code Block Macro: Example

## Using the `block-test` Macro

``` {.arg1 .arg2 .arg3 macro="block-test" 
param1="p1" param2="p2"}
The Block Test Code
```
Demonstrates a code block macro with parameterized substitutions.
````

---