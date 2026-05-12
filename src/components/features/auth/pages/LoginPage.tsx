import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginForm } from "../components/LoginForm";

const LoginPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && user) {
      const from = location.state?.from || (user.role?.toUpperCase() === "HOST" ? "/dashboard" : "/listings");
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, user, navigate, location.state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full ">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
