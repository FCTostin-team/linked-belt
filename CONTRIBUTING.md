# Contributing to FCT Linked-Belt Generator

Thanks for considering a contribution. You are awesome. Whether you're fixing a tiny UX edge case or shipping a bigger feature, every clean PR helps keep this tool fast, stable, and useful for the Factorio community.

## Introduction

This project is a lightweight, static web utility focused on generating reliable Factorio linked-belt console commands. We optimize for:

- clear behavior,
- minimal complexity,
- low maintenance overhead,
- contributor-friendly architecture.

If that's your vibe, you're in the right place.

## I Have a Question

Please **do not use GitHub Issues for general usage questions**.

Issues are reserved for actionable engineering work (bugs, enhancements, tasks). For help and discussion, use one of these channels instead:

- Telegram community chat: https://t.me/FCTostin
- YouTube channel comments/discussions: https://www.youtube.com/@FCT-Ostin
- Steam group: https://steamcommunity.com/groups/FCTgroup

If your question reveals an actual bug, feel free to open an issue using the bug-report checklist below.

## Reporting Bugs

Before opening a bug report:

1. Search existing Issues for duplicates.
2. Re-test with a clean browser session and current repository version.
3. Confirm it is reproducible, not just a one-off environment glitch.

### What to Include in a Good Bug Report

- **Environment details**
  - OS and version (for example: Windows 11, Ubuntu 24.04)
  - Browser and version (for example: Chrome 130)
  - Factorio version (if issue depends on generated command behavior)
  - App version/commit hash (or date + branch)

- **Steps to reproduce**
  - Exact sequence from app open to failure
  - Input tags used
  - Which command block failed (input/output/combined)

- **Expected behavior**
  - What should happen

- **Actual behavior**
  - What actually happened
  - Any console errors from browser devtools

- **Artifacts**
  - Screenshots / short clip (for UI issues)
  - Copy of generated Lua snippet (for logic issues)

## Suggesting Enhancements

Feature requests are welcome when they solve a real user problem.

A high-signal enhancement request should include:

- **Problem statement:** what friction exists today?
- **Proposed solution:** what change do you suggest?
- **Use cases:** where this helps in practical Factorio workflows
- **Scope:** whether this is UI-only, logic-only, or both
- **Alternatives considered:** if relevant

The more concrete your scenario, the easier it is to evaluate and prioritize.

## Local Development / Setup

### 1) Fork and Clone

```bash
# Fork on GitHub first, then clone your fork
git clone https://github.com/<your-username>/linked-belt.git
cd linked-belt
```

### 2) Add Upstream Remote

```bash
git remote add upstream https://github.com/OstinUA/linked-belt.git
git fetch upstream
```

### 3) Run the Project Locally

```bash
# Option A: open index.html directly
# Option B (recommended): run a static server
python -m http.server 8080
# open http://localhost:8080
```

### 4) Validate Your Changes

```bash
# JS syntax sanity check
node --check script.js
```

No dependency install step is required at the moment (no `package.json`, no backend runtime).

## Pull Request Process

### Branch Naming

Use predictable branch names:

- `feature/<short-description>`
- `bugfix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Examples:

- `feature/multi-copy-hotkeys`
- `bugfix/locale-fallback-logic`
- `docs/rewrite-readme`

### Commit Messages

Use **Conventional Commits**:

- `feat: add language fallback warning`
- `fix: prevent empty tag overwrite in combined script`
- `docs: improve setup and deployment sections`
- `chore: normalize profile locale keys`

### Keep Branch Updated

Before opening a PR, sync with upstream main:

```bash
git fetch upstream
git rebase upstream/main
```

### PR Description Checklist

Your PR description should include:

- short summary of what changed and why,
- linked issue(s) (`Closes #123`) when applicable,
- testing notes (what you ran and what you verified),
- screenshots/GIFs for UI or visual changes.

Small, focused PRs are reviewed faster than mega-patches.

## Styleguides

### Code Style

- Keep it simple and explicit (vanilla JS + readable DOM logic).
- Avoid unnecessary abstractions for small features.
- Match existing naming and formatting patterns in touched files.
- Do not refactor unrelated code in the same PR.

### Linting / Formatting

At the moment there is no enforced linter/formatter pipeline in-repo.

Recommended local hygiene:

- run `node --check script.js` for syntax,
- manually verify no broken layout in browser,
- keep Markdown clean and structurally consistent.

### Architecture Expectations

- Preserve static-first architecture (no backend coupling).
- Keep locale handling compatible with `profiles/<lang>.js` loading model.
- Ensure fallback behavior remains stable if locale loading fails.

## Testing

New behavior should be validated before opening a PR.

Minimum expectation:

```bash
node --check script.js
python -m http.server 8080
```

Manual test expectations:

- input/output tags update generated blocks correctly,
- combined command references the correct tags,
- copy buttons copy the expected snippet,
- language switching works and persists across reloads.

If you add logic-heavy functionality, include reproducible verification steps in the PR body.

## Code Review Process

- Maintainers review incoming PRs for correctness, clarity, and scope.
- Typical requirement: at least one maintainer approval before merge.
- If review feedback is requested, push follow-up commits or amend cleanly.
- Resolve all open review comments before requesting re-review.
- Keep discussion technical, respectful, and outcome-focused.

Thanks again for contributing and helping make the tool better for everyone.
