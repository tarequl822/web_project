import React from "react";
import { Link, useLocation } from "react-router-dom";

import logoImg from "../../assets/images/logo.jpg";

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  // Navigation Items array for clean rendering
  const navItems = [
    { label: "Dashboard", path: "/dietitian/dashboard" },
    { label: "Patients Records", path: "/dietitian/patients" },
    { label: "Consultations", path: "/dietitian/consultations" },
    { label: "Meal Plans", path: "/dietitian/meal-plans" },
    { label: "Reports", path: "/dietitian/reports" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-4 hidden md:flex">
        <div>
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-2 py-3 mb-6">
              <img
                  src={logoImg}
                  alt="Smart Health Logo"
                  className="w-10 h-10 object-cover rounded-lg"
              />
            <div>
              <h2 className="font-bold text-gray-900 leading-tight">Smart Health & diet</h2>
              {/* <p className="text-xs text-gray-500">Clinical Portal</p> */}
            </div>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg font-medium text-sm transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Action */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg shadow-sm">
            + Start Consultation
          </button>
          <Link
            to="/login"
            className="block text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Logout
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-bold text-blue-700">Dietitian Dashboard</h1>

          {/* Search Bar & Profile */}
          <div className="flex items-center gap-6">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search patients or reports..."
                className="w-full bg-gray-100 border border-transparent rounded-full py-1.5 px-4 pl-9 text-sm focus:bg-white focus:border-gray-300 focus:outline-none"
              />
              <span className="absolute left-3 top-2 text-gray-400 text-xs">🔍</span>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">
                SM
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-gray-800 leading-tight">Dr. Sarah Mitchell</p>
                <p className="text-xs text-gray-500">Senior Dietitian</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="p-6 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;