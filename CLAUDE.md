# Sociedad y Derecho — agent instructions

Skills are managed by [SkillMesh](https://github.com/lreyesm1999/SkillMesh) (preset `nextjs`). Do not edit files under `.agents/skills/` directly — they are synced and hash-verified; run `skillmesh update` / `skillmesh diff` instead, or add a dated exception in `.skillmesh/overrides/<skill>.md`.

Read in this order:
1. `.agents/skills/architecture/SKILL.md`
2. `.agents/skills/frontend/SKILL.md`
3. `.agents/skills/testing/SKILL.md`
4. `.agents/skills/security/SKILL.md`
5. `.agents/skills/documentation/SKILL.md`
6. `.skillmesh/project-context.md` — this project's own facts (stack, build quirks, deployment); it overrides nothing above, it fills in what the global skills leave generic.

`skillmesh.lock.json` pins the installed versions and file hashes. `@kot23/skillmesh` is not published yet, so re-run its CLI from a local checkout of the SkillMesh repo (`node <path-to-SkillMesh>/dist/cli.js status`) before assuming a skill file is current.
