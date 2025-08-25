// components/DoctorDashboard.tsx
import { Calendar, User, Video } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorDashboard = () => {
  const navvigate = useNavigate()
  const [Users] = useState(localStorage.getItem("userType"))
  const [loggin] = useState(localStorage.getItem("loggedInUser"))


  const handlelogout = () => {

    setTimeout(() => {
      localStorage.removeItem("token")
      navvigate("/")  
      toast.success(`"Succesfully Logout ${Users} ${loggin} "`)
    }, 2000);
  }




  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Doctor Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome Our,<p className="text-green-500 text-2xl"> {Users?.toUpperCase()} {loggin?.toLocaleUpperCase()}</p></span>
            <button
              onClick={handlelogout}

              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Appointments Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold">Appointments</h2>
            </div>
            <p className="text-gray-600 mb-4">View and manage your upcoming appointments</p>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Schedule
            </button>
          </div>

          {/* Patients Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-lg font-semibold">My Patients</h2>
            </div>
            <p className="text-gray-600 mb-4">Access your patients' medical records</p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              View Patients
            </button>
          </div>

          {/* Consultations Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Video className="h-6 w-6 text-purple-500 mr-2" />
              <h2 className="text-lg font-semibold">Video Consultations</h2>
            </div>
            <p className="text-gray-600 mb-4">Start or join a video consultation</p>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Start Consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;