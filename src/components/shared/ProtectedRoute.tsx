import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/components/features/auth/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  forbiddenRoles?: string[];
}

const ProtectedRoute = ({ children, forbiddenRoles = [] }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userRole = user?.role?.toUpperCase();
  if (forbiddenRoles.length > 0 && forbiddenRoles.includes(userRole!)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
