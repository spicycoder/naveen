import { experience } from "../data"
import { fillCycle } from "./ui"
import { BriefcaseIcon } from "./icons"

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* center spine */}
      <div
        className="timeline-spine absolute left-6 md:left-1/2 top-2 bottom-2 w-1 -translate-x-1/2 rounded-full print:block"
        style={{ background: "var(--color-primary)", opacity: 0.5 }}
        aria-hidden="true"
      />

      <ol className="space-y-6">
        {experience.map((job, i) => {
          const left = i % 2 === 0
          return (
            <li key={job.company} className="relative md:grid md:grid-cols-2 md:gap-10 md:items-center">
              {/* node dot on the spine */}
              <span
                className="timeline-node absolute left-6 md:left-1/2 top-6 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full border-[3px] border-white text-white shadow-md print:border-ink print:text-primary print:bg-white"
                style={{ background: "var(--color-primary)" }}
                aria-hidden="true"
              >
                <BriefcaseIcon size={14} />
              </span>

              <div
                className={`timeline-card-wrap reveal ${left ? "left" : "right"} ${left ? "md:col-start-1 md:text-right" : "md:col-start-2"} pl-16 md:pl-0 ${left ? "md:pr-6 md:-mr-4" : "md:pl-6 md:-ml-4"}`}
              >
                <article
                  className="clay-sm clay-hover p-4 break-inside-avoid"
                  style={{ background: `var(--color-fill-${fillCycle[i % fillCycle.length]})` }}
                >
                  <div className={`mb-1 flex flex-wrap items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                    <h3 className="text-base leading-tight">{job.company}</h3>
                    <span className="inline-block rounded-full border-2 border-orange-300 bg-fill-orange px-2 py-0.5 text-[0.6rem] font-bold text-orange-800">
                      {job.domain}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-primary mb-1">{job.role}</p>
                  <p className="mb-1 font-display text-sm font-semibold text-primary-dark">{job.dates.join(" — ")}</p>
                  <p className="text-[0.65rem] font-bold text-ink-soft opacity-70 mb-2">{job.place}</p>
                  <ul className={`space-y-1 text-[0.7rem] font-bold text-ink opacity-80 print:hidden ${left ? "md:text-left" : ""}`}>
                    {job.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-1.5">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary-light" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
