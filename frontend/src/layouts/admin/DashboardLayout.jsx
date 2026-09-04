import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const DashboardLayout = ({ children, title = "Admin Dashboard" }) => {
  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#191b23]">
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Navbar title={title} />

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;