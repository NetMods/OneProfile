import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { firacode } from '@/fonts'
import { ThemeProvider } from '@/hooks/useTheme'
import Header from '@/components/header/header'
import Container from '@/components/container'
import { auth } from '@clerk/nextjs/server'

export const metadata: Metadata = {
  title: 'One Profile',
  description: 'One Profile For Coders'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const { userId } = await auth()

  console.log(userId)

  return (
    <ThemeProvider>
      <html lang="en">
        <body className={cn(inter.className, 'bg-bkg flex flex-col justify-between antialiased')}>
          <Container>
            <Header userId={userId} />
          </Container>
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
