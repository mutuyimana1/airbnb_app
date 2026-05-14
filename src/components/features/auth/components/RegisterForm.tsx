import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Eye, EyeOff } from "lucide-react";

export const RegisterForm: React.FC = () => {
  const { register } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "GUEST",
  });

  const validateForm = () => {
    const newErrors: {
      [key: string]: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await register({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role,
      });
     } catch (error: any) {
       console.error("Registration failed:", error);

       let errorMessage = "Registration failed. Please try again.";
       const errorData = error?.response?.data;

       if (errorData) {
         if (typeof errorData === 'string') {
           errorMessage = errorData;
         } else if (typeof errorData === 'object' && errorData !== null) {
           const msg = errorData.message || errorData.error || errorData.err || errorData.detail;
           if (msg) {
             errorMessage = msg;
           } else if (errorData.errors) {
             const fieldErrors = Object.values(errorData.errors);
             errorMessage = Array.isArray(fieldErrors)
               ? fieldErrors.join(', ')
               : JSON.stringify(fieldErrors);
           } else {
             errorMessage = JSON.stringify(errorData);
           }
         }
       } else {
         errorMessage = error?.message || errorMessage;
       }

       toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-2">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden">
        {/* LEFT SIDE */}
        <div className="bg-white px-6 md:px-14 py-10 md:py-16 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {/* TITLE */}
            <div>
              <h1 className="text-[42px] leading-[1.1] font-bold text-[#1D1D1F]">
                Welcome back! Please
              </h1>

              <h2 className="text-[42px] leading-[1.1] font-bold mt-1">
                <span className="text-[#FF5A3D] italic font-serif font-normal">
                  Sign up
                </span>{" "}
                <span className="text-[#1D1D1F]">to continue.</span>
              </h2>

              <p className="text-gray-500 text-[15px] leading-7 mt-6">
                Unlock a world of exclusive content, enjoy special offers, and
                be the first to dive into exciting news and updates by joining
                our community!
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              {/* NAME */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Full Name <span className="text-[#FF5A3D]">*</span>
                </label>

                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-gray-200 focus-visible:ring-[#FF5A3D]"
                />

                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* USERNAME */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Username <span className="text-[#FF5A3D]">*</span>
                </label>

                <Input
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-gray-200 focus-visible:ring-[#FF5A3D]"
                />

                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Enter Email <span className="text-[#FF5A3D]">*</span>
                </label>

                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-gray-200 focus-visible:ring-[#FF5A3D]"
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Phone Number <span className="text-[#FF5A3D]">*</span>
                </label>

                <Input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="h-14 rounded-xl border border-gray-200 focus-visible:ring-[#FF5A3D]"
                />

                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* ROLE */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Select Role <span className="text-[#FF5A3D]">*</span>
                </label>

                <Select 
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      role: value,
                    })
                  }
                >
                  <SelectTrigger className="h-14 rounded-xl border border-gray-200 focus:ring-[#FF5A3D]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="GUEST">Guest</SelectItem>

                    <SelectItem value="HOST">Host</SelectItem>
                  </SelectContent>
                </Select>

                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Password <span className="text-[#FF5A3D]">*</span>
                </label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    className="h-14 rounded-xl border border-gray-200 pr-12 focus-visible:ring-[#FF5A3D]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="space-y-2 flex gap-5">
                <label className="text-sm font-medium">
                  Confirm Password <span className="text-[#FF5A3D]">*</span>
                </label>

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="h-14 rounded-xl border border-gray-200 pr-12 focus-visible:ring-[#FF5A3D]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 rounded-xl bg-[#FF5A3D] hover:bg-[#f14b2d] text-white text-base font-semibold mt-2"
              >
                {isLoading ? "Registering..." : "Sign Up"}
              </Button>
            </form>

            {/* FOOTER */}
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#1D1D1F] font-semibold hover:text-[#FF5A3D]"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex bg-[#F5F1F1] items-center justify-center relative overflow-hidden rounded-[32px] min-h-[900px]">
          <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center max-w-xl px-8">
            <h2 className="text-5xl leading-[1.3] font-bold text-[#1D1D1F]">
              Effortlessly organize your workspace with ease.
            </h2>

            <p className="text-gray-500 mt-6 text-lg leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/account-security-4488242-3723273.png"
            alt="Register Illustration"
            className="w-[75%] max-w-3xl object-contain mt-44"
          />
        </div>
      </div>
    </div>
  );
};
