# Pull Request (PR) Guidelines

## Introduction

These guidelines ensure consistency, clarity, and quality in our codebase. All contributors must follow these procedures when submitting a Pull Request (PR) to maintain a smooth development workflow.

---

## PR Naming Conventions

Each PR should have a descriptive title with a prefix indicating its purpose, for example:

- `[Feature]` – New functionality or enhancements
- `[Bugfix]` – Fixing an issue or bug
- `[Refactor]` – Code improvements or restructuring without changing functionality

**Example:**

```
[Feature] Implement Lottery System
```

---

## PR Description Template

Each PR must include a detailed description following this template:

### Summary

Provide a clear and concise explanation of the changes introduced in this PR. Link the component log related to the component if applicable. 

### Testing Steps

Describe how reviewers can test the changes to confirm functionality. Include specific commands, UI actions, or test cases.

### Linked Issues

Reference any relevant GitHub issues using `#<issue_number>`.

**Example:**

```
### Summary
This PR adds the frontend logic for the lottery system, allowing users to join an auction for concert tickets.

### Testing Steps
1. Navigate to the ticket auction page.
2. Select a concert and join the lottery.
3. Verify that the correct success/failure message is displayed.

### Linked Issues
Closes #42
```

---

## Code Review Process

- **PRs must have at least one review** before merging.
- Review each line of code
- Use **GitHub Draft PRs** for work-in-progress changes.
- Check [**WCAG Guidelines**](https://www.w3.org/WAI/standards-guidelines/wcag/) to ensure accessibility compliance.
- must ensure that component log matches component
- Ensure alignment with [UI/UX documentation and guidelines](https://docs.google.com/document/d/1_J5CZ9UGx26D9iKI9BAy4rDhURhgG3cJYbnShedbc1g/edit?tab=t.0).
- Provide constructive feedback during code reviews and request changes if necessary.
- Pull the code and test functionality locally before approving.

---

## Code Quality Standards

Every line of code should be checked for:

- **Readability**: Code should be clean and well-structured.
- **Naming**: All variable and function names should be meaningful and descriptive.
- **Refactoring**: Eliminate unnecessary repetitions and redundant code.
- **Commit Hygiene**: Ensure no unnecessary files or pages are committed.
- **Comments**: Remove large, unnecessary commented-out code blocks.

---

## Commit Message Standards

- Keep commit messages **clear and meaningful**.
- Use imperative language (e.g., "Fix login bug" instead of "Fixed login bug").
- Avoid vague commit messages like "Fixed stuff."

**Example:**

```
Fix: Resolve off-by-one error in lottery selection
```

---

## Merging Policy

- Use **Squash and Merge** to maintain a clean commit history.
- Ensure all code is reviewed and approved before merging.
- If a PR is blocked due to feedback, address the comments before requesting another review.

---

## Additional Notes

- PRs should be small and focused (preferably under 500 lines of code).
- Large PRs should be broken down into multiple smaller PRs when possible.
- If changes affect multiple areas, coordinate with the relevant team members before merging.

Following these guidelines will help maintain code quality, improve collaboration, and streamline our development workflow. Happy coding! 🚀

