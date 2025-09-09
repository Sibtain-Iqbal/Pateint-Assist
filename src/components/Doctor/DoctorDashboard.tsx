// components/Doctor/DoctorDashboard.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Layout/Header";
import Header from "./Layout/Header";
import Overview from "../../Pages/Doctor/Overview";
import Appointments from "../../Pages/Doctor/Appointments";
import Patients from "../../Pages/Doctor/Patients";
import Availability from "../../Pages/Doctor/Availability";
import Profile from "../../Pages/Doctor/Profile";

export interface DoctorProfile {
  fullName: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  clinicAddress: string;
  profileImage: string;
}

const DoctorDashboard = () => {
  const [profile, setProfile] = useState<DoctorProfile>({
    fullName: "Dr. John Doe",
    email: "johndoe@gmail.com",
    phone: "123456789",
    specialization: "",
    experience: "",
    clinicAddress: "",
    profileImage: "",
  });

  const handleUpdateProfile = (updated: DoctorProfile) => {
    setProfile(updated);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header title="Doctor Dashboard" />
        <div className="flex-1 p-4">
          <Routes>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="patients" element={<Patients />} />
            <Route path="availability" element={<Availability />} />
            <Route
              path="profile"
              element={
                // ⬇️ use onUpdate (matches ProfileProps)
                <Profile profile={profile} onUpdate={handleUpdateProfile} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
