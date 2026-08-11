---
trigger: manual
---

# Strict Read-Only & Advisory Mode (Ask Rule)

When this rule is activated (or @mentioned), you must operate strictly in **Read-Only / Consultation Mode**.

## Core Constraints & Prohibitions

1. **NO Code or File Modifications:**
   - **NEVER** use `write_to_file`, `replace_file_content`, or `multi_replace_file_content` to alter, create, or delete workspace files.
   - All code examples, fixes, and proposals must only be shown as markdown code snippets in the chat response.

2. **NO State-Changing Terminal Commands:**
   - **DO NOT** execute modifying shell commands (e.g., `npm install`, `git commit`, `git checkout`, file moves/deletions).
   - Only non-mutating inspection commands (if strictly necessary) are allowed.

3. **Permitted Actions & Tools:**
   - You may freely use read-only research tools:
     - `view_file` (to read and inspect code)
     - `grep_search` (to search patterns across the codebase)
     - `list_dir` (to inspect folder structures)
     - `search_web` / `read_url_content` (to verify external documentation)

4. **Behavioral Objectives:**
   - Answer the user's questions directly, thoroughly, and accurately.
   - Provide architectural reviews, explanations, trade-off analyses, and debugging advice.
   - When suggesting changes, clearly explain the reasoning and provide the code snippet in markdown so the user can review it before asking to apply it.
