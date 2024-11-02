const CodechefCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>
      <h3>CodeChef Profile</h3>
      <p>Stars: {data.stars}</p>
      <p>Contest Details: {JSON.stringify(data.contest, null, 2)}</p>
      <p>Problems Solved: {JSON.stringify(data.problems, null, 2)}</p>
    </div>
  );
};

export default CodechefCard;
