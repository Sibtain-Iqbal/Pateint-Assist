// components/Doctor/DoctorDashboard.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Layout/Sidebar";
import Header from "./Layout/Header";
import Overview from "../../Pages/Doctor/Overview";
import Appointments from "../../Pages/Doctor/Appointments";
import Patients from "../../Pages/Doctor/Patients";
import Availability from "../../Pages/Doctor/Availability";
import Profile from "../../Pages/Doctor/Profile";

const DoctorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
        <Header title="Doctor Dashboard" />
        <div className="flex-1">
          <Routes>
            {/* Default: /doctor-dashboard -> /doctor-dashboard/overview */}
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="patients" element={<Patients />} />
            <Route path="availability" element={<Availability />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
