interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
