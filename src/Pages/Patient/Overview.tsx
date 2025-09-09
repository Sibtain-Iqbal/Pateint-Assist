import { useState } from "react";

const Overview = () => {
  // Mock data for demo
  const [nextAppointment] = useState({
    doctor: "Dr. John Smith",
    date: "2025-09-10",
    time: "10:30 AM",
    type: "Online Consultation",
  });

  const [notifications] = useState([
    "💊 Your prescription has been updated by Dr. Sarah",
    "📅 Appointment with Dr. John tomorrow at 10:30 AM",
    "⚠️ Profile is 80% complete. Please update details.",
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <p className="text-gray-600">
        Here’s a quick snapshot of your health activities and updates.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-gray-500">Appointments</h3>
          <p className="text-2xl font-bold">3</p>
          <p className="text-sm text-gray-400">Upcoming this week</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-gray-500">Doctors Consulted</h3>
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-400">Total so far</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-gray-500">Profile Completion</h3>
          <p className="text-2xl font-bold">80%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
          </div>
        </div>
      </div>

      {/* Next Appointment Card */}
      <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-2">Next Appointment</h3>
        <p className="text-gray-700">
          <span className="font-bold">{nextAppointment.doctor}</span>
        </p>
        <p className="text-gray-500">
          {nextAppointment.date} at {nextAppointment.time}
        </p>
        <p className="text-sm text-gray-400">{nextAppointment.type}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Details
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow rounded-2xl p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
        <ul className="space-y-2">
          {notifications.map((note, i) => (
            <li
              key={i}
              className="p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
