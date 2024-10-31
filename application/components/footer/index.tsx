'use client'
import { useCallback, useState } from 'react'
import Button from '@/components/ui/Button'
import { TbBrandLeetcode } from 'react-icons/tb'
import { SiGeeksforgeeks, SiCodeforces, SiCodechef } from 'react-icons/si'
import { IoAddOutline } from "react-icons/io5";
import BackDrop from '../backdrop'

const DockBar = () => {
  const [load, setLoad] = useState<boolean>(false)

  const options = [
    { icon: TbBrandLeetcode, onclick: () => setLoad(prev => !prev) },
    { icon: SiGeeksforgeeks, onclick: () => setLoad(prev => !prev) },
    { icon: SiCodechef, onclick: () => setLoad(prev => !prev) },
    { icon: SiCodeforces, onclick: () => setLoad(prev => !prev) },
    { icon: SiCodeforces, onclick: () => setLoad(prev => !prev) },
  ];

  const buttonPosition = (i: number) => {
    const size = options.length;
    const mid = 2 * Math.ceil(size / 2);
    const index = i - Math.floor(size / 2)
    const gap = Math.abs(index * (mid / Math.floor(size / 2)));
    const x = index < 0 ? -gap : gap
    const y = mid - gap
    return [x, y] as const
  }

  const changeState = useCallback(() => {
    setLoad(prev => !prev)
  }, [])

  return (
    <>
      <div className={`border-content/70 relative border-2 rounded-full bg-white aspect-square flex items-center ${load && "z-10"}`}>
        <Button
          icon={IoAddOutline}
          iconsize={33}
          className={`p-1 transform transition-transform ${load && "rotate-45"}`}
          onClick={changeState}
        />

        {options.map((option, i) => {
          const [x, y] = buttonPosition(i)
          const Icon = option.icon
          return <button
            key={i}
            onClick={option.onclick}
            className={`absolute p-2  aspect-square rounded-full cursor-pointer shadow-sm border bg-white transition-transform ease-linear ${load ? 'z-10  ' : 'z-[-10] p-0'}`}
            style={{
              transform: load ? `translate(${x}rem, -${y}rem)` : 'translate(0,0)'
            }}
          ><Icon size={24} /></button>
        })}
      </div >
      <BackDrop load={load} />
    </>
  )
}
export default DockBar
