import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link, useNavigate } from "react-router-dom";
import { registerService } from "../services/auth.services";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "student",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await registerService(formData);
      console.log("Register response:", response);
      navigate("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-page dark:bg-Dpage flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl sm:text-4xl font-extrabold text-t-primary dark:text-Dt-primary">
          Create Your Account
        </h2>
        <p className="mt-2 text-center text-sm sm:text-base text-t-secondary dark:text-Dt-secondary">
          Fill in the details to get started
        </p>
      </div>

      {/* Form container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-page dark:bg-Don-primary py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    autoComplete="given_name"
                    required
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-border dark:border-Dborder rounded-md shadow-sm placeholder-Dt-secondary dark:placeholder-Dt-secondary focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-Don-secondary dark:text-Dt-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family_name"
                    required
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-border dark:border-Dborder rounded-md shadow-sm placeholder-Dt-secondary dark:placeholder-Dt-secondary focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-Don-secondary dark:text-Dt-primary"
                  />
                </div>
              </div>
            </div>

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-border dark:border-Dborder rounded-md shadow-sm placeholder-Dt-secondary dark:placeholder-Dt-secondary focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-Don-secondary dark:text-Dt-primary"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-border dark:border-Dborder rounded-md shadow-sm placeholder-Dt-secondary dark:placeholder-Dt-secondary focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-Don-secondary dark:text-Dt-primary"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Role field */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-t-primary dark:text-Dt-primary"
              >
                Role
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-border dark:border-Dborder bg-white dark:bg-Don-secondary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:text-Dt-primary"
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="alumni">Alumni</option>
                </select>
              </div>
            </div>

            {/* Register button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-secondary"
              >
                {isLoading ? (
                  <span className="spinner-border animate-spin border-2 border-t-2 border-white w-6 h-6 rounded-full"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>

          {/* Login link */}
          <div className="mt-6">
            <p className="text-center text-sm text-t-primary dark:text-Dt-primary">
              Already registered?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:text-secondary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
