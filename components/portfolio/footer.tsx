"use client"

import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 px-6 py-12">
      {/* Gradient line at top */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Brand */}
        <a href="#" className="font-mono text-lg font-bold text-foreground transition-colors hover:text-accent">
          <span className="text-accent">{"<"}</span>
          Renuka
          <span className="text-accent">{" />"}</span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/negirenu026-a11y", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/renuka-negi-bb311028a", label: "LinkedIn" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-xl border border-border/30 text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
            >
              <social.icon className="size-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Renuka Negi. Built with
          <Heart className="size-3.5 text-accent/60" />
          using Next.js
        </p>
      </div>
    </footer>
  )
}
