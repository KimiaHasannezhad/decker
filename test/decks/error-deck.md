---
title: Inline Error Messages
feedback:
  deck-id: test-no-index
---

## Existing local image {.left}

![this image is exist and show with no error.](include/06-metal.png)


# Souce code
```` markdown
## Existing local image {.left}

![this image is exist and show with no error.](include/06-metal.png)
````

# Non-existing local image  {.right}

![A non existing (local) image.](include/06-metal.png)

# Souce code
```` markdown
# Non-existing local image  {.right}

![A non existing (local) image.](include/06-metal.png)
````

# Image with incorrect URL
![A non existing (local) image.](include/06-metal.png)

# Souce code
```` markdown
# Image with incorrect URL
![A non existing (local) image.](include/06-metal2.png)
````

# Empty image URL
 Nothing show as an image!
![]()

# Souce code
```` markdown
# Empty image URL
 Nothing show as an image!
![]()
````
