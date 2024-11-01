'use client'
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/lib/constants"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from '@clerk/themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === Theme.DARK ? dark : undefined,
      }}>
      {children}
    </ClerkProvider>
  )
}

export default Providers

