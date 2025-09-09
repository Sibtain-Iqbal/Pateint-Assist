// App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import SignInPage from "./components/Home-Comp/SignIn-SignUp/SignIn";
import SignUpPage from "./components/Home-Comp/SignIn-SignUp/SignUp";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import PatientDashboard from "./components/Patient/PatientDashboard";
import NotFoundPage from "./components/Home-Comp/ui/NotFoundPage";
import Navbar from "./components/Home-Comp/ui/Navbar";
import { Footer } from "./components/Home-Comp/Pages/Footer";
import MedicalSpecialties from "./components/Home-Comp/Pages/MedicalSpecialties";
import Doctors from "./components/Home-Comp/Pages/FindDoctor";
import Home from "./components/Home-Comp/ui/Home";
import ForgetPassword from "./components/Home-Comp/SignIn-SignUp/ForgetPassword";


import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const [showModal, setShowModal] = useState(false);
  const queryclient = new QueryClient();

  const AppContent = () => {
    const location = useLocation();
    const isDashboard = location.pathname.includes("dashboard");

    return (
      <div className="min-h-screen flex flex-col">
        {!isDashboard && <Navbar showModal={showModal} setShowModal={setShowModal} />}
        <main className="flex-grow bg-[#f4f5f7]">
          <Routes>
            <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal} />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/find-your-doctor" element={<Doctors />} />
            <Route path="/medical-specialties" element={<MedicalSpecialties />} />
            <Route path="/forgetPass" element={<ForgetPassword />} />
           
            <Route element={<ProtectedRoutes />}>
              {/* NOTE the /* here */}
              
              <Route path="/doctor-dashboard/*" element={<DoctorDashboard />} />
              <Route path="/patient-dashboard/*" element={<PatientDashboard />} />
            </Route>
        
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <QueryClientProvider client={queryclient}>
      <ToastContainer />
      <Router>
        <AppContent />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
