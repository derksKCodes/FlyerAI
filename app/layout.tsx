import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flyer-AI',
  description: 'AI-powered flyer generation tool',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <head>
      // favicon
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
      <body>{children}</body>
    </html>
  )
}
