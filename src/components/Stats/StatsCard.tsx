interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <div className="text-center p-4">
      <p className="text-3xl font-bold text-blue-600">
        {icon} {value}
      </p>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}