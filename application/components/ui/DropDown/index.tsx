"use client";
import { useCallback, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropDownOptions } from "./DropDownOptions";
import { OPTIONS } from "@/lib/constants";

interface DropDownProps {
  label: string;
  setValue: (field: string, value: string) => void;
}

export const DropDown: React.FC<DropDownProps> = ({ label, setValue }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [type, setType] = useState<string>(OPTIONS.LEETCODE);

  const toggleOpen = useCallback(() => {
    setisOpen((prev) => !prev);
  }, [isOpen, setisOpen]);

  const changeType = useCallback(
    (type: string) => {
      setType(type);
      setValue("type", type);
      toggleOpen();
    },
    [type, setType, setValue]
  );

  return (
    <div className="flex relative flex-col gap-[5px]">
      <div
        onClick={toggleOpen}
        className="flex flex-row gap-[0.5px] justify-center items-center w-48 h-8 bg-white font-semibold text-black rounded-sm cursor-pointer"
      >
        {`${type}`}
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <RiArrowDropDownLine size={28} />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-1 absolute mt-10 rounded-md bg-neutral-400 p-1">
          <DropDownOptions
            label={OPTIONS.LEETCODE}
            // icon={TbBrandLeetcode}
            onClick={(label) => changeType(label)}
          />
          <DropDownOptions
            label={OPTIONS.GFG}
            // icon={SiGeeksforgeeks}
            onClick={(label) => changeType(label)}
          />
          <DropDownOptions
            label={OPTIONS.CODEFORCES}
            // icon={SiCodeforces}
            onClick={(label) => changeType(label)}
          />
          <DropDownOptions
            label={OPTIONS.CODECHEF}
            // icon={SiCodechef}
            onClick={(label) => changeType(label)}
          />
          <DropDownOptions
            label={OPTIONS.STRIVER}
            onClick={(label) => changeType(label)}
          />
        </div>
      )}
    </div>
  );
};

export default DropDown;
