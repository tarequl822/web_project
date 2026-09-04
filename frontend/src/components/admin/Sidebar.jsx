import React from "react";
import {
  MdAssessment,
  MdDashboard,
  MdFastfood,
  MdMedicalServices,
  MdPeople,
  MdSettings,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/admin/home",
    icon: MdDashboard,
  },
  {
    id: 2,
    label: "Users",
    path: "/admin/users",
    icon: MdPeople,
  },
  {
    id: 3,
    label: "Dietitians",
    path: "/admin/dietitians",
    icon: MdMedicalServices,
  },
  {
    id: 4,
    label: "Foods",
    path: "/admin/foods",
    icon: MdFastfood,
  },
  {
    id: 5,
    label: "Reports",
    path: "/admin/reports",
    icon: MdAssessment,
  },
  {
    id: 6,
    label: "Settings",
    path: "/admin/settings",
    icon: MdSettings,
  },
];

const Sidebar = () => {
  const handleGenerateReport = () => {
    window.print();
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[240px] flex-col bg-[#eef0fa]">
      {/* Brand */}
      <div className="px-6 py-6">
        <h1 className="text-[30px] font-bold leading-none text-[#0058be]">
          HealthAdmin
        </h1>

        <p className="mt-1 text-xs font-semibold tracking-wide text-[#424754]">
          Clinical Systems
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 border-r-4 px-4 py-3.5 transition ${
                  isActive
                    ? "border-[#0058be] bg-[#e1e2ec] font-semibold text-[#0058be]"
                    : "border-transparent text-[#424754] hover:bg-[#e6e7f2] hover:text-[#0058be]"
                }`
              }
            >
              <Icon size={23} />

              <span className="text-[16px]">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-6 pb-6">
        <button
          type="button"
          onClick={handleGenerateReport}
          className="w-full rounded-xl bg-[#0058be] py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#004a9f] active:scale-[0.98]"
        >
          Generate Report
        </button>

        <div className="mt-7 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0058be] text-sm font-bold text-white">
            AU
          </div>

          <div>
            <p className="text-xs font-bold text-[#191b23]">
              Admin User
            </p>

            <p className="text-[10px] text-[#424754]">
              Systems Manager
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;