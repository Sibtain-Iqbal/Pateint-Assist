// src/pages/Profile.tsx
const Profile = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-lg" />
        <input type="text" placeholder="Specialization" className="w-full p-2 border rounded-lg" />
        <textarea placeholder="Bio" className="w-full p-2 border rounded-lg"></textarea>
        <input type="file" className="w-full" />
        <button className="px-4 py-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
            text-white font-medium shadow-md rounded-lg">Save Changes</button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Change Password</h3>
        <input type="password" placeholder="Current Password" className="w-full p-2 border rounded-lg" />
        <input type="password" placeholder="New Password" className="w-full p-2 border rounded-lg" />
        <button className="px-4 py-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md rounded-lg">Update Password</button>
      </div>
    </div>
  );
};
export default Profile;
