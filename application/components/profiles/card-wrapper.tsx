"use client"
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/lib/constants";
import { IoIosCheckmark } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const CardWrapper = ({
  children,
  header,
  icon,
  iconStyles,
}: {
  children: React.ReactNode;
  header: string;
  icon: React.ReactNode;
  iconStyles?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return
    if (contentRef.current?.style.width > "13rem") {
      setIsEditing(false)
    }
  }, [])

  return (
    <div
      className={`${theme === Theme.LIGHT ? "profile-border-light" : "profile-border-dark"
        } p-3 w-full h-60 min-w-72`}
    >
      <div className="inline-flex w-full items-center justify-between">
        <div className="text-content/50 inline-flex font-bold items-center gap-3 text-xl">
          <div
            contentEditable={isEditing}
            ref={contentRef}
            className="focus:outline-none w-fit max-w-52 px-1 caret-black"
            suppressContentEditableWarning={true}
          >
            {header}
          </div>
          {isEditing ? (
            <IoIosCheckmark
              size={35}
              className="border rounded cursor-pointer"
              onClick={() => setIsEditing(false)}
            />
          ) : (
            <FiEdit
              className="cursor-pointer"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
        <div className={`size-10 object-contain ${iconStyles}`}>{icon}</div>
      </div>
      <div className="text-content/30">{children}</div>
    </div>
  );
};

export default CardWrapper;




// const adjustWidth = () => {
//   if (!contentRef.current) return;
//
//   const element = contentRef.current;
//   element.style.width = "auto";
//   element.style.width = `${element.scrollWidth + 2}px`;
// };

