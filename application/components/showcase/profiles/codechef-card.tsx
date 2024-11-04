const CodechefCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div className="flex flex-col flex-grow gap-2 justify-between p-3 pt-0 max-w-[800px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Rating</h2>
        <p>🌟 Stars: {data.stars}</p>
        <p>⭐ Rating: {data.contest.rating}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Ranking</h2>
        <p>🌐 Global Rank: {data.contest.globalRank}</p>
        <p>🇮🇳 Country Rank: {data.contest.countryRank}</p>
        <p>📅 Contests Attended: {data.contest.attended}</p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Problems </h2>
        <p>🔢 Total: {data.problems.total}</p>
      </div>
    </div>
  );
};

export default CodechefCard;
