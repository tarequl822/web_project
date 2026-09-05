import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    role: "user",
    password: "",
    confirm_password: "",
    terms: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.terms) {
      alert("Please accept the Terms of Service & Privacy Policy.");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="bg-[#f9f9ff] text-[#191b23] min-h-screen flex flex-col font-sans">
      {/* Top Header */}
      <header className="w-full top-0  bg-transparent flex justify-center items-center h-20 px-8 z-50">
        <div className="flex items-center gap-3">
          <img
            alt="Smart Health Logo"
            className="w-10 h-10 object-contain"
            src={logo}
            />
          <span className="font-bold text-xl text-[#0058be] tracking-tight">
            Smart Health &amp; Diet
          </span>
        </div>
      </header>

      {/* Main Content Form */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="bg-white border border-[#c2c6d6] rounded-xl shadow-sm w-full max-w-[560px] overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 w-full bg-[#e1e2ec]">
            <div className="h-full bg-[#0058be] w-1/4 transition-all duration-500"></div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#191b23]">
                Create your account
              </h1>
              <p className="text-base text-[#424754]">
                Empowering your journey to clinical-grade wellness.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  className="text-xs text-[#424754] block uppercase font-semibold tracking-wider"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d6] bg-white text-[#191b23] focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/10 transition-all"
                    id="full_name"
                    name="full_name"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  className="text-xs text-[#424754] block uppercase font-semibold tracking-wider"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d6] bg-white text-[#191b23] focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/10 transition-all"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Custom Radio Cards for Role Selection */}
              <div className="space-y-2">
                <label className="text-xs text-[#424754] block uppercase font-semibold tracking-wider">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label
                    className={`relative flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer transition-colors ${
                      formData.role === "user"
                        ? "border-[#0058be] bg-[#d8e2ff]/30"
                        : "border-[#c2c6d6] hover:bg-[#f2f3fd]"
                    }`}
                  >
                    <input
                      className="absolute opacity-0"
                      name="role"
                      type="radio"
                      value="user"
                      checked={formData.role === "user"}
                      onChange={handleChange}
                    />

                    <span className="text-sm font-medium text-[#191b23]">
                      User
                    </span>
                  </label>

                  <label
                    className={`relative flex flex-col items-center gap-2 p-4 border rounded-lg cursor-pointer transition-colors ${
                      formData.role === "dietitian"
                        ? "border-[#0058be] bg-[#d8e2ff]/30"
                        : "border-[#c2c6d6] hover:bg-[#f2f3fd]"
                    }`}
                  >
                    <input
                      className="absolute opacity-0"
                      name="role"
                      type="radio"
                      value="dietitian"
                      checked={formData.role === "dietitian"}
                      onChange={handleChange}
                    />
                    <span className="text-sm font-medium text-[#191b23]">
                      Dietitian
                    </span>
                  </label>
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-xs text-[#424754] block uppercase font-semibold tracking-wider"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d6] bg-white text-[#191b23] focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/10 transition-all"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-xs text-[#424754] block uppercase font-semibold tracking-wider"
                    htmlFor="confirm_password"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d6] bg-white text-[#191b23] focus:outline-none focus:border-[#0058be] focus:ring-2 focus:ring-[#0058be]/10 transition-all"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="••••••••"
                      type="password"
                      required
                      value={formData.confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  className="mt-1 rounded border-[#c2c6d6] text-[#0058be] focus:ring-[#0058be]"
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="text-sm text-[#424754]" htmlFor="terms">
                  I agree to the{" "}
                  <a className="text-[#0058be] hover:underline" href="#terms">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-[#0058be] hover:underline" href="#privacy">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0058be] hover:bg-[#004395] text-white py-3 rounded-lg font-medium transition-all active:scale-[0.98] shadow-md hover:shadow-lg flex justify-center items-center gap-2 disabled:opacity-70"
              >
                Register
              </button>
            </form>

            {/* Login Navigation Link */}
            <div className="pt-4 border-t border-[#c2c6d6] text-center">
              <p className="text-sm text-[#424754]">
                Already have an account?{" "}
                <Link
                  className="text-[#0058be] font-semibold hover:underline transition-colors"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto py-6 px-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#424754]">
            © {new Date().getFullYear()} Smart Health &amp; Diet Recommendation System. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-sm text-[#424754] hover:text-[#0058be] transition-colors" href="#terms">
              Terms
            </a>
            <a className="text-sm text-[#424754] hover:text-[#0058be] transition-colors" href="#privacy">
              Privacy
            </a>
            <a className="text-sm text-[#424754] hover:text-[#0058be] transition-colors" href="#accessibility">
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;