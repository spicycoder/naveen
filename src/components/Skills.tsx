import { skills } from "../data"
import { SectionHeading, fillCycle } from "./ui"

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat, i) => (
          <div
            key={cat.group}
            className="clay-sm clay-hover reveal break-inside-avoid p-6"
            style={{ background: `var(--color-fill-${fillCycle[i % fillCycle.length]})` }}
          >
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-ink-soft opacity-70">{cat.group}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-white bg-white/70 px-3.5 py-1.5 text-xs font-bold text-ink shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
