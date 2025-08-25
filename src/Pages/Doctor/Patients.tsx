// src/pages/Patients.tsx
const Patients = () => {
  const patients = [
    { id: 1, name: "Alice", contact: "alice@example.com" },
    { id: 2, name: "Bob", contact: "bob@example.com" },
  ];

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">Patients List</h3>
      <div className="grid gap-4">
        {patients.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow flex justify-between">
            <div>
              <h4 className="font-bold">{p.name}</h4>
              <p className="text-gray-500">{p.contact}</p>
            </div>
            <button className="px-3 py-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md rounded-lg">View History</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Patients;
