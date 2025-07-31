---
controls: true
menu: true
title: Custom LaTeX Macros
subtitle: custom LaTeX macros, math rendering, and equation formatting
meta-data:
  - math-macros.yaml
---

# Custom LaTeX Macros 

## macros 

$\vc{vc}$\
$\abs{abs}$\
$\norm{norm}$\
$\mt{mt}$\
$\qt{qt}$\
$\pt{pt}$\
$\textcolor{red}{red}$\
$\textcolor{red}red$

# Source code 
````markdown
$\vc{vc}$\
$\abs{abs}$\
$\norm{norm}$\
$\mt{mt}$\
$\qt{qt}$\
$\pt{pt}$\
$\textcolor{red}{red}$\
$\textcolor{red}red$
````

# Math Formula 1

`\begin{align*}   f(x) &= x^2\\   g(x) &= \frac{1}{x}\\   F(x) &= \int^a_b \frac{1}{3}x^3 \end{align*}`{=tex}

# Source code 
````markdown
`\begin{align*}   f(x) &= x^2\\   g(x) &= \frac{1}{x}\\   F(x) &= \int^a_b \frac{1}{3}x^3 \end{align*}`{=tex}
````

# Math Formula 2

$$
  f(x) = x^2 \\
  g(x) = \frac{1}{x}\\
  F(x) = \int^a_b \frac{1}{3}x^3
$$

# Source code 
````markdown
$$
  f(x) = x^2 \\
  g(x) = \frac{1}{x}\\
  F(x) = \int^a_b \frac{1}{3}x^3
$$
````

# Math Formula 3

$$\lim_{x \to \infty} \exp(-x) = 0$$

# Source code 
````markdown
$$\lim_{x \to \infty} \exp(-x) = 0$$
````

# labeled equation

$$\begin{equation}
  E = mc^2
  \label{eq:einstein}
\end{equation}$$


# Source code 
````markdown
$$\begin{equation}
  E = mc^2
  \label{eq:einstein}
\end{equation}$$
````

# Having a refrence label

  [$$
  \begin{eqnarray*}
  a &=& b \\
  a^2 &=& ab \\
  2a^2 &=& a^2 + ab \\
  2a^2-2ab &=& a^2 - ab \\
  2a(a-b) &=& a (a-b) \\
  2a &=& a \\
  2 &=& 1
  \end{eqnarray*}
  $$]{ .math-incremental }

::: footer
Reference label: $\eqref{eq:einstein}$
:::

# Source code 
````markdown
  [$$
  \begin{eqnarray*}
  a &=& b \\
  a^2 &=& ab \\
  2a^2 &=& a^2 + ab \\
  2a^2-2ab &=& a^2 - ab \\
  2a(a-b) &=& a (a-b) \\
  2a &=& a \\
  2 &=& 1
  \end{eqnarray*}
  $$]{ .math-incremental }

::: footer
Reference label: $\eqref{eq:einstein}$
:::
````

#  Math equation 

This slide contains a math equation in the speaker notes. Press `s` to show it.

::: notes
Notes with math! $$\sum_i \pi^i \to \infty$$
:::

# Source code 
````Markdown
This slide contains a math equation in the speaker notes. Press `s` to show it.

::: notes
Notes with math! $$\sum_i \pi^i \to \infty$$
:::
````

# Styling symbols

## less bold

$$\sum_i \pi^i \to \infty$$

## bolder

$$\boldsymbol{\sum_i \pi^i \to \infty}$$

# Source code 
````Markdown
## less bold

$$\sum_i \pi^i \to \infty$$

## bolder

$$\boldsymbol{\sum_i \pi^i \to \infty}$$
````
