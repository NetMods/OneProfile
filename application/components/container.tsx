"use client";

interface ContainerProps {
  children: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  small,
  medium,
  large,
}) => {
  return (
    <div
      className={`bg-accent-2/90 text-content flex justify-center w-full sm:w-2/3 lg:w-11/12 md:w-4/6 mt-1 mb-1
            ${small && "h-16"}
            ${medium && "h-4/6"}
            ${large && "h-5/6"}
        `}
    >
      {children}
    </div>
  );
};

export default Container;
