"use client";

import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { DAILY, SCHEDULE } from "@/content/site";
import Icon from "@/components/ui/Icon";
import s from "./WeekPlanner.module.css";

const noop = () => () => {};
function todayIndex() {
  const name = new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "Asia/Dubai" }).format(new Date());
  const i = SCHEDULE.findIndex((d) => d.day === name);
  return i >= 0 ? i : null;
}

export default function WeekPlanner() {
  // today's index in Dubai time; null on the server so the first render matches
  const today = useSyncExternalStore(noop, todayIndex, () => null);
  const [picked, setDay] = useState<number | null>(null);
  const day = picked ?? today ?? 0;
  const panel = useRef<HTMLDivElement>(null);
  const prevDay = useRef<number | null>(null);

  useLayoutEffect(() => {
    // skip the first paint and StrictMode re-runs; animate only when the day actually changes
    const prev = prevDay.current;
    prevDay.current = day;
    if (prev === null || prev === day) return;
    if (!panel.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(panel.current.querySelectorAll("[data-row]"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out", clearProps: "transform" });
  }, [day]);

  const d = SCHEDULE[day];

  return (
    <div className={s.planner} data-reveal="print" data-rot="-2">
      <div className={s.tabs} role="tablist" aria-label="Day of the week">
        {SCHEDULE.map((x, i) => (
          <button
            key={x.day}
            role="tab"
            id={`tab-${x.short}`}
            aria-controls="day-panel"
            aria-selected={i === day}
            className={`${s.tab} ${i === day ? s.on : ""}`}
            onClick={() => setDay(i)}
          >
            <span className={s.short}>{x.short}</span>
            {today === i && <span className={s.today}>Today</span>}
          </button>
        ))}
      </div>

      <div ref={panel} id="day-panel" role="tabpanel" aria-labelledby={`tab-${d.short}`} className={s.panel}>
        <div className={s.dayHead}>
          <h3 className={s.dayName}>{d.day}</h3>
          <span className={s.open}>
            <Icon name="clock" /> Open 9am – 3am
          </span>
        </div>
        <ul className={s.rows}>
          {d.items.map((it) => (
            <li key={it.title + it.time} className={s.row} data-row>
              <span className={s.time}>{it.time}</span>
              <span className={s.what}>
                <strong>{it.title}</strong>
                <span>{it.detail}</span>
              </span>
              {it.price && <span className={s.price}>{it.price}</span>}
            </li>
          ))}
        </ul>
        <div className={s.every}>
          <span className={s.everyLabel}>Every day</span>
          {DAILY.map((it) => (
            <div key={it.title} className={s.everyItem} data-row>
              <strong>{it.title}</strong> · {it.time}
              {it.price && <em> · {it.price}</em>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
