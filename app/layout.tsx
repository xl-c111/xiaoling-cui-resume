import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ScrollProgress } from '@/components/scroll-progress'
import { ParticleBackground } from '@/components/particle-background'
import { Navigation } from '@/components/navigation'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://xiaolingcui.com'),
  title: 'Xiaoling Cui | Software Engineer',
  description: 'Full-stack software engineer specializing in AI integrations, scalable systems, and polished user experiences.',
  generator: 'portfolio',
  icons: {
    icon: {
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
  },
  openGraph: {
    title: 'Xiaoling Cui | Software Engineer',
    description: 'Explore Xiaoling Cui’s portfolio of AI-powered products, full-stack platforms, and DevOps workflows.',
    url: 'https://xiaolingcui.com',
    siteName: 'Xiaoling Cui Portfolio',
    images: [
      {
        url: '/hero.jpg',
        width: 1600,
        height: 900,
        alt: 'Xiaoling Cui portfolio hero image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xiaoling Cui | Software Engineer',
    description: 'Full-stack engineer building high-impact AI, healthcare, and marketplace solutions.',
    images: ['/hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <Navigation />
        <ParticleBackground />
        <ScrollProgress />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
