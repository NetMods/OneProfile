import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { inter } from '@/fonts'
import { ThemeProvider } from '@/hooks/useTheme'

export const metadata: Metadata = {
  title: 'Oneprofile',
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
        <body className={cn(inter.className, 'antialiased overflow-y-hidden ')}>{children}</body>
      </html>
    </ThemeProvider>
  )
}
