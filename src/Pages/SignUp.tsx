
import { useState } from "react";

import AuthModal from "@/components/Auth/AuthModel";
export default function SignUpPage() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthModal 
        show={showModal} 
        onClose={() => setShowModal(false)}
        initialMode="signup"
      />
    </div>
  );
}