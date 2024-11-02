const GFGCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>
      <h3>GeeksforGeeks Profile</h3>
      <p>Institute: {data.institute}</p>
    </div>
  );
};

export default GFGCard;
