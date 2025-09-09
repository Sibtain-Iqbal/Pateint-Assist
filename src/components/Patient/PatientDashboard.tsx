// components/Doctor/DoctorDashboard.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Layout/Sidebar";
import Header from "./Layout/Header";
import Overview from "../../Pages/Patient/Overview";
import Appointments from "../../Pages/Patient/Appointments";
import SearchDoctor from "../../Pages/Patient/SearchDoctors";
import Profile from "../../Pages/Patient/Profile";

export interface PatientProfile {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender:string;
  profileImage: string;
}

const PatientDashboard = () => {
  const [profile, setProfile] = useState<PatientProfile>({
    fullName: "Dr. John Doe",
    email: "johndoe@gmail.com",
    phone: "123456789",
    age: "",
    gender: "",
    profileImage: "",
  });

  const handleUpdateProfile = (updated: PatientProfile) => {
    setProfile(updated);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header title="Patient Dashboard" />
        <div className="flex-1 p-4">
          <Routes>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="searchdoctors" element={<SearchDoctor />} />
            {/* <Route path="profile" element={<Profile />} /> */}
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

export default PatientDashboard;
