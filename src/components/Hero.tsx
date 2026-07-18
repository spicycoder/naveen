import { profile, focusAreas, contributions } from "../data"
import { SocialLink } from "./SocialLink"
import { CapIcon, SparkIcon } from "./icons"

export function Hero() {
  return (
    <section id="intro" className="section print:pt-0">
      <div className="clay p-6 md:p-10 print:shadow-none">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
          <div className="relative shrink-0">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="clay-sm size-32 md:size-44 rounded-full object-cover"
            />
            <span className="absolute -bottom-1 -right-1 grid size-10 place-items-center rounded-full border-[3px] border-white bg-fill-teal text-primary print:hidden">
              <SparkIcon size={18} />
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="mt-2 text-lg font-bold text-ink-soft opacity-80 md:text-2xl">
              {profile.title}
              <span className="mx-2 opacity-50">·</span>
              {profile.contact.location}
            </p>

            <p
              className="mt-4 text-sm font-bold leading-relaxed text-ink opacity-80 md:text-base [&_strong]:text-primary"
              dangerouslySetInnerHTML={{ __html: profile.summaryHtml }}
            />

          </div>
        </div>

        {/* focus areas — what I do, not job counts */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 md:justify-start">
          {focusAreas.map((f) => (
            <span
              key={f}
              className="rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold text-ink shadow-[3px_3px_0_var(--color-ink)]"
            >
              {f}
            </span>
          ))}
        </div>

        {/* education */}
        <div className="mt-3 clay-inset bg-fill-orange flex items-center gap-3 p-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-orange-700">
            <CapIcon size={18} />
          </span>
          <p className="text-sm font-bold text-ink opacity-80">{profile.education.join("  \u00b7  ")}</p>
        </div>

        {/* social — full urls, print friendly */}
        <div className="mt-4 flex flex-wrap gap-3">
          {profile.links.map((l) => (
            <SocialLink key={l.label} href={l.href} display={l.display} brand={l.brand} label={l.label} />
          ))}
        </div>

        {/* community contributions */}
        <div className="mt-8">
          <h3 className="mb-3 font-display text-lg text-ink opacity-80">Community Contributions</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {contributions.map((c) => (
              <div key={c.title} className="clay-inset bg-fill-teal p-4">
                <h4 className="text-sm font-bold mb-1">{c.title}</h4>
                <p className="text-xs font-bold text-ink opacity-70 leading-relaxed mb-3">{c.desc}</p>
                <SocialLink href={c.href} display={c.display} brand={c.brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
