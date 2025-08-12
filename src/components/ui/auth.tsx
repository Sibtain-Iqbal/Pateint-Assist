import { Heart } from "lucide-react";
import { useState } from "react";

type AuthModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function AuthModal({ show, onClose }: AuthModalProps) {
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Blurred Background (no black overlay) */}
      <div 
        className="absolute inset-0  backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-50">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">HealthConnect     </h2>
        
        
        {/* User Type Toggle */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setUserType("patient")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              userType === "patient" 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Patient
          </button>
          <button
            onClick={() => setUserType("doctor")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              userType === "doctor" 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Doctor
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {userType === "patient" ? "Full Name" : "Full Name"}
            </label>
            <input
              type="text"
              placeholder={`Enter your ${userType === "patient" ? "full name" : "professional name"}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            {userType === "patient" ? "Create Patient Account" : "Create Doctor Account"}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}