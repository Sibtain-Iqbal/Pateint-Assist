import { useState } from "react";
import type { UserType } from "../Types";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUPform";
interface AuthModalProps {
  show: boolean;
  onClose: () => void;
  initialUserType?: UserType;
  initialMode?: "signin" | "signup";
}

export default function AuthModal({
  show,
  onClose,
  initialUserType = "patient",
  initialMode = "signin",
}: AuthModalProps) {
  const [userType, setUserType] = useState<UserType>(initialUserType);
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);

  if (!show) return null;

  const handleAuthSubmit = (data: any) => {
    console.log("Authentication data:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">HealthConnect</h2>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setUserType("patient")}
            className={`px-4 py-2 rounded-lg ${
              userType === "patient" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Patient
          </button>
          <button
            onClick={() => setUserType("doctor")}
            className={`px-4 py-2 rounded-lg ${
              userType === "doctor" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Doctor
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setMode("signin")}
            className={`px-4 py-2 rounded-lg ${
              mode === "signin" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 rounded-lg ${
              mode === "signup" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Sign Up
          </button>
        </div>

        {mode === "signin" ? (
          <SignInForm userType={userType} onSubmit={handleAuthSubmit} />
        ) : (
          <SignUpForm userType={userType} onSubmit={handleAuthSubmit} />
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}