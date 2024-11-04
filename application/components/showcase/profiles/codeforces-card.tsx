const CodeforcesCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div className="flex flex-col flex-grow gap-2 justify-between p-3 pt-0 max-w-[800px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Rating</h2>
        <p>⭐ Current Rating: {data.rating as string}</p>
        <p>🏆 Max Rating: {data.maxRating as string}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Problems Solved</h2>
        <p>📈 Total Problems: {data.totalProblems as string}</p>
        <p>📅 Last Year: {data.lastYearProblems as string}</p>
      </div>
    </div>
  );
};

export default CodeforcesCard;
