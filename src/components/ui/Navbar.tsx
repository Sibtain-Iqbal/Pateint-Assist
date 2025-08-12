import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModel";


type NavbarProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function Navbar({showModal,setShowModal}:NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow px-10 py-5 relative z-10">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <Heart className="text-red-500 text-2xl" />
          <span className="font-bold text-lg">HealthConnect</span>
        </div>

        <div className="flex items-center space-x-6">
          <Link to={"/"}>Home</Link>

          {/* Find Doctors Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-gray-700 font-medium rounded-xl bg-green-400 px-4 py-2 hover:text-blue-500">
              Find Doctors
            </button>
            {showDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-1 w-48 z-20">
                <Link
                  to="/find-your-doctor"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Find Your Doctor
                </Link>

                <Link
                  to="/medical-specialties"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Medical Specialties
                </Link>
              </div>
            )}
          </div>

          {/* Getting Started Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#53aec5] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Getting Started
          </button>
        </div>
      </nav>

      {/* Auth Modal with blurred background */}
      <AuthModal
        show={showModal}
        onClose={() => setShowModal(false)}
        
      />
    </>
  );
}