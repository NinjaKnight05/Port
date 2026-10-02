"use client"

import { motion } from "motion/react"
import { Reveal } from "@/components/portfolio/reveal"

const groups = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Database",
    emoji: "🗄️",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
  {
    title: "Languages",
    emoji: "💻",
    items: ["JavaScript", "PHP"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-28">
      <Reveal>
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="font-mono text-xl text-accent">04.</span> Skills
          </h2>
          <span className="section-line flex-1" />
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="gradient-border group h-full p-7"
            >
              <div className="relative">
                {/* Hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xl">{g.emoji}</span>
                  <h3 className="font-mono text-sm font-bold text-accent">{g.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border/40 bg-secondary/30 px-3 py-1.5 text-sm text-secondary-foreground transition-all duration-300 hover:border-accent/40 hover:text-accent hover:bg-accent/5 hover:shadow-sm hover:shadow-accent/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Tech marquee */}
      <Reveal delay={0.3}>
        <div className="mt-14 overflow-hidden rounded-2xl border border-border/20 bg-card/20 py-5 backdrop-blur-sm">
          <div className="flex items-center gap-8 marquee whitespace-nowrap">
            {[...groups.flatMap(g => g.items), ...groups.flatMap(g => g.items)].map((tech, i) => (
              <span key={`${tech}-${i}`} className="font-mono text-sm text-muted-foreground/40">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
