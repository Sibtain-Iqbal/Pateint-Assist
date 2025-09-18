import React, { useState, useRef } from "react";

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

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // preview
      setUpdatedProfile({
        ...updatedProfile,
        profileImage: imageUrl,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 flex flex-col items-center relative">
        <div
          className="cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {updatedProfile.profileImage ? (
            <img
              src={updatedProfile.profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover hover:opacity-80 transition"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm border-4 border-white shadow-lg hover:bg-gray-400 transition">
              Upload
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <h2 className="mt-4 text-2xl font-bold text-white">
          {profile.fullName}
        </h2>
        <p className="text-white/80">{profile.specialization}</p>
        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 px-5 py-2 bg-white text-emerald-600 font-medium rounded-lg shadow hover:bg-gray-100 transition-all"
        >
         Update Profile
        </button>
      </div>

      {/* Profile Info */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{profile.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium">{profile.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Experience</p>
          <p className="font-medium">{profile.experience}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Clinic Address</p>
          <p className="font-medium">{profile.clinicAddress}</p>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative">
            <h3 className="text-lg font-semibold mb-4">Update Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              {[
                "fullName",
                "email",
                "phone",
                "specialization",
                "experience",
                "clinicAddress",
              ].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={(updatedProfile as any)[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
                />
              ))}

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg shadow hover:opacity-90 transition"
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
