import { GithubIcon, LinkedinIcon, GlobeIcon, MailIcon } from "./icons"

export type Brand = "github" | "linkedin" | "globe" | "mail"

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  globe: GlobeIcon,
  mail: MailIcon,
} as const

export function SocialLink({
  href,
  display,
  brand,
  label,
}: {
  href: string
  display: string
  brand: Brand
  label?: string
}) {
  const Icon = ICONS[brand]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="clay-sm clay-press clay-press-hover group inline-flex max-w-full items-center gap-2.5 rounded-2xl px-4 py-2.5 min-w-0"
    >
      <span className="grid size-8 place-items-center rounded-xl bg-fill-purple text-primary shrink-0">
        <Icon size={17} />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        {label && <span className="text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft opacity-70">{label}</span>}
        <span className="text-sm font-bold text-ink truncate">{display}</span>
      </span>
    </a>
  )
}
