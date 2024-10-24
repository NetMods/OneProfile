'use client'

interface ContainerProps {
  children: React.ReactNode
  small?: boolean
  medium?: boolean
  large?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, small, medium, large }) => {
  return (
    <div
      className={` text-content flex justify-center w-[95vw] mt-1 mb-1
            ${small && "h-16"}
            ${medium && "h-4/6"}
            ${large && "h-5/6"}
        `}
    >
      {children}
    </div>
  )
}

export default Container
