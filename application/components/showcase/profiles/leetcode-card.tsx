const LeetcodeCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>{data.badges}</div>
  )
}

export default LeetcodeCard
