# Release Procedure

Single-skill repo release. Version tracked across 4 files.

---

[!IMPORTANT]: **BEFORE ANY RELEASE, CREATE A CHECKLIST WITH TodoWrite.** Do NOT release from memory.

**Release Checklist (copy to TodoWrite):**

```
1. All changes committed with conventional prefixes (see Commit Conventions)
2. Version bumped in ALL 4 version files (see Version Files)
3. Build passes: npm run build --prefix plugins/summiz/skills/summiz
4. CLI runs: node plugins/summiz/skills/summiz/summiz.js
5. Build artifacts committed (dist/ must be in git for npx skills add)
6. git push origin main
```

---

[!SKILL-STRUCTURE]: For `npx skills add summizai/skills` discovery: a) `plugins/summiz/.claude-plugin/plugin.json`, b) `plugins/summiz/skills/summiz/SKILL.md`, c) `.claude-plugin/marketplace.json` at repo root. Without all three, the installer will NOT find the skill.

[!VERSION-FILES]: Four version files MUST match:

```yaml
version_files:
  - plugins/summiz/skills/summiz/SKILL.md          # frontmatter → version
  - plugins/summiz/.claude-plugin/plugin.json       # version field
  - plugins/summiz/skills/summiz/package.json       # version field
  - .claude-plugin/marketplace.json                 # plugins[0].version
```

[!VERSION-SYNC-RULE]: **If any version files diverge, align them all before releasing.**

---

[!COMMIT-CONVENTIONS]: Conventional prefixes scoped to summiz:

```yaml
prefixes:
  - "fix(summiz): …"        # Bug fix → patch
  - "feat(summiz): …"       # New feature → minor
  - "breaking(summiz): …"   # Breaking change → major
  - "refactor(summiz): …"   # Restructuring → patch
  - "docs(summiz): …"       # Documentation → patch
  - "chore(summiz): …"      # Build/tooling → patch
```

Commit format: `<prefix>(summiz): <description>, bump to <version>`

Bump rule: any `breaking:` → major, any `feat:` → minor, otherwise → patch.

---

[!BUILD-ARTIFACTS]: The `dist/` directory MUST be committed. Agents installing via `npx skills add` run `npm install` but do NOT run `npm run build`. If dist/ is gitignored, use `git add -f plugins/summiz/skills/summiz/dist/`.
