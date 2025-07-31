---
center: False
height: 540.0
margin: '0.0'
maxScale: 1.0
minScale: 1.0
subtitle: Haskell Kernel
thebelab:
  baseUrl: 'http://localhost:8192/'
  binderUrl: 'https://mybinder.org'
  enable: True
  language: haskell
  local: True
  ref: master
  repo: 'monofon/plc-notebooks'
  repoProvider: github
  token: plc
title: ThebeLab Test
width: 960.0
---

# Introduction to ThebeLab Local

This deck demonstrates ThebeLab's ability to run interactive Haskell code blocks locally using a Jupyter kernel in a presentation environment.

# Starting a Local Jupyter Kernel

## Command

``` {.make}
jupyter notebook \
  --NotebookApp.token=test-secret \
  --NotebookApp.allow_origin='https://localhost:8888/' \
  --NotebookApp.port=7777
```

This command starts a local Jupyter server with a Haskell kernel for ThebeLab integration.

# Interactive Haskell Code Block {.columns}

## Code {.left grow="2"}

``` {.haskell data-executable="true"}
print "Hallo!"
```

## Usage Instructions {.right}

1. Edit code
2. Click \[run\]
3. Rinse, repeat

# Multiple Code Cells: Addition Function

## Definition

``` {.haskell data-executable="true"}
add :: Num a => a -> a -> a
add a b = a + b
```

## Execution

``` {.haskell data-executable="true"}
add 1 2
```

# Multiple Code Cells: Subtraction Function

## Definition

``` {.haskell data-executable="true"}
sub :: Num a => a -> a -> a
sub a b = a - b
```