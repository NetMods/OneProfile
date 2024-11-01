"use client"
import ThemeSwitcher from "../theme-switcher"
import Button from "../ui/Button"
import Image from "next/image"
import ClientOnly from "../client-only"
import { UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

interface HeaderProps {
  userId: string | null
}

const Header: React.FC<HeaderProps> = ({ userId }) => {
  const router = useRouter()

  return (
    <div className="flex flex-row justify-between items-center w-full mt-2">
      <div className="overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ">
        <Image src="/logo.png" alt="logo" height={1} width={150} />
      </div>

      <div className="flex flex-row gap-2 mr-5">
        {
          !userId &&
          <div className="border border-content/40 rounded-md">
            <ClientOnly>
              <Button activelabel={"Sign In"} onClick={() => router.push("/sign-in")} small />
            </ClientOnly>
          </div>
        }

        <ThemeSwitcher />

        <UserButton />
      </div>
    </div>
  )
}

export default Header
