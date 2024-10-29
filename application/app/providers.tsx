"use client"

import { ThemeProvider } from "@/hooks/useTheme"
import { ClerkProvider } from "@clerk/nextjs"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers 
