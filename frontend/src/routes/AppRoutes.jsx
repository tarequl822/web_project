import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

// Admin Pages
import AdminHome from "../pages/admin/Home";
import Users from "../pages/admin/Users";
import Dietitians from "../pages/admin/Dietitians";
import Reports from "../pages/admin/Reports";
import Placeholder from "../pages/admin/Placeholder";

// Dietitian Pages
import DietitianDashboard from "../pages/dietitian/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

      {/* Admin Routes */}
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/dietitians" element={<Dietitians />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route
        path="/admin/foods"
        element={
          <Placeholder
            title="Foods"
            description="Food catalog management is ready for your clinical data."
          />
        }
      />
      <Route
        path="/admin/settings"
        element={
          <Placeholder
            title="Settings"
            description="System preferences and administrator settings."
          />
        }
      />

      {/* Dietitian Routes */}
      <Route path="/dietitian/dashboard" element={<DietitianDashboard />} />

      {/* Fallback Catch-all Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;