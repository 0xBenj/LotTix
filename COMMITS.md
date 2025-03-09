# Commit Message Guidelines

## Introduction

These guidelines ensure consistency, clarity, and quality in our commit history. All contributors must follow these procedures when making commits to maintain a clean and informative project history.

## Commit Message Structure

Each commit message should have a structured format consisting of:

* A prefix indicating the type of change
* A concise description in imperative mood
* Optional body with details (for complex changes)
* Reference to related issue(s)

## Commit Type Prefixes

Each commit should start with a descriptive prefix indicating its purpose:

* `feat:` – New feature or functionality addition
* `fix:` – Bug fix or error correction
* `refactor:` – Code restructuring without changing functionality
* `docs:` – Documentation changes only
* `style:` – Formatting, missing semicolons, etc; no code change
* `test:` – Adding or refining tests
* `chore:` – Build process or tooling changes

## Message Format

```
<type>: <concise description in imperative mood>

[optional body with more details]

[Resolves #issue-number]
```

## Example Commit Messages

```
feat: add user authentication system

Implement JWT-based authentication with refresh tokens and secure password storage.

Resolves #42
```

```
fix: correct calculation error in billing module

The tax calculation was using an outdated rate of 7.5% instead of 8%.

Fixes #123
```

```
refactor: simplify data processing pipeline

Consolidate duplicate code and improve naming conventions in the ETL process.
```

## Best Practices

### DO:

* Write in **imperative mood** (e.g., "add" not "added")
* Be specific about what changed and why
* Keep the first line under 72 characters
* Use the body to explain the what and why of a change, not the how
* Reference issues and pull requests where appropriate

### DON'T:

* Use vague messages like "update code" or "fix bug"
* Include multiple unrelated changes in a single commit
* End the summary line with a period
* Write commit messages in past tense

## Commit Frequency

* Make small, focused commits that represent a single logical change
* Commit frequently to provide a clear history of your development process
* Squash multiple commits if they represent a single logical change before merging

## Issue References

Always reference related issues using GitHub's syntax:

* `Fixes #123` - Closes the issue automatically when merged
* `Resolves #123` - Closes the issue automatically when merged
* `Relates to #123` - Creates a reference without closing the issue

## Commit Verification

All commits should be signed to verify authenticity. Configure Git to sign your commits automatically with:

```bash
git config --global commit.gpgsign true
```
