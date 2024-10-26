import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { inter } from '@/fonts'
import { ThemeProvider } from '@/hooks/useTheme'

export const metadata: Metadata = {
  title: 'One Profile',
  description: 'One Profile For Coders'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={cn(inter.className, 'bg-bkg antialiased')}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
