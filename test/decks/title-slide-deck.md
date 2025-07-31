---
title: Title Slide Test Deck
subtitle: Testing the Template
authors:
  - name: First Author
    url: https://example.com/first
    affiliation:
      name: First Department
      url: https://example.com/first-dep
      logo: /test/decks/assets/dummy-long.png
  - name: Second Author
    url: https://example.com/second
    affiliation: Second Department
  - Third Author
affiliation:
  name: Deck Affiliation
  url: https://example.com/deck-affiliation
  logo: /test/decks/assets/dummy-square.png
copyright:
  type: (c)
  url: https://example.com/copyright
date: 01.01.1990
logos:
  - /test/decks/assets/dummy-square.png
  - /test/decks/assets/dummy-long.png
  - /test/decks/assets/dummy-high.png
  - /test/decks/assets/dummy-big.png
  - uri: /test/decks/assets/dummy-square.png
    width: 16px
    height: 16px
showDeckerLink: false
---

# Introduction

This deck tests and displays metadata elements like title, subtitle, authors, affiliations, copyright, date, and logos in a presentation using meta tags.

# Title and Subtitle

- Title: [:meta](title)
- Subtitle: [:meta](subtitle)

# Authors

- Authors: [:meta](authors)

# Author Details

- Author: [:meta](author)
- Author Name: [:meta](author.name)
- Author URL: [:meta](author.url)
- Author Affiliation: [:meta](author.affiliation)
- Author Affiliation Name: [:meta](author.affiliation.name)
- Author Affiliation URL: [:meta](author.affiliation.url)
- Author Affiliation Logo: [:meta](author.affiliation.logo)
- Author Affiliation Logo URI: [:meta](author.affiliation.logo.uri)
- Author Affiliation Logo Width: [:meta](author.affiliation.logo.width)
- Author Affiliation Logo Height: [:meta](author.affiliation.logo.height)

# Affiliation Details

- Affiliation: [:meta](affiliation)
- Affiliation Name: [:meta](affiliation.name)
- Affiliation URL: [:meta](affiliation.url)
- Affiliation Logo: [:meta](affiliation.logo)
- Affiliation Logo URI: [:meta](affiliation.logo.uri)
- Affiliation Logo Width: [:meta](affiliation.logo.width)
- Affiliation Logo Height: [:meta](affiliation.logo.height)

# Copyright

- Copyright: [:meta](copyright)
- Copyright Type: [:meta](copyright.type)
- Copyright URL: [:meta](copyright.url)

# Date

- Date: [:meta](date)

# Logos

- Logos: [:meta](logos)

# Source code {.xx-small}

## Deck configuration : 

```markdown
---
title: Title Slide Test Deck
subtitle: Testing the Template
authors:
  - name: First Author
    url: https://example.com/first
    affiliation:
      name: First Department
      url: https://example.com/first-dep
      logo: /test/decks/assets/dummy-long.png
  - name: Second Author
    url: https://example.com/second
    affiliation: Second Department
  - Third Author
affiliation:
  name: Deck Affiliation
  url: https://example.com/deck-affiliation
  logo: /test/decks/assets/dummy-square.png
copyright:
  type: (c)
  url: https://example.com/copyright
date: 01.01.1990
logos:
  - /test/decks/assets/dummy-square.png
  - /test/decks/assets/dummy-long.png
  - /test/decks/assets/dummy-high.png
  - /test/decks/assets/dummy-big.png
  - uri: /test/decks/assets/dummy-square.png
    width: 16px
    height: 16px
showDeckerLink: false
---
```