import React, { useState } from "react";

interface ProfileProps {
  profile: {
    fullName: string;
    email: string;
    phone: string;
    specialization: string;
    experience: string;
    clinicAddress: string;
    profileImage: string;
  };
  onUpdate: (updatedProfile: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ profile, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">My Profile</h2>

      <div className="flex items-center mb-4">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">No Image</span>
          </div>
        )}
      </div>

      {/* Display profile fields */}
      <div className="space-y-2">
        <p><strong>Full Name:</strong> {profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Specialization:</strong> {profile.specialization}</p>
        <p><strong>Experience:</strong> {profile.experience}</p>
        <p><strong>Clinic Address:</strong> {profile.clinicAddress}</p>
      </div>

      <button
        onClick={() => setIsEditing(true)}
        className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
      >
        Update Profile
      </button>

      {/* Popup Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Update Profile</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={updatedProfile.fullName}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={updatedProfile.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={updatedProfile.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="specialization"
                placeholder="Specialization"
                value={updatedProfile.specialization}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                value={updatedProfile.experience}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="clinicAddress"
                placeholder="Clinic Address"
                value={updatedProfile.clinicAddress}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="profileImage"
                placeholder="Profile Image URL"
                value={updatedProfile.profileImage}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
