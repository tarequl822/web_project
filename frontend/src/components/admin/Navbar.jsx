import React, { useState } from "react";
import {
  MdDarkMode,
  MdHelpOutline,
  MdLightMode,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";

const Navbar = ({ title = "Admin Dashboard" }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2200);
  };

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-40 flex h-[74px] items-center justify-between border-b border-[#e1e2ec] bg-[#f9f9ff] px-8">
      {/* Search */}
      <div className="flex items-center">
        <div className="flex min-w-[310px] items-center gap-2 rounded-full bg-[#f0f1fb] px-3 py-2.5">
          <MdSearch
            size={23}
            className="text-[#727785]"
          />

          <input
            type="text"
            placeholder="Search clinical records..."
            className="w-full border-none bg-transparent text-sm text-[#191b23] outline-none placeholder:text-[#727785] focus:ring-0"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          type="button"
          title="Notifications"
          onClick={() => showMessage("No new notifications")}
          className="relative rounded-full p-2 text-[#424754] transition hover:bg-[#ecedf7]"
        >
          <MdNotificationsNone size={25} />

          <span className="absolute right-2 top-1 h-2 w-2 rounded-full bg-[#ba1a1a]" />
        </button>

        {/* Help */}
        <button
          type="button"
          title="Help"
          onClick={() => showMessage("Search clinical records to get started")}
          className="rounded-full p-2 text-[#424754] transition hover:bg-[#ecedf7]"
        >
          <MdHelpOutline size={24} />
        </button>

        {/* Theme */}
        <button
          onClick={handleThemeToggle}
          className="rounded-full p-2 text-[#424754] transition hover:bg-[#ecedf7]"
        >
          {darkMode ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>

        <div className="h-8 w-px bg-[#c2c6d6]" />

        <h2 className="text-xl font-bold text-[#191b23]">
          {title}
        </h2>
      </div>

      {message && (
        <div className="fixed right-8 top-[82px] z-50 rounded-lg bg-[#191b23] px-4 py-3 text-sm text-white shadow-lg">
          {message}
        </div>
      )}
    </header>
  );
};

export default Navbar;