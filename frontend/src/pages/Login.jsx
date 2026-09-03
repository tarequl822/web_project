import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Authentication - keep for later
// import { useAuth } from "../context/authContext";
// import { loginService } from "../services/auth.services";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Authentication - keep for later
  // const { login } = useAuth();
  // const navigate = useNavigate();

  // For now, navigate can be used without authentication
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // ------------------------------------------------
    // AUTHENTICATION - ENABLE THIS LATER
    // ------------------------------------------------

    /*
    setIsLoading(true);

    try {
      const response = await loginService(formData);

      login(response.data.user);

      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
    */

    // ------------------------------------------------
    // TEMPORARY LOGIN WITHOUT BACKEND
    // ------------------------------------------------

    setIsLoading(true);

    setTimeout(() => {
      console.log("Login form data:", formData);

      // Temporary navigation
      navigate("/home");

      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-page dark:bg-Dpage flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white text-xl font-bold shadow-lg">
            L
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-t-primary dark:text-Dt-primary">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm sm:text-base text-t-secondary dark:text-Dt-secondary">
            Sign in to continue to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-page dark:bg-Don-primary p-6 sm:p-8 shadow-xl border border-border dark:border-Dborder">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-t-primary dark:text-Dt-primary"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="
                  block w-full rounded-xl
                  border border-border dark:border-Dborder
                  bg-white dark:bg-Don-secondary
                  px-4 py-3
                  text-sm text-t-primary dark:text-Dt-primary
                  placeholder-gray-400
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
                >
                  Password
                </label>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-medium text-primary hover:text-secondary transition"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="
                    block w-full rounded-xl
                    border border-border dark:border-Dborder
                    bg-white dark:bg-Don-secondary
                    px-4 py-3 pr-12
                    text-sm text-t-primary dark:text-Dt-primary
                    placeholder-gray-400
                    outline-none
                    transition
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                />

                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute inset-y-0 right-0
                    flex items-center
                    px-4
                    text-gray-400
                    hover:text-primary
                    transition
                  "
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="
                  h-4 w-4
                  rounded
                  border-gray-300
                  text-primary
                  focus:ring-primary
                "
              />

              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-t-secondary dark:text-Dt-secondary"
              >
                Remember me
              </label>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl bg-red-50 dark:bg-red-950/30 px-4 py-3 text-center text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                flex w-full items-center justify-center
                rounded-xl
                bg-primary
                px-4 py-3
                text-sm font-semibold text-white
                shadow-sm
                transition
                hover:bg-secondary
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                focus:ring-offset-2
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span
                    className="
                      h-5 w-5
                      animate-spin
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                    "
                  />

                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Register */}
          <div className="mt-7 text-center">
            <p className="text-sm text-t-secondary dark:text-Dt-secondary">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary hover:text-secondary transition"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Your Application. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
