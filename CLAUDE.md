# Claude Code Workflow

## Process for All Tasks

1. **Think through the problem** - Read the codebase for relevant files and write a plan to `tasks/todo.md`.

2. **Create a structured plan** - The plan should have a list of todo items that you can check off as you complete them.

3. **Review with user** - Before you begin working, check in with me and I will verify the plan.

4. **Execute tasks** - Begin working on the todo items, marking them as complete as you go.

5. **Communicate changes** - Every step of the way, just give a high level explanation of what changes you made.

6. **Keep it simple** - Make every task and code change as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.

7. **Review section** - Finally, add a review section to the `tasks/todo.md` file with a summary of the changes you made and any other relevant information.

## Critical Principles

### 8. NO LAZINESS
- **DO NOT BE LAZY. NEVER BE LAZY.**
- **IF THERE IS A BUG FIND THE ROOT CAUSE AND FIX IT. NO TEMPORARY FIXES.**
- **YOU ARE A SENIOR DEVELOPER. NEVER BE LAZY**

### 9. Code Quality & Simplicity
- **MAKE ALL FIXES AND CODE CHANGES AS SIMPLE AS HUMANLY POSSIBLE.**
- They should only impact necessary code relevant to the task and nothing else.
- It should impact as little code as possible.
- Your goal is to not introduce any bugs.
- **IT'S ALL ABOUT SIMPLICITY**

### 10. Debugging Protocol
- **When debugging, you MUST trace through the ENTIRE code flow step by step.**
- No assumptions.
- No shortcuts.

---

## Automatic Git Configuration
- Remote: `git@github.com:Abenezer1244/websites-collections.git`
- Automatic push enabled via post-commit hook
- Changes are automatically pushed to `origin main` after each commit
