import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ladestack.in'),
  title: {
    default: 'Coming Soon | LadeStack - Something Amazing is Coming',
    template: '%s | LadeStack',
  },
  description: 'LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch. Subscribe for exclusive updates.',
  keywords: ['coming soon', 'ladestack', 'launching soon', 'under construction', 'stay tuned', 'upcoming', 'new product', 'launch', 'notify me', 'subscription', 'email signup', 'tech', 'developer', 'portfolio'],
  authors: [{ name: 'Girish Lade', url: 'https://ladestack.in' }],
  creator: 'Girish Lade',
  publisher: 'LadeStack',
  generator: 'Next.js 15 with v0.app',
  applicationName: 'LadeStack - Coming Soon',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ladestack.in',
    siteName: 'LadeStack',
    title: 'Coming Soon | LadeStack - Something Amazing is Coming',
    description: 'LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch. Subscribe for exclusive updates.',
    images: [
      {
        url: 'https://ladestack.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LadeStack - Something Amazing is Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon | LadeStack - Something Amazing is Coming',
    description: 'LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch.',
    creator: '@girish_lade_',
    images: ['https://ladestack.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://ladestack.in',
    languages: {
      en: 'https://ladestack.in',
    },
  },
  other: {
    'og:site_name': 'LadeStack',
    'og:locale': 'en_US',
    'og:ttl': '604800',
    'og:email': 'admin@ladestack.in',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export function generateMetadata(): Metadata {
  return metadata
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
