import { IconType } from "react-icons";
import Image from "next/image";
import { CSSProperties } from "react";

interface ButtonProps {
  activelabel?: string;
  icon?: IconType;
  small?: boolean;
  medium?: boolean;
  contain?: boolean;
  circleAvatar?: boolean;
  onClick?: () => void;
  imageSrc?: string;
  iconsize?: number;
  className?: string;
  style?: CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  activelabel,
  icon: Icon,
  small,
  medium,
  contain,
  onClick,
  circleAvatar,
  imageSrc,
  iconsize,
  className,
  style,
}) => {
  return (
    <div
      onClick={() => {
        onClick?.();
      }}
      style={style}
      className={`bg-bkg text-content font-semibold flex flex-row gap-1 items-center justify-center p-1 
        ${circleAvatar ? "rounded-full h-10 w-10 " : "rounded-md "}
        ${small && "w-18 "}
        ${medium && "w-24 "}
        ${contain && "w-full "}
        ${className}
         cursor-pointer`}
    >
      {circleAvatar ? (
        imageSrc ? (
          <Image
            src={imageSrc}
            alt="avatar"
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          Icon && <Icon size={iconsize} />
        )
      ) : (
        <div className="flex items-center space-x-2">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="icon"
              className="w-6 h-6 object-cover rounded-md"
            />
          ) : (
            Icon && <Icon size={iconsize} />
          )}
          {activelabel && <div>{activelabel}</div>}
        </div>
      )}
    </div>
  );
};

export default Button;
