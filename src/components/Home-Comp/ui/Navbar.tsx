import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../SignIn-SignUp/AuthModel";
import type { NavbarProps } from "../../../Types/Types";
import CustomButton from "@/components/Comman/CustomButton";
import { FaUserMd, FaStethoscope } from "react-icons/fa";

const handleAuthSuccess = (userType: "patient" | "doctor") => {
  console.log(`Authenticated as ${userType}`);
};

export default function Navbar({ showModal, setShowModal }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow px-10 py-5 relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
            <Heart className="h-10 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground font-poppins">
            HealthConnect
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link to={"/"} className="hover:text-blue transition-colors font-bold text-[20px] rounded-md">
            Home
          </Link>

          {/* Dropdown Wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {/* Button */}
            <CustomButton className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
              Find Doctors
            </CustomButton>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute left-0 mt-1 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl w-72 border border-gray-200">
                {/* Dropdown Item */}
                <div className="group flex items-start gap-3 px-5 py-4 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-teal-400 rounded-t-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <FaUserMd className="text-blue-700 text-xl group-hover:text-white mt-1" />
                  <div>
                    <Link
                      to="/find-your-doctor"
                      className="block font-semibold text-gray-800 group-hover:text-white"
                    >
                      Find Your Doctor
                    </Link>
                    <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-1">
                      Browse all available doctors
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Dropdown Item */}
                <div className="group flex items-start gap-3 px-5 py-4 cursor-pointer hover:bg-gradient-to-r from-blue-400 to-teal-400 rounded-b-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <FaStethoscope className="text-blue-500 text-xl group-hover:text-white mt-1" />
                  <div>
                    <Link
                      to="/medical-specialties"
                      className="block font-semibold text-gray-800 group-hover:text-white"
                    >
                      Medical Specialties
                    </Link>
                    <p className="text-sm text-gray-500 group-hover:text-gray-200 mt-1">
                      Find doctors by medical specialty
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Auth Button */}
          <CustomButton
            onClick={() => setShowModal(true)}
            className="bg-[#53aec5] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Getting Started
          </CustomButton>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
