"use client";

import { useId, useState } from "react";
import Icon from "@/components/ui/Icon";
import s from "./Accordion.module.css";

type QA = { q: string; a: string };

export default function Accordion({ items, defaultOpen = 0 }: { items: QA[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();
  return (
    <div className={s.acc} data-reveal="stagger">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`${s.item} ${isOpen ? s.open : ""}`}>
            <h3 className={s.h}>
              <button
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                className={s.q}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={s.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.text}>{it.q}</span>
                <span className={s.icon} aria-hidden="true">
                  <Icon name="plus" />
                </span>
              </button>
            </h3>
            <div id={`${id}-p${i}`} role="region" aria-labelledby={`${id}-b${i}`} className={s.panel}>
              <div className={s.inner}>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
