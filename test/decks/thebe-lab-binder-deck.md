---
title: ThebeLab Test
subtitle: Haskell Kernel
width: 960.0
height: 500.0
margin: 0.0
maxScale: 1.0
minScale: 1.0
thebelab:
  enable: true
  binderUrl: 'https://mybinder.org'
  language: haskell
  repo: 'monofon/plc-notebooks'
  ref: master
  repoProvider: github
---

# Introduction to ThebeLab and Binder

ThebeLab enables interactive Jupyter code execution in presentations, using a Haskell kernel hosted on Binder.

# ThebeLab Overview

ThebeLab is a JavaScript client library that connects to Jupyter servers via the Jupyter API.

- [minrk/thebelab](https://github.com/minrk/thebelab)
- [ThebeLab Documentation](https://thebelab.readthedocs.io/en/latest/)

# Binder Overview

Binder hosts Jupyter servers with a custom IHaskell kernel from a GitHub repository.

- [The Binder Project](https://mybinder.org)
- [gibiansky/IHaskell](https://github.com/gibiansky/IHaskell)
- [monofon/plc-notebooks](https://github.com/monofon/plc-notebooks)

# Configuration {.x-small}

this deck's Connfigurations :

```markdown
---
title: ThebeLab Test
subtitle: Haskell Kernel
width: 960.0
height: 500.0
margin: 0.0
maxScale: 1.0
minScale: 1.0
thebelab:
  enable: true
  binderUrl: 'https://mybinder.org'
  language: haskell
  repo: 'monofon/plc-notebooks'
  ref: master
  repoProvider: github
---

```

# Interactive Haskell Code Block {.columns}

## Code {.left grow="2"}

``` {.haskell data-executable="true" data-language="haskell"}
print "Was Gauss konnte, 
kann Haskell auch"

sumtorial :: Integer -> Integer
sumtorial 0 = 0
sumtorial n = n + sumtorial (n-1)

sumtorial 100
```

## Usage Instructions {.right}

1. Click \[run\]
2. Be patient!
3. Edit code
4. Rinse, repeat