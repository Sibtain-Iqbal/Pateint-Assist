// src/components/SignUpForm.tsx

import type { UserType } from "../../../Types/Types";

interface SignUpFormProps {
  userType: UserType;
}

export default function SignUpForm({ userType }: SignUpFormProps) {
  

  return (
    <form className="space-y-4" encType="multipart/form-data">
      {/* Profile Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">Profile Image</label>
        <input
          type="file"
          name="image"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          accept="image/*"
        />
      </div>

      {/* Common Fields */}
      <div>
        <label className="block text-sm font-medium mb-1">
          {userType === "patient" ? "Full Name" : "Professional Name"}
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Age</label>
        <input
          type="number"
          name="age"
          min="1"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Gender</label>
        <select
          name="gender"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <textarea
          name="address"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Doctor Specific Fields */}
      {userType === "doctor" && (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Specialization</label>
            <input
              type="text"
              name="specialization"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Degree</label>
            <input
              type="text"
              name="degree"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Experience (years)</label>
            <input
              type="number"
              name="experience"
              min="0"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Availability</label>
            <textarea
              name="availability"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        {`Create ${userType === "patient" ? "Patient" : "Doctor"} Account`}
      </button>
    </form>
  );
}
