// import { Heart } from "lucide-react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <nav className="flex justify-between items-center bg-white shadow px-10 py-5">
//       {/* Left Side */}
//       <div className="flex items-center space-x-2">
//         <Heart className="text-red-500 text-2xl" />
//         <span className="font-bold text-lg">HealthConnect</span>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center space-x-6 relative">

//         {/* Find Doctors Dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setShowDropdown(true)}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           <button className="text-gray-700 font-medium rounded-xl bg-green-400 px-4 py-2 hover:text-blue-500">
//             Find Doctors
//           </button>
//           {showDropdown && (
//             <div className="absolute bg-white shadow-lg rounded mt-1 w-48">
//               <Link
//                 to="/find-your-doctor"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Find Your Doctor
//               </Link>
//               <Link
//                 to="/medical-specialties"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Medical Specialties
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Getting Started Button */}
//         <button
//           onClick={() => navigate("/getting-started")}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Getting Started
//         </button>
//       </div>
//     </nav>
//   );
// }





import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./auth";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center bg-white shadow px-10 py-5 relative z-10">
        {/* Left Side */}
        <div className="flex items-center space-x-2">
          <Heart className="text-red-500 text-2xl" />
          <span className="font-bold text-lg">HealthConnect</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Getting Started
          </button>
        </div>
      </nav>

      {/* Auth Modal with blurred background */}
      <AuthModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}