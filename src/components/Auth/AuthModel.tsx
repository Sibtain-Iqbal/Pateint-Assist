

import { useState } from "react";
import { Heart, Mail, Lock, User, Stethoscope, UserCheck } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated?: (userType: "patient" | "doctor") => void;
}

const AuthModal = ({ isOpen, onClose, onAuthenticated }: AuthModalProps) => {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthenticated?.(userType);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Modal Header */}
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold">HealthConnect</h2>

            <button className=" relative left-[180px] text-xl  hover:text-[#53aec5]"  onClick={onClose}> ✕</button>
          </div>
          <p className="text-gray-600">
            {authMode === "signin"
              ? "Welcome back! Sign in to access your account."
              : "Create your account to get started with HealthConnect."
            }
          </p>
        </div>

        {/* Tabs */}
        <div className="px-6">
          <div className="flex border-b">
            <button
              className={`px-4 py-2 font-medium ${authMode === "signin" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              onClick={() => setAuthMode("signin")}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-2 font-medium ${authMode === "signup" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              onClick={() => setAuthMode("signup")}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {authMode === "signin" ? (
            <div className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Continue as:</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "patient"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                      }`}
                    onClick={() => setUserType("patient")}
                  >
                    <div className="text-center">
                      <UserCheck className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium text-sm">Patient</div>
                    </div>
                  </div>
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "doctor"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                      }`}
                    onClick={() => setUserType("doctor")}
                  >
                    <div className="text-center">
                      <Stethoscope className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium text-sm">Doctor</div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  Sign In as {userType === "patient" ? "Patient" : "Doctor"}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">I am a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "patient"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                      }`}
                    onClick={() => setUserType("patient")}
                  >
                    <div className="text-center">
                      <UserCheck className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium text-sm">Patient</div>
                      <div className="text-xs text-gray-500">Find & book doctors</div>
                    </div>
                  </div>
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "doctor"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                      }`}
                    onClick={() => setUserType("doctor")}
                  >
                    <div className="text-center">
                      <Stethoscope className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                      <div className="font-medium text-sm">Doctor</div>
                      <div className="text-xs text-gray-500">Manage practice</div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  Create {userType === "patient" ? "Patient" : "Doctor"} Account
                </button>
              </form>
            </div>
          )}

          <p className="mt-4 text-xs text-center text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};


export default AuthModal;