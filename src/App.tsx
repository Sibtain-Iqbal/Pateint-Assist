import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDashboard from "./components/PatientDashboard";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/ui/Navbar";
import FindDoctor from "./Pages/FindDoctor";
import Medicalspecialist from "./Pages/MedicalSpecialties";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar showModal={showModal} setShowModal={setShowModal} />
        <main className="flex-grow bg-[#f4f5f7]">
          <Routes>
            <Route path="/" element={<Home showmodal={showModal} setShowModal={setShowModal} />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="find-your-doctor" element={<FindDoctor />} />
            <Route path="medical-specialties" element={<Medicalspecialist />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
