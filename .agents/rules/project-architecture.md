---
description: Reglas de arquitectura de proyecto (nomenclatura, estructura de carpetas y formato de archivos)
globs: *
---

# Project Architecture Standards (Arquitectura de Proyecto)

Always follow these architectural standards when creating, editing, or refactoring files in this workspace.

## 1. File Naming (Nomenclatura de archivos)

- **Format**: Use **kebab-case** for all file and folder names (e.g., `user-profile.component.ts`, `data-models`, `global-styles.css`). Do not use spaces, camelCase, or PascalCase.
- **Type Suffixes**: Include a descriptive suffix before the extension to indicate the file's primary role (e.g., `.component.ts`, `.service.ts`, `.module.ts`, `.directive.ts`, `.interface.ts`, `.spec.ts`).
- **Index files**: Use `index.ts` only for public API exports (barrel files) of a module or folder.

## 2. Folder Structure (Estructura de carpetas)

- **Feature-based architecture**: Organize code by feature domain (e.g., `src/app/auth/`, `src/app/dashboard/`) rather than by technical type (avoid grouping all services or all components together).
- **Core**: Place application-wide singletons, interceptors, and root-level guards in a `core/` folder.
- **Shared**: Place reusable dumb components, common pipes, and generic directives in a `shared/` folder.
- **Nesting**: Keep the folder structure flat where possible. Avoid deep nesting (more than 3-4 levels).

## 3. File Formatting (Formato de archivos)

- **Indentation**: Use 2 spaces for indentation (no tabs).
- **Quotes**: Use single quotes (`'`) for TypeScript/JavaScript, and double quotes (`"`) for HTML/CSS/JSON.
- **Semicolons**: Always terminate statements with a semicolon (`;`).
- **Line Length**: Soft cap at 100 characters per line.
- **Trailing structure**:
    - Ensure exactly one empty newline at the end of every file.
    - Remove any trailing whitespace at the end of lines.
- **Imports organization**:
    1. Angular/Core framework imports
    2. Third-party library imports
    3. Internal application aliases or absolute imports
    4. Relative path imports
       _(Leave a blank line between these groups if possible)_
