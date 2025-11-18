'use client'

import { useEffect, useRef, useState } from 'react'

const FRAME_INTERVAL = 1000 / 45

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setShouldAnimate(false)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 150)
    }
    window.addEventListener('resize', handleResize)

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 14 : 28
    const maxDistance = isMobile ? 110 : 150
    const maxDistanceSquared = maxDistance * maxDistance

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.75,
        opacity: Math.random() * 0.4 + 0.2
      })
    }

    let lastTimestamp = performance.now()
    const animate = (timestamp: number) => {
      animationFrameRef.current = requestAnimationFrame(animate)

      if (document.hidden || timestamp - lastTimestamp < FRAME_INTERVAL) {
        return
      }

      lastTimestamp = timestamp
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(67, 118, 108, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared)
            const opacity = (1 - distance / maxDistance) * 0.15
            ctx.strokeStyle = `rgba(67, 118, 108, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      } else {
        lastTimestamp = performance.now()
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearTimeout(resizeTimeout)
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  if (!shouldAnimate) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
    />
  )
}
