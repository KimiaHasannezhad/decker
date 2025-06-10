---
title: Citation and Footnote
subtitle: refrence by using footnotes and citations
bibliography: bibliography.bib
csl: acm-sig-proceedings.csl
---

# What is Footnote and Citation
<br><br><br>

**Footnote** : 

  - gives extra information or clarification without crowding the main text
  - on will appear at the bottom of the slide or page and refrence to your text by using numbers
<br><br><br>

**Citation** : 

  - points to a source (e.g., book, article, paper) to credit authors or support claims
  - Your code uses `[@tramberend2003]` which refers to an entry in a .bib (BibTeX) bibliography file
  - A bibliography section is added at the end of slides showing full citation details
  - You should add   `#Bibliography`  at the end of your markdown file to see all citations you called among contents at the end

# Footnotes sample

HCI focuses on designing systems that are easy and efficient for people to use[^1].

One key goal is to reduce user errors and improve satisfaction[^2].

- **Affordance**: Hints at how an object should be used[^3].

[^1]: It combines psychology, design, and computer science.
[^2]: Usability testing helps evaluate this.
[^3]: A door handle suggests pulling; a flat plate suggests pushing.


# Footnotes sample

Source code :
```` markdown
HCI focuses on designing systems that are easy and efficient for people to use[^1].

One key goal is to reduce user errors and improve satisfaction[^2].

- **Affordance**: Hints at how an object should be used[^3].

[^1]: It combines psychology, design, and computer science.
[^2]: Usability testing helps evaluate this.
[^3]: A door handle suggests pulling; a flat plate suggests pushing.
````

# Citations sample {.someclass}

-   Not quite recently published [@tramberend2003].
-   The bibliography is appended at the end of the deck.
-   CSL file *[:meta](csl)* was used.


# Citations sample 

Source code :

```markdown
# Citations sample {.someclass}
-   Not quite recently published [@tramberend2003].
-   The bibliography is appended at the end of the deck.
-   CSL file *[:meta](csl)* was used.
```


# Citation in a caption sample

![Not quite recently published [@tramberend2003]](include/06-metal.png)


# Citation in a caption sample
Source code :

```markdown
![Not quite recently published [@tramberend2003]](include/06-metal.png)
```

# Bibliography