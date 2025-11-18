'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ScrollProgress = dynamic(() => import('@/components/scroll-progress').then(mod => mod.ScrollProgress), {
  ssr: false,
})

const ParticleBackground = dynamic(() => import('@/components/particle-background').then(mod => mod.ParticleBackground), {
  ssr: false,
})

export function ClientEffects() {
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 1023px)').matches
    if (prefersReducedMotion || isSmallScreen) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRenderParticles(true)
    }, 600)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {shouldRenderParticles && <ParticleBackground />}
      <ScrollProgress />
    </>
  )
}
