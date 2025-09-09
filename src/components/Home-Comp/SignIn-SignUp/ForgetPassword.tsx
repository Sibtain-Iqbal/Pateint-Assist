import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { patientForgetPassword, patientVerifyOtp, patientResetPassword } from "../../../ApiServices/Api";

const ForgetPassword = () => {
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await patientForgetPassword(email);
      toast.success("OTP sent to your email");
      setStep("otp");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await patientVerifyOtp(email, otp);
      toast.success("OTP verified");
      setStep("reset");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleResetPassword = async () => {
    try {
     const rest_pass =  await patientResetPassword(email, otp, newPassword);
      toast.success("Password reset successful. Please login.");
     
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Forget Password</h2>

        {step === "email" && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send OTP
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Verify OTP
            </button>
          </>
        )}

        {step === "reset" && (
          <>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />
            <button
              onClick={handleResetPassword}
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
