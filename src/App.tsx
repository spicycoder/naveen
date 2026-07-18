import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Journey } from "./components/Journey"
import { Skills } from "./components/Skills"
import { Fab } from "./components/Fab"
import { navItems } from "./data"
import { useReveal } from "./hooks/useReveal"
import { useScrollSpy } from "./hooks/useScrollSpy"

const NAV_IDS = navItems.map((n) => n.id)

export default function App() {
  const { active, scrolled } = useScrollSpy(NAV_IDS)
  const reveal = useReveal<HTMLElement>()

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className="blob" style={{ top: "-70px", left: "-50px", width: 280, height: 280, background: "var(--color-fill-purple)" }} />
      <div className="blob" style={{ top: "38%", right: "-70px", width: 320, height: 320, background: "var(--color-fill-blue)", animationDelay: "-5s" }} />
      <div className="blob" style={{ bottom: "-90px", left: "18%", width: 300, height: 300, background: "var(--color-fill-teal)", animationDelay: "-9s" }} />

      <Nav active={active} onNavigate={navigate} />

      <main ref={reveal} className="mx-auto max-w-6xl px-4 pt-24 print:pt-4">
        <Hero />
        <Journey />
        <Skills />
      </main>

      <Fab visible={scrolled} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
    </>
  )
}
