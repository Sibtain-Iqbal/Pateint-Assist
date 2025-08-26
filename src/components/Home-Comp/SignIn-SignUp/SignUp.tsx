 
import { useState } from "react";
import AuthModal from "./AuthModel";

export default function SignUpPage() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50">
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} initialMode="signup" />
    </div>
  );
}