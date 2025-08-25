// src/components/Sidebar.tsx
import { FaHome, FaCalendarCheck, FaUsers, FaClock, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";


const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Overview", icon: <FaHome />, path: "/" },
    { name: "Appointments", icon: <FaCalendarCheck />, path: "/appointments" },
    { name: "Patients", icon: <FaUsers />, path: "/patients" },
    { name: "Availability", icon: <FaClock />, path: "/availability" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
  ];
  const navvigate = useNavigate()
  const [Users] = useState(localStorage.getItem("userType"))
  const [loggin] = useState(localStorage.getItem("loggedInUser"))


  const handlelogout = () => {

    setTimeout(() => {
      localStorage.removeItem("token")
      navvigate("/")  
      toast.success(`Succesfully Logout ${Users} ${loggin} `)
    }, 2000);
  }


  return (
    <div className="w-64 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 
              text-white font-medium shadow-md  h-screen flex flex-col justify-between p-4 rounded-r-2xl">
      <div>
        <h1 className="text-2xl text-black font-extrabold mb-8 tracking-wide">Doc<span className="text-red-500">Care</span></h1>
        <nav className="space-y-3">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                location.pathname === item.path
                  ? "bg-white text-emerald-400 shadow-md font-semibold"
                  : "hover:bg-black"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <button  onClick={handlelogout}
      className="flex items-center gap-3 px-3 py-2 rounded-xl bg-emarald-800 border border-2px hover:bg-red-600 transition text-white shadow-md">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
