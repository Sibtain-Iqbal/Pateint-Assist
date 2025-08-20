export type UserType = "patient" | "doctor";

// export interface AuthFormData {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   phone: string;
//   age: string;
//   gender: string;
//   address: string;
//   specialization?: string;
//   degree?: string;
//   experience?: string;
//   availability?: string;
// }

export interface BaseAuthFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  image?: File | string;
}

export interface PatientFormData extends BaseAuthFormData {
  role?: "patient";
}

export interface DoctorFormData extends BaseAuthFormData {
  role?: "doctor";
  specialization: string;
  degree: string;
  experience: string;
  availability?: string;
}

export type AuthFormData = PatientFormData | DoctorFormData;

export interface  StatsCardProps { 
  value : string;
  label : string ;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CtaSectionProps {
  title: string;
  description: string;

}

export interface HomeProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavbarProps  {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};


export interface User {
   id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
  accessToken: string;
}


export interface LoginCredentials {
   email: string;
  password: string;
}

export interface SignUpCredentials extends LoginCredentials {
  name: string;
  role: 'patient' | 'doctor';
}
