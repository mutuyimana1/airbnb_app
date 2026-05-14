import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { Eye, EyeOff } from "lucide-react";

export const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getRedirectPath = (role?: string) =>
    role?.toUpperCase() === "GUEST" ? "/listings" : "/dashboard";

   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     e.stopPropagation();

     if (loading) return;

     setLoading(true);

     try {
       const profile = await login(email, password);

       toast.success("Login successful!");

       navigate(getRedirectPath(profile.role));
      } catch (error: any) {
        console.error("Login error:", error);

        let errorMessage = "Login failed. Please try again.";
        const errorData = error?.response?.data;

        if (errorData) {
          if (typeof errorData === 'string') {
            errorMessage = errorData;
          } else if (typeof errorData === 'object' && errorData !== null) {
            // Try common message fields
            const msg = errorData.message || errorData.error || errorData.err || errorData.detail;
            if (msg) {
              errorMessage = msg;
            } else if (errorData.errors) {
              // Field-specific validation errors
              const fieldErrors = Object.values(errorData.errors);
              errorMessage = Array.isArray(fieldErrors)
                ? fieldErrors.join(', ')
                : JSON.stringify(fieldErrors);
            } else {
              // Show the raw error object as fallback
              errorMessage = JSON.stringify(errorData);
            }
          }
        } else {
          errorMessage = error?.message || errorMessage;
        }

        toast.error(errorMessage);
      } finally {
       setLoading(false);
     }
   };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-20">
      <div className="w-full max-w-full grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden">
        {/* LEFT SIDE */}
        <div className="bg-white px-10 md:px-20 py-10 md:py-16 flex items-center">
          <div className="w-full mx-auto">
            {/* TITLE */}
            <div>
              <h1 className="text-[42px] leading-[1.1] font-bold text-[#1D1D1F]">
                Welcome back! Please
              </h1>

              <h2 className="text-[42px] leading-[1.1] font-bold mt-1">
                <span className="text-[#FF5A3D] italic font-serif font-normal">
                  Sign in
                </span>{" "}
                <span className="text-[#1D1D1F]">to continue.</span>
              </h2>

              <p className="text-gray-500 text-[15px] leading-7 mt-6">
                Unlock a world of exclusive content, enjoy special offers, and
                be the first to dive into exciting news and updates by joining
                our community!
              </p>
            </div>

            {/* SOCIAL BUTTONS */}
            {/* <div className="mt-10 space-y-4">
              <Button
                type="button"
                className="w-full h-14 rounded-xl bg-[#1F232B] hover:bg-[#171A20] text-white text-base font-medium flex items-center gap-3"
              >
                <Apple size={22} />
                Sign up with Apple
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full h-14 rounded-xl border-0 bg-[#F4F1F1] hover:bg-[#ece7e7] text-[#1D1D1F] text-base font-medium flex items-center gap-3"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </Button>

              <p className="text-sm text-gray-500 leading-7">
                We won't post anything without your permission and your personal
                details are kept private
              </p>
            </div> */}

            {/* DIVIDER */}
            {/* <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-gray-200" />

              <span className="text-gray-500 font-medium">Or</span>

              <div className="flex-1 h-px bg-gray-200" />
            </div> */}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6  pt-5">
              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1D1D1F]">
                  Enter Email <span className="text-[#FF5A3D]">*</span>
                </label>

                <Input
                  type="email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 rounded-xl border border-gray-200 focus-visible:ring-[#FF5A3D] focus-visible:border-[#FF5A3D]"
                />
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1D1D1F]">
                  Password <span className="text-[#FF5A3D]">*</span>
                </label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-14 rounded-xl border border-gray-200 pr-12 focus-visible:ring-[#FF5A3D] focus-visible:border-[#FF5A3D]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* REMEMBER */}
              <div className="flex items-center gap-3">
                <Checkbox id="remember" />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember me next time
                </label>
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[#FF5A3D] hover:bg-[#f24c2c] text-white text-base font-semibold"
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* FOOTER */}
            
        <p className="text-center text-sm text-gray-400 pt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF5A5F] cursor-pointer hover:underline"
          >
            Sign up
          </Link>
          or  <Link
            to="/"
            className="text-[#FF5A5F] cursor-pointer hover:underline"
          >
            Go Home
          </Link>
        </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex bg-[#F5F1F1] items-center justify-center relative overflow-hidden rounded-[32px] min-h-[850px]">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center max-w-xl px-8">
            <h2 className="text-5xl leading-[1.3] font-bold text-[#1D1D1F]">
              Effortlessly organize your workspace with ease.
            </h2>

            <p className="text-gray-500 mt-6 text-lg leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/login-security-4488239-3723270.png"
            alt="Login Illustration"
            className="w-[75%] max-w-3xl object-contain mt-40"
          />
        </div>
      </div>
    </div>
  );
};
