"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/60 backdrop-blur-xl shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group font-mono text-base font-bold tracking-tight text-foreground transition-colors">
          <span className="text-accent transition-colors group-hover:text-foreground">{"<"}</span>
          <span className="transition-colors group-hover:text-accent">Renuka</span>
          <span className="text-accent transition-colors group-hover:text-foreground">{" />"}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative z-10">
                <span className="font-mono text-xs text-accent/60 mr-1">{String(i + 1).padStart(2, '0')}.</span>
                {l.label}
              </span>
              <span className="absolute inset-0 rounded-lg bg-secondary/0 transition-colors group-hover:bg-secondary/50" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/50 bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                <span className="font-mono text-xs text-accent/60 mr-2">{String(i + 1).padStart(2, '0')}.</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
