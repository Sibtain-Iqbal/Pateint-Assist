import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
  token?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, role: 'patient' | 'doctor') => Promise<void>;
  register: (userData: any, role: 'patient' | 'doctor') => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to parse user data', error);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = async (email: string, password: string, role: 'patient' | 'doctor') => {
    setLoading(true);
    try {
      // Replace with your actual API call
      const response = await fakeAuthAPI(email, password, role);
      const userData = {
        id: response.id,
        name: response.name,
        email: response.email,
        role,
        token: response.token
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      navigate(`/${role}-dashboard`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err; // Re-throw to allow handling in components
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any, role: 'patient' | 'doctor') => {
    setLoading(true);
    try {
      // Replace with your actual API call
      const response = await fakeRegisterAPI(userData, role);
      const newUser = {
        id: response.id,
        name: response.name,
        email: response.email,
        role,
        token: response.token
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      navigate(`/${role}-dashboard`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  const isAuthenticated = !!user;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      isAuthenticated, 
      loading, 
      error 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock API functions - replace with real API calls
const fakeAuthAPI = async (email: string, password: string, role: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: '1',
    name: 'Test User',
    email,
    role,
    token: 'fake-jwt-token'
  };
};

const fakeRegisterAPI = async (userData: any, role: string) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: '1',
    name: userData.name,
    email: userData.email,
    role,
    token: 'fake-jwt-token'
  };
};