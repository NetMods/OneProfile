"use client"
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/lib/constants";
import { IoIosCheckmark} from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { FiEdit } from "react-icons/fi";
import { useCallback, useEffect, useRef, useState } from "react";

const CardWrapper = ({
  children,
  header,
  icon,
  iconStyles,
  type,
  onClick,
  disabled,
  showedloader,
}: {
  children: React.ReactNode
  header: string
  icon: React.ReactNode
  iconStyles?: string
  type: string
  onClick?: (username: string, type: string) => void
  disabled: boolean
  showedloader : boolean
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    if (contentRef.current?.style.width > '13rem') {
      setIsEditing(false)
    }
  }, [])

  const onSubmit = useCallback(() => {
    setIsEditing(prev => !prev)
    if (isEditing && !disabled) {
      const username = contentRef.current?.innerHTML as string
      onClick && onClick(username, type)
    }
  }, [isEditing, onClick, type, disabled])

  return (
    <div
      className={`${
        theme === Theme.LIGHT ? 'profile-border-light' : 'profile-border-dark'
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
              <IoIosCheckmark
                size={35}
                className="border rounded cursor-pointer"
                onClick={onSubmit}
              />
              <MdOutlineCancel
                size={35}
                className="border rounded cursor-pointer"
                onClick={()=>setIsEditing((prev)=>!prev)}
              />
            </div>
          ) : (
            <FiEdit
              className={`cursor-pointer ${disabled ? 'opacity-50' : ''}`}
              onClick={onSubmit}
            />
          )}
        </div>
        <div className={`size-10 object-contain ${iconStyles}`}>{icon}</div>
      </div>
      {
        showedloader?
            <div className="text-content/30">{children}</div>
            : 
            <div className="loader"></div>
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

