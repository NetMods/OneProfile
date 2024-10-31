import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { firacode } from '@/fonts'
import Providers from './providers'
import { ThemeProvider } from '@/hooks/useTheme'

export const metadata: Metadata = {
  title: 'One Profile',
  description: 'One Profile For Coders'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={cn(firacode.className, 'bg-bkg antialiased')}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ThemeProvider>
  )
}
