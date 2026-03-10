---
description: Reglas de testing (obligatoriedad de tests y ejecución)
globs: *
---

# Testing Requirements & Workflow

Always follow these testing guidelines when working in this workspace, specially when creating new features.

## 1. Mandatory Unit Tests

- **Components & Services**: Whenever a new Component (`.component.ts`) or Service (`.service.ts`) is created, its corresponding unit test file (`.spec.ts`) **MUST** be created alongside it.
- **Coverage**: The unit test must at least verify the successful creation of the component/service (e.g., `toBeTruthy()`) and cover its core logic or main public methods.

## 2. Test Execution

- **Run Tests**: After creating or modifying a component, service, or its test file, you **MUST** execute the test suite to ensure that your new code works correctly and doesn't break existing functionality.
- **Command**: Use the project's standard test command (e.g., `pnpm run test`, `npm run test`, or `ng test`) to run the tests.
- **Pass Verification**: Do not consider a task or feature complete until the tests execute successfully and pass without errors. If tests fail, you must debug and fix the issues before proceeding.
