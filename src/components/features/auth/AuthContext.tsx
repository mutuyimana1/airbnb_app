import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import axiosInstance from "@/lib/axios";
import type { UserProfile } from "@/types";

const AUTH_TOKEN_KEY = "auth_token";

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<UserProfile>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  updateUser: (data: Partial<UserProfile>) => Promise<UserProfile>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProfile | null>(null);

  const saveToken = (token: string) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem("token", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const clearToken = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  /* _getDefaultRedirect removed — unused */

  const fetchUserProfile = async () => {
    const response = await axiosInstance.get<UserProfile>("/auth/profile");
    setUser(response.data);
    return response.data;
  };

  // Check for token in localStorage on initial load
  useEffect(() => {
    const init = async () => {
      const token =
        localStorage.getItem(AUTH_TOKEN_KEY) || localStorage.getItem("token");
      if (!token) return;

      saveToken(token);
      setIsAuthenticated(true);

      try {
        await fetchUserProfile();
        // Do NOT redirect here — let routes manage their own navigation
        // Only set auth state; ProtectedRoute and pages handle redirects as needed
      } catch (error) {
        clearToken();
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    init();
  }, []);

   const login = async (email: string, password: string) => {
     try {
       const response = await axiosInstance.post("/auth/login", {
         email,
         password,
       });
       const token = response.data.token;
       if (!token) {
         throw new Error("No authentication token received from server");
       }
       saveToken(token);
       setIsAuthenticated(true);
       return await fetchUserProfile();
     } catch (error) {
       console.error("Login failed:", error);
       throw error || new Error("Login failed");
     }
   };

   const register = async (data: any) => {
     try {
       const response = await axiosInstance.post("/auth/register", data);
       const token = response.data.token;
      //  if (!token) {
      //    throw new Error("No authentication token received from server");
      //  }
       saveToken(token);
       setIsAuthenticated(true);

       // Build user from response data or fallback to form data
       let userData = response.data.user || response.data;
       if (!userData || !userData.role) {
         userData = {
           id: "",
           name: data.name,
           email: data.email,
           phone: data.phone,
           role: data.role,
         };
       }
       setUser(userData as UserProfile);

       // Navigate using provided role
       navigate("/login");
     } catch (error) {
       console.error("Registration failed:", error);
       throw error;
     }
    };

   const logout = () => {
    clearToken();
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("booking_intent_listing");
    navigate("/", { replace: true });
  };

  const updateUser = async (data: Partial<UserProfile>) => {
    try {
      const response = await axiosInstance.patch("/auth/profile", data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error("Update user failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, register, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
