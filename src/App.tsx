import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "./components/Home-Comp/Pages/SignIn";
import SignUpPage from "./components/Home-Comp/Pages/SignUp";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import PatientDashboard from "./components/Patient/PatientDashboard";
import NotFoundPage from "./components/Home-Comp/ui/NotFoundPage";
import Navbar from "./components/Home-Comp/ui/Navbar";
import { useState } from "react";
import { Footer } from "./components/Home-Comp/Pages/Footer";
import MedicalSpecialties from "./components/Home-Comp/Pages/MedicalSpecialties";
import Doctors from "./components/Home-Comp/Pages/FindDoctor";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home-Comp/ui/Home";


function App() {
  const [showModal, setShowModal] = useState(false);

  const queryclient = new QueryClient()
  
  return (

    <QueryClientProvider client={queryclient}>
      <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar showModal={showModal} setShowModal={setShowModal} />
        <main className="flex-grow bg-[#f4f5f7]">
          <Routes>
            <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal} />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="find-your-doctor" element={<Doctors />} />
            <Route path="medical-specialties" element={<MedicalSpecialties />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

    </QueryClientProvider>
  );
}

export default App;




