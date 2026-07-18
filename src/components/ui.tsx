import type { ReactNode, CSSProperties } from "react"

const FILLS = {
  teal: "var(--color-fill-teal)",
  blue: "var(--color-fill-blue)",
  purple: "var(--color-fill-purple)",
  orange: "var(--color-fill-orange)",
  lime: "var(--color-fill-lime)",
  pink: "var(--color-fill-pink)",
  white: "var(--color-surface)",
} as const

export type Fill = keyof typeof FILLS
export const fillCycle: Fill[] = ["teal", "blue", "purple", "orange", "lime"]

export function ClayCard({
  children,
  fill = "white",
  interactive = false,
  className = "",
  style,
}: {
  children: ReactNode
  fill?: Fill
  interactive?: boolean
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`clay-sm p-6 md:p-7 ${interactive ? "clay-press clay-press-hover" : ""} ${className}`}
      style={{ background: FILLS[fill], ...style }}
    >
      {children}
    </div>
  )
}

type BtnProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "clay" | "primary" | "accent"
  className?: string
  external?: boolean
}

export function ClayButton({
  children,
  href,
  onClick,
  variant = "clay",
  className = "",
  external,
}: BtnProps) {
  const base =
    "clay-press clay-press-hover inline-flex items-center justify-center gap-1.5 font-bold rounded-2xl px-5 py-2.5 text-sm select-none"
  const variants: Record<NonNullable<BtnProps["variant"]>, string> = {
    clay: "clay-sm",
    primary: "text-white border-[3px] border-white/40",
    accent: "text-white border-[3px] border-white/40",
  }
  const gradient: CSSProperties =
    variant === "primary"
      ? {
          background: "var(--color-primary)",
          boxShadow: "var(--shadow-clay-cta)",
        }
      : variant === "accent"
        ? {
            background: "var(--color-blue)",
            boxShadow: "5px 5px 0 #1565a8",
          }
        : {}

  const cls = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        style={gradient}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls} style={gradient}>
      {children}
    </button>
  )
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10 reveal">
      <h2 className="text-3xl md:text-5xl tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-sm md:text-base font-bold text-ink-soft opacity-70 mt-2">{subtitle}</p>}
    </div>
  )
}
