---
title: Interactive 3D Models
subtitle: How to embed and control **3D models** in a Decker presentation
---

# Interactive 3D Models  {.small}

**Content:**

- Showcases integration of PMP and model-viewer for rendering 3D models.

- Links:

  - [PMP Library](http://pmp-library.org)
  - [model-viewer](https://modelviewer.dev/)


# Source code  {.small}
```markdown
**Content:**

- Showcases integration of PMP and model-viewer for rendering 3D models.

- Links:

  - [PMP Library](http://pmp-library.org)
  - [model-viewer](https://modelviewer.dev/)
````

---

# PMP — Basic 3D Model Display {.x-small}

**Content:**

- Displays a 3D model using the PMP library.
- Model: **Utah Teapot**
- Options:
  - Static display (no user controls).

- Showcase:

  ![The Utah teapot](assets/teapot.off){
     width=900px height=400px }


# Source code  {.small}

```markdown
# PMP — Basic 3D Model Display {.x-small}

**Content:**

- Displays a 3D model using the PMP library.
- Model: **Utah Teapot**
- Options:
  - Static display (no user controls).

- Showcase:

  ![The Utah teapot](assets/teapot.off){ 
    width=900px height=400px }
````


---

# 3D Models with PMP (With Controls)   {.x-small}

**Content:**

- Same model as before but with interactive controls enabled.
- Allows rotation, zoom, and pan.

- Showcase:

  ![The Utah teapot (with controls)](assets/teapot.off){ 
    width=900px height=500px controls=1 }

# Source code  {.small}

```markdown
# 3D Models with PMP (With Controls)   {.x-small}

**Content:**

- Same model as before but with interactive controls enabled.
- Allows rotation, zoom, and pan.

- Showcase:

  ![The Utah teapot (with controls)](assets/teapot.off){
     width=900px height=500px controls=1 }
```

---

# 3D Models with model-viewer (No Shadow)  {.x-small}

**Content:**

- Uses <model-viewer> integration for modern 3D web visualization.
- Model: **Expressive Robot**
- Options:
  - Shadow disabled for performance or style.

- showcase:

  ![Expressive Robot (without shadow)](assets/robot.glb){
     width=900px height=400px shadow=0 }


# Source code  {.small}
```markdown

# 3D Models with model-viewer (No Shadow)  {.x-small}

**Content:**

- Uses <model-viewer> integration for modern 3D web visualization.
- Model: **Expressive Robot**
- Options:
  - Shadow disabled for performance or style.

- showcase:

  ![Expressive Robot (without shadow)](assets/robot.glb){
     width=900px height=400px shadow=0 }

```

---

# 3D Models with model-viewer (Autoplay)  {.x-small}

**Content:**

- Uses same robot model with animation autoplay.
- Engages viewers with automatic motion.

- showcase :

  ![Expressive Robot (with autoplay)](assets/robot.glb){ 
    width=900px height=500px autoplay=1 }

# Source code  {.small}
```markdown 
# 3D Models with model-viewer (Autoplay)  {.x-small}

**Content:**

- Uses same robot model with animation autoplay.
- Engages viewers with automatic motion.

- showcase :

  ![Expressive Robot (with autoplay)](assets/robot.glb){ 
  width=900px 
  height=500px 
  autoplay=1 }

```


---

# Summary {.small}

**Title:** Key Points on 3D Model Embedding  
**Content:**
- Use **PMP** for lightweight, static or interactive `.off` models.

- Use **model-viewer** for modern `.glb` models with animation and interactivity.

- Customize display via parameters like `controls`, `autoplay`, and `shadow`.
