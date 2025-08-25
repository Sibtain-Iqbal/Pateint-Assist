  import { useState } from "react";
  import { Heart, Mail, Lock, User, Stethoscope, UserCheck, Phone, MapPin, Calendar } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import { signupUser, signinUser } from "../../../ApiServices/Api"; // Import the API functions

  interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: "signin" | "signup";
  }

  const AuthModal = ({ isOpen, onClose, initialMode = "signin" }: AuthModalProps) => {
    const [authMode, setAuthMode] = useState<"signin" | "signup">(initialMode);
    const [userType, setUserType] = useState<"patient" | "doctor">("patient");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [specialization, setSpecialization] = useState("");
    const [degree, setDegree] = useState("");
    const [experience, setExperience] = useState("");
    const [availability, setAvailability] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
        if (authMode === "signup") {
          if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
          }

          const formData = new FormData();
          formData.append("name", name);
          formData.append("email", email);
          formData.append("password", password);
          formData.append("confirmPassword", confirmPassword);
          formData.append("phone", phone);
          formData.append("age", age);
          formData.append("gender", gender);
          formData.append("address", address);
          formData.append("role", userType);
          if (image) formData.append("image", image);

          if (userType === "doctor") {
            formData.append("specialization", specialization);
            formData.append("degree", degree);
            formData.append("experience", experience);
            formData.append("availability", availability);
          }

          const data = await signupUser(formData, userType);

          if (data) {
            toast.success("Signup successful! You can now log in.");
            setAuthMode("signin");
          }
        } else { // Signin mode
          const data = await signinUser({ email, password }, userType);

          if (data && data.jwtToken) {
            localStorage.setItem("token", data.jwtToken);
            localStorage.setItem("userType", userType);
            localStorage.setItem("loginUser", data.name);

            const dashboardPath = userType === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";
            navigate(dashboardPath);
            onClose();
          }
        }
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
        console.error("Auth error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="p-6 sticky top-0 bg-white z-10">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">HealthConnect</h2>
              <button className="relative left-[180px] text-xl hover:text-[#53aec5]" onClick={onClose}> ✕</button>
            </div>
            <p className="text-gray-600">
              {authMode === "signin"
                ? "Welcome back! Sign in to access your account."
                : "Create your account to get started with HealthConnect."
              }
            </p>
          </div>

          {/* Tabs */}
          <div className="px-6 sticky top-[104px] bg-white z-10">
            <div className="flex border-b">
              <button
                className={`px-4 py-2 font-medium ${authMode === "signin" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => { setAuthMode("signin"); setError(null); }}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 font-medium ${authMode === "signup" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                onClick={() => { setAuthMode("signup"); setError(null); }}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === "signin" ? (
                // Sign-in form fields
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Continue as:</label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "patient" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                        onClick={() => setUserType("patient")}
                      >
                        <div className="text-center">
                          <UserCheck className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                          <div className="font-medium text-sm">Patient</div>
                        </div>
                      </div>
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "doctor" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                        onClick={() => setUserType("doctor")}
                      >
                        <div className="text-center">
                          <Stethoscope className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                          <div className="font-medium text-sm">Doctor</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  >
                    {loading ? "Signing In..." : `Sign In as ${userType === "patient" ? "Patient" : "Doctor"}`}
                  </button>
                </div>
              ) : (
                // Sign-up form fields
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">I am a:</label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "patient" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                        onClick={() => setUserType("patient")}
                      >
                        <div className="text-center">
                          <UserCheck className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                          <div className="font-medium text-sm">Patient</div>
                          <div className="text-xs text-gray-500">Find & book doctors</div>
                        </div>
                      </div>
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${userType === "doctor" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
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
                  {/* Profile Image Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Profile Image</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      accept="image/*"
                    />
                  </div>
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
                    <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="signup-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="signup-age" className="block text-sm font-medium text-gray-700">Age</label>
                      <input
                        id="signup-age"
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="signup-gender" className="block text-sm font-medium text-gray-700">Gender</label>
                      <select
                        id="signup-gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-address" className="block text-sm font-medium text-gray-700">Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="signup-address"
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                  <div className="space-y-2">
                    <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="signup-confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  {userType === "doctor" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="signup-specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                        <input
                          id="signup-specialization"
                          type="text"
                          placeholder="Enter your specialization"
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="signup-degree" className="block text-sm font-medium text-gray-700">Degree</label>
                        <input
                          id="signup-degree"
                          type="text"
                          placeholder="Enter your degree"
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="signup-experience" className="block text-sm font-medium text-gray-700">Experience</label>
                        <input
                          id="signup-experience"
                          type="text"
                          placeholder="Enter your experience (e.g., 5 years)"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="signup-availability" className="block text-sm font-medium text-gray-700">Availability</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            id="signup-availability"
                            type="text"
                            placeholder="E.g., Mon-Fri, 9am-5pm"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  >
                    {loading ? "Signing Up..." : `Sign Up as ${userType === "patient" ? "Patient" : "Doctor"}`}
                  </button>
                </div>
              )}
            </form>
            <p className="mt-4 text-xs text-center text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default AuthModal;







