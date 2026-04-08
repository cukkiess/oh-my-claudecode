# CLAUDE.md — Instructions for Local Ollama Model Compatibility

## Context

This project is edited using **Claude Code** with a **local Ollama model** (e.g. `gemma4:26b`, `qwen2.5-coder`, etc.) as the backend. Local models sometimes struggle with Claude Code's strict `str_replace` tool format, causing repeated "String to replace not found in file" errors.

The rules below **must be followed on every file edit** to avoid these failures.

---

## 🔴 Critical Rules for File Editing

### Rule 1: Always Read Before You Edit

Before calling any file update/edit tool, **always read the file first** in the same tool call sequence. Never edit from memory or from a previous read.

```
✅ DO:   Read file → copy exact string → edit
❌ DON'T: Edit from memory or a prior turn's read
```

### Rule 2: Copy Strings Byte-for-Byte

The `old_str` you provide to the edit tool must match the file **exactly**:

- Same indentation (spaces vs tabs — do not convert)
- Same number of blank lines between blocks
- Same trailing spaces (if any)
- Same line endings

**When in doubt, use a longer `old_str`** that includes surrounding context lines (2–3 lines before and after the target). This makes the match more unique and more likely to succeed.

```
✅ DO:   Include 2-3 lines of context around the change
❌ DON'T: Use the shortest possible string that identifies the location
```

### Rule 3: One Small Change Per Edit Call

Do not attempt to rewrite large blocks in a single edit. Break changes into **small, focused edits**, one logical change at a time.

```
✅ DO:   Change one function, one variable, one import at a time
❌ DON'T: Replace 20+ lines in a single str_replace call
```

### Rule 4: Never Reformat What You're Not Changing

If the surrounding code uses 4-space indentation, keep it. If it uses tabs, keep tabs. Do not "clean up" indentation or style in lines you are not intentionally changing — this will break the exact match.

```
✅ DO:   Preserve all whitespace in old_str exactly as it appears
❌ DON'T: Normalize indentation or add/remove blank lines in old_str
```

### Rule 5: Confirm the Edit Succeeded Before Continuing

After each edit, verify the change was applied by reading the relevant section of the file. If the edit failed, **stop and re-read the file** before trying again — do not retry with the same string.

```
✅ DO:   Read file after edit to confirm change is present
❌ DON'T: Chain multiple edits without verifying the previous one worked
```

---

## 🟡 Preferred Edit Workflow

Use this sequence for every file modification:

```
1. Read the file (or the relevant section)
2. Identify the exact string to replace — copy it character-for-character
3. Construct old_str with 2–3 lines of surrounding context
4. Make ONE focused change in new_str
5. Apply the edit
6. Read the file again to confirm success
7. Proceed to the next change
```

---

## 🟢 When Writing New Code

- Prefer **writing new functions/methods** over editing existing large blocks
- Add new logic at the end of a file or in a new file when possible — this avoids str_replace entirely
- For large rewrites, **write to a new file** and rename/replace rather than editing in place

---

## Summary Checklist

Before every edit, ask:

- [ ] Did I read the file **in this turn**?
- [ ] Is my `old_str` copied **exactly** from the file?
- [ ] Does `old_str` include **2–3 lines of context**?
- [ ] Am I making **one small change** only?
- [ ] Am I **not reformatting** lines I'm not changing?
- [ ] Will I **verify** the edit after applying it?

If any answer is "no", fix it before proceeding.
