import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { firacode } from '@/fonts'
import Providers from './providers'
import Navbar from '@/components/header'

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
    <html lang="en">
      <body className={cn(firacode.className, 'bg-bkg flex flex-col justify-between antialiased')}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
