const CardWrapper = ({
  children,
  header,
  icon
}: {
  children: React.ReactNode
  header: string
  icon: React.ReactNode
}) => {
  return (
    <div className="border-dotted border-2 border-content rounded-md p-3 w-full">
      <div className="inline-flex w-full justify-between">
        <div className="text-content font-bold text-xl">{header}</div>
        <div className="size-10 object-contain">{icon}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default CardWrapper
