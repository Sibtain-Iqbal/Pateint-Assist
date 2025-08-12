import { useState } from "react";
import AuthModal from "@/components/Auth/AuthModel";

export default function SignInPage () {
  const [showmodal ,setshowmodal] = useState(true)
return <>

<div className="min-h-screen bg-gray-50">
  <AuthModal show={showmodal} onClose={()=>setshowmodal(false)} initialMode="signin"/>
</div>


</>
}