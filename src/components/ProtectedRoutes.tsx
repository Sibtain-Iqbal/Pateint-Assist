import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

type ProtectedRouteProps = {
  role?: 'patient' | 'doctor';
};

const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;