#!/usr/bin/env bash
# Stage entity data as JSON (skip model/, output/, feedback/): prefer *.json over *.yaml,
# flatten nested theory.children to PK strings (xFrame schema), then run consolidate.min.js.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="${XFRAME_STAGE_DIR:-/tmp/physics-xframe-data-json}"
CONSOLIDATE_JS="${XFRAME_CONSOLIDATE_JS:-$HOME/.cursor/skills/xframe-consolidate/scripts/consolidate.min.js}"
NOTE="${1:?Usage: $0 '<consolidation note>' [extra args passed to consolidate.min.js]}"
shift || true

python3 << PY
import json, yaml
from pathlib import Path

root = Path("$ROOT/data")
out = Path("$STAGE")
out.mkdir(parents=True, exist_ok=True)
for p in out.rglob("*"):
    if p.is_file():
        p.unlink()

def flatten_theories(doc):
    theories = doc.get("theory")
    if not theories or not isinstance(theories, list):
        return
    collected = []
    seen = set()

    def walk(t):
        kids = t.get("children") or []
        ids = []
        for k in kids:
            if isinstance(k, dict) and "theory_id" in k:
                walk(k)
                kid = k["theory_id"]
                ids.append(kid)
                if kid not in seen:
                    seen.add(kid)
                    collected.append(k)
            elif isinstance(k, str):
                ids.append(k)
            else:
                ids.append(k)
        t["children"] = ids

    for r in theories:
        walk(r)
    flat = []
    seen_order = set()
    for r in theories:
        tid = r["theory_id"]
        if tid not in seen_order:
            flat.append(r)
            seen_order.add(tid)
    for t in collected:
        tid = t["theory_id"]
        if tid not in seen_order:
            flat.append(t)
            seen_order.add(tid)
    doc["theory"] = flat

def skip(p: Path) -> bool:
    sp = str(p)
    return "/model/" in sp or "/output/" in sp or "/feedback/" in sp

stems = set()
for p in root.rglob("*.yaml"):
    if not skip(p):
        stems.add(p.with_suffix(""))
for p in root.rglob("*.json"):
    if not skip(p):
        stems.add(p.with_suffix(""))

for stem in sorted(stems, key=lambda s: str(s.relative_to(root))):
    jp = stem.with_suffix(".json")
    yp = stem.with_suffix(".yaml")
    if jp.is_file():
        with open(jp, encoding="utf-8") as f:
            doc = json.load(f)
    elif yp.is_file():
        with open(yp, encoding="utf-8") as f:
            doc = yaml.safe_load(f)
    else:
        continue
    flatten_theories(doc)
    rel = stem.relative_to(root)
    target = out / rel.with_suffix(".json")
    target.parent.mkdir(parents=True, exist_ok=True)
    with open(target, "w", encoding="utf-8") as f:
        json.dump(doc, f, indent=2)
print("Staged JSON under", out)
PY

cd "$ROOT"
node "$CONSOLIDATE_JS" "$STAGE" --model-dir "$ROOT/data/model" \
  --note "$NOTE" \
  --author "${USER:-unknown}" \
  --git-commit-hash "$(git rev-parse HEAD 2>/dev/null || echo unknown)" \
  --js \
  "$@"
