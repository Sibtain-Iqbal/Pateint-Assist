export type UserType = "patient" | "doctor";

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  license?: string;
}

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
  buttonText: string;
  buttonLink: string;
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
