import { useEffect, useState } from "react"

/** Tracks which section id is active + whether the page is scrolled past a threshold. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
      setScrolled(window.scrollY > window.innerHeight * 0.5)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [ids])

  return { active, scrolled }
}
