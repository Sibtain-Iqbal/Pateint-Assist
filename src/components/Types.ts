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