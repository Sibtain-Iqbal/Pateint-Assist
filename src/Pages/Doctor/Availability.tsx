// src/pages/Availability.tsx
const Availability = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Set Available Days & Times</h3>
        <div className="space-y-3">
          <input type="text" placeholder="Available Days" className="w-full p-2 border rounded-lg" />
          <input type="text" placeholder="Available Time Slots" className="w-full p-2 border rounded-lg" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Consultation Fee</h3>
        <input type="number" placeholder="Enter fee" className="w-full p-2 border rounded-lg" />
      </div>
    </div>
  );
};
export default Availability;
