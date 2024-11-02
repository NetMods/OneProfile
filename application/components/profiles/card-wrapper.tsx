"use client"
import { useTheme } from "@/hooks/useTheme";
import { OPTIONS, Theme } from "@/lib/constants";
import { RxCross2 } from "react-icons/rx";
import { GrCheckmark } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Loader from "../loader";

const CardWrapper = ({
  children,
  header,
  icon,
  type,
  onClick,
  loading,
}: {
  children: React.ReactNode
  header: string
  icon: React.ReactNode
  type: string
  onClick: (username: string, type: string) => void
  loading: string | null
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)

  const disabled = loading != null && loading !== type
  const showLoader = loading != null && loading === type

  useEffect(() => {
    if (!contentRef.current) return
    if (contentRef.current?.style.width > '13rem') {
      setIsEditing(false)
    }
  }, [])

  const onSubmit = () => {
    setIsEditing(prev => !prev)

    if (isEditing && !disabled) {
      const username = contentRef.current?.textContent as string
      onClick(username, type)
    }
  }

  return (
    <div
      className={`${theme === Theme.LIGHT ? 'profile-border-light' : 'profile-border-dark'
        } p-3 w-full h-60 min-w-72 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <div className="inline-flex w-full items-center justify-between">
        <div className="text-content/50 inline-flex font-bold items-center gap-3 text-xl">
          <div
            contentEditable={isEditing && !disabled}
            ref={contentRef}
            className="focus:outline-none w-fit max-w-52 px-1 caret-black"
            suppressContentEditableWarning={true}
          >
            {header}
          </div>
          {isEditing ? (
            <div className="flex flex-row gap-2">
              <GrCheckmark
                size={30}
                className="border p-1 rounded cursor-pointer"
                onClick={onSubmit}
              />
              <RxCross2
                size={30}
                className="border p-[0.15rem] rounded cursor-pointer"
                onClick={() => setIsEditing((prev) => !prev)}
              />
            </div>
          ) : (
            <FiEdit
              className={`cursor-pointer ${disabled ? 'opacity-50' : ''}`}
              onClick={onSubmit}
            />
          )}
        </div>
        <div className={`size-10 object-contain ${type === OPTIONS.CODECHEF && "mr-12"}`}>{icon}</div>
      </div>
      {
        showLoader ?
          <Loader />
          :
          <>
            {children}
          </>
      }
    </div>
  )
}

export default CardWrapper


// const adjustWidth = () => {
//   if (!contentRef.current) return;
//
//   const element = contentRef.current;
//   element.style.width = "auto";
//   element.style.width = `${element.scrollWidth + 2}px`;
// };

