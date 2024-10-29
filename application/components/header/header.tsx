'use client'
import React from "react"
import ThemeSwitcher from "../theme-switcher"
import Button from "../ui/Button"
import Image from "next/image"

interface HeaderProps {
  userId: string | null
}


const Header: React.FC<HeaderProps> = ({
  userId
}) => {
  return (
    <div className="flex flex-row justify-between items-center w-full mt-2">
      <div className="overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ">
        <Image src="/logo.png" alt="logo" height={1} width={150} />
      </div>
      <div className="flex flex-row gap-2 mr-5">
        <div className="transition-all duration-300 hover:-translate-y-[2px]">
          <Button activelabel={!userId ? 'SignIn' : 'SignOut'} small />
        </div>
        <div className="transition-all duration-300 hover:-translate-y-[2px]">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Header
