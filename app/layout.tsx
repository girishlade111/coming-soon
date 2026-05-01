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
  
  description: 'LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch. Subscribe for exclusive updates on our upcoming tech project, developer tools, and innovative solutions.',
  
  keywords: [
    'coming soon',
    'ladestack',
    'launching soon',
    'under construction',
    'stay tuned',
    'upcoming',
    'new product launch',
    'notify me',
    'email subscription',
    'email signup',
    'tech project',
    'developer tools',
    'innovative solutions',
    'Girish Lade',
    'portfolio',
    'startup',
    'product launch',
    'waitlist',
    'early access',
    'tech startup',
  ],
  
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
    'og:country-name': 'India',
    'og:region': 'Maharashtra',
    'fb:app_id': '',
    'twitter:label1': 'Time to launch',
    'twitter:data1': '30 days',
  },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LadeStack" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0a0a0a" />
        
        <meta name="description" content="LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch. Subscribe for exclusive updates on our upcoming tech project, developer tools, and innovative solutions." />
        <meta name="author" content="Girish Lade, https://ladestack.in" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Maharashtra, India" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ladestack.in" />
        <meta property="og:title" content="Coming Soon | LadeStack - Something Amazing is Coming" />
        <meta property="og:description" content="LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch. Subscribe for exclusive updates." />
        <meta property="og:image" content="https://ladestack.in/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LadeStack - Something Amazing is Coming Soon" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="LadeStack" />
        <meta property="og:email" content="admin@ladestack.in" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@girish_lade_" />
        <meta name="twitter:creator" content="@girish_lade_" />
        <meta name="twitter:title" content="Coming Soon | LadeStack - Something Amazing is Coming" />
        <meta name="twitter:description" content="LadeStack - We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch." />
        <meta name="twitter:image" content="https://ladestack.in/og-image.png" />
        <meta name="twitter:image:alt" content="LadeStack - Something Amazing is Coming Soon" />
        
        <meta name="pinterest-rich-pin" content="false" />
        <meta name="pinterest-nopin" content="nopin" />
        
        <link rel="canonical" href="https://ladestack.in" />
        <link rel="alternate" href="https://ladestack.in" hrefLang="en" />
        
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