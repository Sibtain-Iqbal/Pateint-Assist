// src/components/Sidebar.tsx
import { FaHome, FaCalendarCheck, FaUsers, FaClock, FaUser, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // RELATIVE paths (resolved under /Patient-dashboard)
 const navItems = [
  { name: "Overview", icon: <FaHome />, path: "/patient-dashboard/overview" },
  { name: "Search Doctors", icon: <FaCalendarCheck />, path: "/patient-dashboard/search-doctors" },
  { name: "My Appointments", icon: <FaUsers />, path: "/patient-dashboard/appointments" },
  { name: "Profile", icon: <FaUser />, path: "/patient-dashboard/profile" },
];

  const [userType] = useState(localStorage.getItem("userType"));
  const [loggedInUser] = useState(localStorage.getItem("loggedInUser"));

  const handlelogout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/");
      toast.success(`Successfully logged out ${userType ?? ""} ${loggedInUser ?? ""}`);
    }, 2000);
  };

  return (
    <div className="w-64 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md  flex flex-col justify-between p-4 rounded-r-2xl">
      <div>
        <h1 className="text-2xl text-black font-extrabold mb-8 tracking-wide">
          Doc<span className="text-red-500">Care</span>
        </h1>
        <nav className="space-y-3">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}               // relative to /doctor-dashboard
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                  isActive ? "bg-white text-emerald-400 shadow-md font-semibold" : "hover:bg-black"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        onClick={handlelogout}
        className="flex items-center gap-3 px-3 py-2 rounded-xl bg-emerald-800 border hover:bg-red-600 transition text-white shadow-md"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
