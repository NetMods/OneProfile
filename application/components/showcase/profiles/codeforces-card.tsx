const CodeforcesCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>
      <h3>Codeforces Profile</h3>
      <p>Rating: {data.rating}</p>
      <p>Max Rating: {data.maxRating}</p>
      <p>Total Problems Solved: {data.totalProblems}</p>
    </div>
  );
};

export default CodeforcesCard;
