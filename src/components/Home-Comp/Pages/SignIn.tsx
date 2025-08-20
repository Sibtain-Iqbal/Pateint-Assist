import { useState } from "react";
import AuthModal from "@/components/Home-Comp/SignIn-SignUp/AuthModel";

export default function SignInPage () {
  const [showmodal ,setshowmodal] = useState(true)
return <>

<div className="min-h-screen bg-gray-50">
  <AuthModal isOpen={showmodal} onClose={()=>setshowmodal(false)} />
</div>


</>
}


  