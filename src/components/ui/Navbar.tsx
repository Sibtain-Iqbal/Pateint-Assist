import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModel";
import type { NavbarProps } from "../Types";



const handleAuthSuccess = (userType: "patient" | "doctor") => {
  console.log(`Authenticated as ${userType}`);
  // Handle successful authentication (e.g., redirect, set user state)
};


export default function Navbar({ showModal, setShowModal }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow px-10 py-5 relative z-10">


        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-medical bg-[#53aec5] rounded-lg flex items-center justify-center">
            <Heart className="h-10 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground font-poppins">
            HealthConnect
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <Link to={"/"}>Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="w-full bg-gradient-to-r hover:bg-[#53aec5] from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
              Find Doctors
            </button>
            {showDropdown && (
              <div className="absolute bg-white shadow-lg rounded mt-1 w-52 z-20">
                <div className=" hover:bg-blue-100 mb-3 hover:text-white">
                  <Link
                    to="/find-your-doctor"
                    className="block px-4 py-2"
                  >
                    Find Your Doctor
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Browse all available doctors
                  </p>
                </div>


                <div className=" hover:bg-gray-100 hover:text-white">

                  <Link
                    to="/medical-specialties"
                    className="block px-4 py-2"
                  >
                    Medical Specialties
                  </Link>

                  <p className="text-xs text-muted-foreground">
                    Find doctors by medical specialty
                  </p>
                </div>




              </div>
            )}
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-[#53aec5] text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Getting Started
          </button>
        </div>
      </nav>

      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}

        onAuthenticated={handleAuthSuccess}

      />
    </>
  );
}