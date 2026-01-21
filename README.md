## AI EDITING RULES

This repository is a template.

You MAY:
- Add files under src/components, src/pages, src/hooks, src/lib
- Modify src/App.tsx
- Add new routes and UI components
- Add styles using Tailwind or index.css

You MUST NOT:
- Change build tooling or configs
- Remove CI workflows
- Add new dependencies without explicit instruction
- Break existing exports or entry points

All changes must pass CI.

## Workflow

1. Push commits to `ai/initial`
2. Let CI run
3. **Auto-fix workflow** automatically detects and fixes common issues:
   - Package-lock.json mismatches
   - Tailwind CSS PostCSS configuration issues
   - (More fixes can be added to `.github/workflows/auto-fix.yml`)
4. Repair by pushing more commits if needed (for issues auto-fix can't handle)
5. Merge PR when green
6. Delete `ai/initial` after merge

## Branch Protection (if enabled)

If you set up branch protection rules, ensure:
- **Allow specified actors to bypass required pull requests**: Enable for `github-actions[bot]`
- OR use a Personal Access Token (PAT) in repository secrets instead of `GITHUB_TOKEN`

The auto-fix workflow needs write access to push fixes back to PR branches.
