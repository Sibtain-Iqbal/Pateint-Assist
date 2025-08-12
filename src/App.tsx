import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignInPage from './Pages/SignIn';
import SignUpPage from './Pages/SignUp';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/ui/Navbar';
import FindDoctor from './Pages/FindDoctor';
import Medicalspecialist from './Pages/MedicalSpecialties';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='find-your-doctor' element={<FindDoctor/>} />
            <Route path='medical-specialties' element={<Medicalspecialist/>} />
            
            {/* Protected Routes */}
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