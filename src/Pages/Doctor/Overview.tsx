// src/pages/Overview.tsx
import StatCard from "../../Components/Doctor/Layout/StatCard";
import { FaCalendarAlt, FaUsers, FaDollarSign } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Upcoming Appointments" value="12" icon={<FaCalendarAlt className="text-emerald-500 text-3xl"/>} />
        <StatCard title="Total Patients" value="85" icon={<FaUsers className="text-emerald-500 text-3xl"/>} />
        <StatCard title="Earnings" value="$2,450" icon={<FaDollarSign className="text-emerald-500 text-3xl"/>} />
      </div>

      {/* Calendar Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Appointments Calendar</h3>
        <div className="h-80 flex items-center justify-center text-gray-400">
          📅 Calendar will be integrated here
        </div>
      </div>
    </div>
  );
};

export default Overview;
