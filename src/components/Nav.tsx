import { useState } from "react"
import { navItems } from "../data"

export function Nav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  const [open, setOpen] = useState(false)
  const go = (id: string) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-hairline bg-bg/80 px-4 py-3 backdrop-blur-md backdrop-saturate-150 print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault()
            go("intro")
          }}
          className="font-display text-xl font-bold tracking-tight text-primary"
        >
          NAVEEN KUMAR
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} active={active} onClick={() => go(item.id)} />
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="clay-sm clay-press grid size-11 place-items-center md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mt-3 flex flex-col items-stretch gap-2 pb-2 md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} active={active} onClick={() => go(item.id)} block />
          ))}
        </div>
      )}
    </nav>
  )
}

function NavLink({
  item,
  active,
  onClick,
  block,
}: {
  item: { id: string; label: string }
  active: string
  onClick: () => void
  block?: boolean
}) {
  const on = active === item.id
  return (
    <a
      href={`#${item.id}`}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`rounded-2xl px-4 py-2 text-sm font-bold transition-colors ${block ? "text-center" : ""} ${
        on ? "bg-fill-teal text-primary-dark" : "text-ink opacity-70 hover:opacity-100"
      }`}
    >
      {item.label}
    </a>
  )
}
