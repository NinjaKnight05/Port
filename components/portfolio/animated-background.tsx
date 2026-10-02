"use client"

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary orb — Violet */}
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-[100px] animate-blob"
        style={{ background: 'radial-gradient(circle, #a78bfa50, transparent 70%)' }}
      />
      {/* Secondary orb — Blue/Indigo */}
      <div
        className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full opacity-20 blur-[100px] animate-blob"
        style={{ background: 'radial-gradient(circle, #818cf840, transparent 70%)', animationDelay: '5s' }}
      />
      {/* Tertiary orb — Cyan */}
      <div
        className="absolute -bottom-20 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-15 blur-[100px] animate-blob"
        style={{ background: 'radial-gradient(circle, #67e8f935, transparent 70%)', animationDelay: '10s' }}
      />
      {/* Accent orb — Pink/Fuchsia */}
      <div
        className="absolute top-2/3 right-1/4 h-[20rem] w-[20rem] rounded-full opacity-10 blur-[80px] animate-blob"
        style={{ background: 'radial-gradient(circle, #e879f930, transparent 70%)', animationDelay: '7s' }}
      />

      {/* Floating shapes */}
      <div className="absolute left-[6%] top-[18%] h-24 w-24 rotate-12 rounded-2xl border border-border/30 bg-card/10 backdrop-blur-sm animate-float" />
      <div className="absolute right-[10%] top-[25%] h-14 w-14 rounded-full border border-purple-400/15 bg-purple-400/5 backdrop-blur-sm animate-float-slow" />
      <div className="absolute left-[15%] bottom-[15%] h-20 w-20 rotate-45 rounded-xl border border-border/20 bg-card/10 backdrop-blur-sm animate-float-delayed" />
      <div className="absolute right-[18%] bottom-[22%] h-28 w-28 rounded-full border border-indigo-400/10 animate-spin-slow" />
      <div className="absolute left-[45%] top-[12%] h-10 w-10 rounded-lg border border-cyan-400/10 bg-cyan-400/5 rotate-[30deg] animate-float-slow" />
    </div>
  )
}
