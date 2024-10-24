import { IconType } from "react-icons";

interface ButtonProps {
  activelabel?: string;
  icon?: IconType;
  small?: boolean;
  medium?: boolean;
  contain?: boolean;
  circleAvatar?: boolean;
  onClick?: () => void;
  imageSrc?: string;
  iconsize? : number
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
iconsize
}) => {
  return (
    <div
    onClick={()=>{
        onClick?.()
    }}
      className={`bg-black text-white font-semibold h-8 flex flex-row gap-1 items-center justify-center p-1
        ${circleAvatar ? "rounded-full h-12 w-12" : "rounded-md"}
        ${small && "w-18"}
        ${medium && "w-24"}
        ${contain && "w-full"}
        cursor-pointer`}
    >
      {circleAvatar ? (
        imageSrc ? (
          <img
            src={imageSrc}
            alt="avatar"
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          Icon && <Icon size={iconsize}/>
        )
      ) : (
        <div className="flex items-center space-x-2">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="icon"
              className="w-6 h-6 object-cover rounded-md"
            />
          ) : (
            Icon && <Icon size={iconsize}/>
          )}
          {
            activelabel && <div>{activelabel}</div>
          }
        </div>
      )}
    </div>
  );
};

export default Button;
