// src/components/StatCard.tsx
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => (
  <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-5 border-l-4 border-emerald-500 hover:shadow-xl transition-all">
    <div className="text-indigo-600 text-4xl">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default StatCard;
