// src/pages/Appointments.tsx
const Appointments = () => {
  const appointments = [
    { id: 1, patient: "Alice", date: "2025-08-22", status: "Pending" },
    { id: 2, patient: "Bob", date: "2025-08-23", status: "Confirmed" },
  ];

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">My Appointments</h3>
      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Patient</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-t">
              <td className="p-3">{a.patient}</td>
              <td className="p-3">{a.date}</td>
              <td className="p-3">{a.status}</td>
              <td className="p-3 space-x-2">
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md hover:opacity-90 transition">Approve
                </button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md hover:opacity-90 transition">Reject
                </button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md hover:opacity-90 transition">Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Appointments;
