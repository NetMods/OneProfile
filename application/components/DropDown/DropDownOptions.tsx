"use client";

import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface DropDownOptionsProps {
  label: string;
  icon?: IconType | undefined;
  onClick: (label: string) => void;
}

export const DropDownOptions: React.FC<DropDownOptionsProps> = ({
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className="flex flex-row justify-between items-center w-48  bg-white font-semibold text-black p-1 cursor-pointer rounded-md hover:bg-slate-400"
    >
      <div className="">{label}</div>
      {
        Icon && <Icon size={22} />
        // : (
        // <Image
        //   src={
        //     // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEzYHzDVGy3VGizVHjDUHzDXHzDVHzDYHzDVHzDXHzDUFyrTDSTeaHDkiY/jgYfXM0HVJzbbUFrSABnzzM743+D////RAAb98vTrqq4BDlT9AAAAC3RSTlMAM4fC6/9g8BfgPyMt4ecAAADvSURBVHgBfZOFFsMgDEVTeTUgdKWE7v9/dMmZG7eKxUMPmrbrgb5rG/pkGPFgHN6WphlvzBM9WPDFUll7rE74yVXyjJ/MpAz4g9k84g+j+u78Ff0CcN4Bt4mG2sAcIzOvzCe4jYNPNoy8ttTtOYvknDeRhLTLXrINRbaO+lRWnU6F5SjQBda7lE2O1BPgo02ns+wJSUQlrMUACPfpLOfkNlu8onPUX6dRDomlqJAgh1+VE3rqTFT0cMHMOiSbHKcAHbWAugEgBVZiCBx0wWipMZ9huKvrFoYrTT189cBXU1ZPdrVM6gVWLc1KUVfa4QKkrxd07a6h0AAAAABJRU5ErkJggg=="
        //   }
        //   alt="logo"
        //   width={20}
        //   height={20}
        //   // className="h-5 w-5"
        // />
        // )
      }
    </div>
  );
};
