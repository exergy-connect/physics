#!/usr/bin/env python3
"""
Flatten nested theory.children objects to PK string arrays and hoist child theories
into the top-level theory list. Matches xFrame JSON Schema (children items are strings).

Processes *.json under data/, excluding model/, output/, and feedback/.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path


def flatten_theories(doc: dict) -> bool:
    """Mutate doc in place. Returns True if theory key was processed."""
    theories = doc.get("theory")
    if not theories or not isinstance(theories, list):
        return False
    collected: list[dict] = []
    seen: set[str] = set()

    def walk(t: dict) -> None:
        kids = t.get("children") or []
        ids: list[str] = []
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
    flat: list[dict] = []
    seen_order: set[str] = set()
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
    return True


def main() -> int:
    root = Path(__file__).resolve().parent.parent / "data"
    if not root.is_dir():
        print("No data/ directory next to scripts/", file=sys.stderr)
        return 1
    changed = 0
    for jpath in sorted(root.rglob("*.json")):
        sp = str(jpath)
        if "/model/" in sp or "/output/" in sp or "/feedback/" in sp:
            continue
        with open(jpath, encoding="utf-8") as f:
            doc = json.load(f)
        if not isinstance(doc, dict):
            continue
        if flatten_theories(doc):
            with open(jpath, "w", encoding="utf-8") as f:
                json.dump(doc, f, indent=2, ensure_ascii=False)
                f.write("\n")
            print(jpath.relative_to(root))
            changed += 1
    print(f"Updated {changed} file(s) with flattened theory trees.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
