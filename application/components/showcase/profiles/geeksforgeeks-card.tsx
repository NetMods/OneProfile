const GFGCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>
      <div className="flex flex-grow justify-between p-3 pt-0 max-w-[800px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Problems</h2>
          <p>🔢 Total: {data.problems.total}</p>
          <p>🟢 Easy: {data.problems.easy}</p>
          <p>🟠 Medium: {data.problems.medium}</p>
          <p>🔴 Hard: {data.problems.hard}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Contest</h2>
          <p>⭐ Rating: {data.contest.rating !== "null" ? data.contest.rating : "N/A"}</p>
          <p>🏆 Global Rank: {data.contest.globalRank !== "null" ? data.contest.globalRank : "N/A"}</p>
          <p>🎯 Attended: {data.contest.attended !== "null" ? data.contest.attended : "N/A"}</p>
          <p>📈 Beats: {data.contest.beats !== "null" ? data.contest.beats : "N/A"}</p>
        </div>
      </div>

      <div className="flex px-3 gap-2">
        {data.languages.map((language, index) => (
          <span key={index} className="bg-bkg text-content border p-1 rounded-full text-xs">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GFGCard;
