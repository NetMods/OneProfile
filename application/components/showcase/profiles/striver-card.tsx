const StriverCard = ({ data }: { data: Record<string, unknown> }) => {
  return (
    <div className="flex flex-grow justify-between p-3 pt-0 max-w-[800px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">SDE Sheet Progress</h2>
        <p>📈 A2Z: {data.a2z}</p>
        <p>💼 SDE: {data.sde}</p>
        <p>🔄 Last 79: {data.last79}</p>
      </div>
    </div>
  );
};

export default StriverCard;
