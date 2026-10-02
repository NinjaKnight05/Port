"use client"

import { useEffect, useRef } from "react"

const CODE_CHARS = [
  "{", "}", "<", ">", "/", "=", "(", ")", ";", ":",
  "=>", "++", "&&", "||", "!=", "==", "[]", "//",
  "div", "jsx", "npm", "git", "api", "css", "dom",
  "app", "req", "res", "db", "use", "let", "var",
  "fn", "io", "0", "1",
]

type Drop = {
  x: number
  y: number
  speed: number
  char: string
  opacity: number
  size: number
  nextSwap: number
  hue: number
}

export function CodeRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let drops: Drop[] = []
    let raf = 0

    function randomChar() {
      return CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
    }

    function createDrop(x?: number, startAtTop?: boolean): Drop {
      return {
        x: x ?? Math.random() * width,
        y: startAtTop ? -20 : Math.random() * height,
        speed: Math.random() * 0.4 + 0.15,
        char: randomChar(),
        opacity: Math.random() * 0.25 + 0.05,
        size: Math.random() * 5 + 10,
        nextSwap: Math.random() * 300 + 100,
        hue: Math.random() * 60 + 250, // 250-310 range: blue → violet → pink
      }
    }

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.floor(width / 40)
      drops = Array.from({ length: cols }, (_, i) =>
        createDrop(i * 40 + Math.random() * 20, false)
      )
    }

    function draw() {
      // Fade trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, width, height)

      for (const drop of drops) {
        drop.y += drop.speed

        drop.nextSwap--
        if (drop.nextSwap <= 0) {
          drop.char = randomChar()
          drop.nextSwap = Math.random() * 300 + 100
        }

        if (drop.y > height + 20) {
          drop.y = -20
          drop.char = randomChar()
          drop.opacity = Math.random() * 0.25 + 0.05
          drop.speed = Math.random() * 0.4 + 0.15
          drop.hue = Math.random() * 60 + 250
        }

        // Draw — violet/purple/blue spectrum
        ctx.font = `${drop.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = `hsla(${drop.hue}, 80%, 70%, ${drop.opacity})`
        ctx.fillText(drop.char, drop.x, drop.y)

        // Brighter head
        ctx.fillStyle = `hsla(${drop.hue}, 85%, 80%, ${drop.opacity * 1.6})`
        ctx.fillText(drop.char, drop.x, drop.y)
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillRect(0, 0, width, height)
    draw()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
