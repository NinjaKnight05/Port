"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:negirenu026@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    "w-full rounded-xl border border-border/50 bg-secondary/20 px-5 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 backdrop-blur-sm"

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-pattern opacity-30" style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)' }} />

      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="font-mono text-xl text-accent">05.</span> Contact
          </h2>
          <span className="section-line flex-1" />
        </div>
      </Reveal>

      <div className="relative grid gap-10 lg:grid-cols-2">
        {/* Left — Info */}
        <Reveal delay={0.1}>
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Let&apos;s build something{" "}
              <span className="gradient-text">amazing</span> together
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m open to full-stack web development roles and exciting freelance projects. Whether you need 
              a responsive website, a complex web app, or a REST API — let&apos;s talk!
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "negirenu026@gmail.com", href: "mailto:negirenu026@gmail.com" },
                { icon: Phone, label: "+91 8628971014", href: "tel:+918628971014" },
                { icon: MapPin, label: "Mohali, Punjab, India", href: "#" },
                { icon: Github, label: "github.com/negirenu026-a11y", href: "https://github.com/negirenu026-a11y" },
                { icon: Linkedin, label: "linkedin.com/in/renuka-negi", href: "https://linkedin.com/in/renuka-negi-bb311028a" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl p-3 -mx-3 text-muted-foreground transition-all duration-300 hover:bg-accent/5 hover:text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <item.icon className="size-5" />
                  </span>
                  <span className="text-base">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right — Form */}
        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="gradient-border space-y-5 p-8">
            <div className="relative">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Send Message
            </button>
            {sent && (
              <p className="text-center text-sm font-medium text-accent">
                ✨ Opening your email client — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
