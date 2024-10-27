import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { inter } from '@/fonts'
import { ThemeProvider } from '@/hooks/useTheme'
import Header from '@/components/header/header'
import Container from '@/components/container'
import { auth } from '@clerk/nextjs/server'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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
      <ClerkProvider>
        <html lang="en">
          <body className={cn(inter.className, 'bg-bkg flex flex-col justify-between antialiased')}>
            <Container>
              <Header userId={userId} />
            </Container>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </ThemeProvider>
  )
}
