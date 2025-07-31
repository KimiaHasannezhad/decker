---
meta-data: data/path-resolution-meta.yaml
paths:
  existing-file-absolute: /test/decks/include/06-metal.png
  existing-file-relative: include/06-metal.png
  non-existing-file-absolute: /test/decks/this/path/does/not.exist
  non-existing-file-relative: this/path/does/not.exist
runtime-path-variables:
  - paths
title: Path Resolution
subtitle: Demonstrating file path resolution using relative and absolute paths for images and included Markdown files in a documentation system
---

# Path Resolution Documentation

**Document Path**: [:meta](documentPath)

This document explains how file paths are resolved, including examples of relative and absolute paths for images and included Markdown files.

# Image Path Examples

The following table demonstrates how to include images using relative and absolute paths.

| Relative Path Image | Absolute Path Image |
|---------------------|---------------------|
| ![Relative Image](include/06-metal.png) | ![/test/decks/include/06-metal.png](/test/decks/include/06-metal.png) |

# Source code {.small}
```markdown
# Path Resolution Documentation

**Document Path**: [:meta](documentPath)

This document explains how file paths are resolved, including examples of relative and absolute paths for images and included Markdown files.

# Image Path Examples

The following table demonstrates how to include images using relative and absolute paths.

| Relative Path Image | Absolute Path Image |
|---------------------|---------------------|
| ![Relative Image](include/06-metal.png) | !
[/test/decks/include/06-metal.png](/test/decks/include/06-metal.png) |
```

# Path Definitions in Metadata

# YAML Metadata {.small}

The paths are defined in the YAML metadata as follows:

```yaml
paths:
  existing-file-relative: include/06-metal.png
  existing-file-absolute: /test/decks/include/06-metal.png
  non-existing-file-relative: this/path/does/not.exist
  non-existing-file-absolute: /test/decks/this/path/does/not.exist
```

# Resolved Path Values 

The resolved values for the defined paths are:

- **Existing File (Relative)**: [:meta](paths.existing-file-relative)
- **Existing File (Absolute)**: [:meta](paths.existing-file-absolute)
- **Non-existing File (Relative)**: [:meta](paths.non-existing-file-relative)
- **Non-existing File (Absolute)**: [:meta](paths.non-existing-file-absolute)

# Source code 
```markdown
# Resolved Path Values

The resolved values for the defined paths are:

- **Existing File (Relative)**: [:meta](paths.existing-file-relative)
- **Existing File (Absolute)**: [:meta](paths.existing-file-absolute)
- **Non-existing File (Relative)**: [:meta](paths.non-existing-file-relative)
- **Non-existing File (Absolute)**: [:meta](paths.non-existing-file-absolute)
```

# Included Markdown File {.xx-small}

This section includes a Markdown file to show how plain image paths are handled in external files:

[:include](include/path-resolution-include.md)

# Source code 
```markdown
# Included Markdown File {.xx-small}

This section includes a Markdown file to show how plain image paths are handled in external files:

[:include](include/path-resolution-include.md)
```