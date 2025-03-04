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
Provide a clear and concise explanation of the changes introduced in this PR.

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
- Use **GitHub Draft PRs** for work-in-progress changes.
- Check **WCAG checklist** if necessary
- Provide constructive feedback during code reviews and request changes if necessary.

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

---

Following these guidelines will help maintain code quality, improve collaboration, and streamline our development workflow. Happy coding! 🚀

