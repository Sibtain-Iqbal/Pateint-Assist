
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(

  <GoogleOAuthProvider clientId='101819691291-ej3b9np2co1u2lojan57ri7a705f5667.apps.googleusercontent.com'>
    <App/>


  </GoogleOAuthProvider>

)
