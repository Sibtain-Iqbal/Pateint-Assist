export type UserType = "patient" | "doctor";

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  license?: string;
}