---
subtitle: Box colors , highlight code blocks , inverse style , ...
title: CSS Styling
---

# Box colors 
Each section or element can use style classes:

(- primary
- secondary
- success 
- danger 
- warning 
- info)

- question
- answer
- observation 
- definition 
- alert 
- example
- note

# Samples 

## Question {.question}

Is this Question?

## 
<br><br>

## Answer {.answer}

I am the answer .

##
<br><br>

## Source code :
```` markdown
## Question {.question}

Is this Question?

## Answer {.answer}

I am the answer .
````

# Samples

## Observation {.observation}

This is Observation.

##
<br><br>

## Source code :
```` markdown
## Observation {.observation}

This is Observation.
````

# Samples

## Definition {.definition}

This is definition.

##
<br><br>

## Source code :
```` markdown
## Definition {.definition}

This is definition.
````

# Samples

## Alert {.alert}

This is Alert !

##
<br><br>

## Source code :
```` markdown
## Alert {.alert}

This is Alert !
````

# Samples 

## Example {.example}

This is Example.

##
<br><br>

## Source code :
```` markdown
## Example {.example}

This is Example.
````

# Samples

## Note {.note}

This is your note.

##
<br><br>

## Source code :
```` markdown
## Note {.note}

This is your note.
````
# Samples 

## Equation {.note}

$e=mc^2$

##
<br><br>

## Source code :
```` markdown
## Equation {.note}

$e=mc^2$
````
------------------------------------------------------------------------

# Dark Mode / Inverse Styling

- The **``.inverse``** class applies a dark theme to that slide.

- Background becomes black, text becomes light.

- Good for displaying bright images or highlighting contrast.


# Inverse Colors sample {.inverse}

## Color scheme

-   Background is black
-   Font color is almost white

## Alert Box {.fragment .alert}

colored boxes also look ok.

# Source code 

```` markdown 
# Inverse Colors sample {.inverse}

## Color scheme

-   Background is black
-   Font color is almost white

## Alert Box {.fragment .alert}

colored boxes also look ok.
````

------------------------------------------------------------------------

#  Code Blocks with Syntax Highlighting

You can embed code blocks and set the language to get proper highlighting:


## Code block sample
``` {.haskell label="Haskell"}
ghci> :type [1,2,3,4]
[1,2,3,4] :: Num a => [a]
```

````{.markdown}
![some text as an ALT](include/06-metal.png)
````

## code block source code 
````markdown 
## Code block sample
``` {.haskell label="Haskell"}
ghci> :type [1,2,3,4]
[1,2,3,4] :: Num a => [a]
```

```markdown
![some text as an ALT](include/06-metal.png)
```
````


# Verbatim and text blocks 

## Verbatim block 

    ghci> :type [1,2,3,4]
    [1,2,3,4] :: Num a => [a]

## Text block 

```{.txt}
ghci> :type [1,2,3,4]
[1,2,3,4] :: Num a => [a]
```

## Source code : 
```
## Verbatim block 

    ghci> :type [1,2,3,4]
    [1,2,3,4] :: Num a => [a]

## Text block 

```{.txt}
ghci> :type [1,2,3,4]
[1,2,3,4] :: Num a => [a] ```
```


# Emojie (Smile)

This shows a big smile emoji rendered as part of the content.

```markdown
:smile:
```

the output : 

:smile:

<br><br>
you can also have **styled Emojie**.

This shows a big smile emoji rendered as part of the content : 
```markdown
[:smile:]{.xx-large}
```

the output : 

[:smile:]{.xx-large}

<br><br>

## Also see here for more markdown emoji markup

-   [Complete list of github markdown emoji markup ·
    GitHub](https://gist.github.com/rxaviers/7360908)
