import { ArrowUpIcon } from "./icons"

export function Fab({ visible, onClick }: { visible: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`clay-press fixed bottom-7 right-7 z-40 grid size-14 place-items-center rounded-full border-[3px] border-white/60 text-white transition-opacity duration-300 print:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        background: "var(--color-primary)",
        boxShadow: "5px 5px 0 var(--color-primary-dark)",
      }}
    >
      <ArrowUpIcon size={22} />
    </button>
  )
}
