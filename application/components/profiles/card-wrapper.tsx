const CardWrapper = ({
  children,
  header,
  icon,
  iconStyles
}: {
  children: React.ReactNode
  header: string
  icon: React.ReactNode
  iconStyles?: string
}) => {
  return (
    <div className="border-dotted border-2 border-content rounded-md p-3 w-full h-60 min-w-72">
      <div className="inline-flex w-full justify-between">
        <div className="text-content font-bold text-xl">{header}</div>
        <div className={`size-10 object-contain ${iconStyles}`}>{icon}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default CardWrapper
