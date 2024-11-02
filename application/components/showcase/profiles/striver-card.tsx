const StriverCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div>
      <h3>Striver Profile</h3>
      <p>Details: {JSON.stringify(data, null, 2)}</p>
    </div>
  );
};

export default StriverCard;
