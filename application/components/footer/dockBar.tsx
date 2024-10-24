"use client";

import { useCallback, useState } from "react";
import Button from "../ui/Button";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdOutlineHideSource } from "react-icons/md";
import { SiGeeksforgeeks, SiCodeforces, SiCodechef } from "react-icons/si";

const DockBar = () => {
  const [load, setLoad] = useState(false);

  const changeState = useCallback(() => {
    setLoad((prev) => !prev);
  }, [load]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          load ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: load ? -1 : 1 }}
      >
        <div className="mt-2 ">
          <Button activelabel="DOCK" onClick={changeState} />
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${
          load ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: load ? 1 : -1 }}
      >

        <div className="flex flex-row justify-center items-center gap-3 bg-bkg font-semibold mt-2 h-12 p-2 rounded-md cursor-pointer">
          <Button
            onClick={() => {}}
            circleAvatar
            icon={TbBrandLeetcode}
            iconsize={24}
          />
          <Button
            onClick={() => {}}
            circleAvatar
            icon={SiGeeksforgeeks}
            iconsize={24}
          />
          <Button
            onClick={() => {}}
            circleAvatar
            icon={SiCodeforces}
            iconsize={24}
          />
          <Button
            onClick={() => {}}
            circleAvatar
            icon={SiCodechef}
            iconsize={24}
          />
          <Button
            onClick={changeState}
            circleAvatar
            icon={MdOutlineHideSource}
            iconsize={24}
          />
        </div>
      </div>
    </div>
  );
};

export default DockBar;
