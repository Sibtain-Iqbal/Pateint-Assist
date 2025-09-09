export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  bloodType?: string;
  lastVisit?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  avatar?: string;
  rating: number;
  hospital?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'pending';
  type: 'consultation' | 'check-up' | 'follow-up';
  notes?: string;
  doctor: Doctor;
}

export interface DashboardStats {
  totalAppointments: number;
  upcomingAppointments: number;
  completedAppointments: number;
  prescriptions: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  notification?: number;
}