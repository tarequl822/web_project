import React, { useMemo, useState } from "react";
import {
  FaBell,
  FaMoon,
  FaSearch,
  FaQuestionCircle,
  FaThLarge,
  FaUsers,
  FaUserMd,
  FaUtensils,
  FaChartBar,
  FaCog,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaFileExport,
} from "react-icons/fa";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";

const Users = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Anderson",
      email: "john.anderson@gmail.com",
      phone: "+880 1712-345678",
      age: 28,
      gender: "Male",
      role: "User",
      status: "Active",
      joined: "Aug 24, 2026",
      meals: 42,
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@gmail.com",
      phone: "+880 1812-456789",
      age: 31,
      gender: "Female",
      role: "User",
      status: "Active",
      joined: "Aug 21, 2026",
      meals: 67,
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@gmail.com",
      phone: "+880 1912-567890",
      age: 35,
      gender: "Male",
      role: "User",
      status: "Inactive",
      joined: "Aug 18, 2026",
      meals: 25,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@gmail.com",
      phone: "+880 1612-678901",
      age: 26,
      gender: "Female",
      role: "User",
      status: "Active",
      joined: "Aug 15, 2026",
      meals: 81,
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@gmail.com",
      phone: "+880 1512-789012",
      age: 42,
      gender: "Male",
      role: "User",
      status: "Suspended",
      joined: "Aug 10, 2026",
      meals: 12,
    },
    {
      id: 6,
      name: "Jessica Taylor",
      email: "jessica.taylor@gmail.com",
      phone: "+880 1412-890123",
      age: 29,
      gender: "Female",
      role: "User",
      status: "Active",
      joined: "Aug 08, 2026",
      meals: 54,
    },
    {
      id: 7,
      name: "David Miller",
      email: "david.miller@gmail.com",
      phone: "+880 1312-901234",
      age: 37,
      gender: "Male",
      role: "User",
      status: "Active",
      joined: "Aug 05, 2026",
      meals: 36,
    },
    {
      id: 8,
      name: "Sophia Moore",
      email: "sophia.moore@gmail.com",
      phone: "+880 1212-012345",
      age: 24,
      gender: "Female",
      role: "User",
      status: "Inactive",
      joined: "Aug 02, 2026",
      meals: 18,
    },
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.includes(search);

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, search, statusFilter, roleFilter]);

  const exportUsers = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Age", "Gender", "Role", "Status", "Joined", "Meals"];
    const rows = filteredUsers.map((user) => [
      user.id,
      user.name,
      user.email,
      user.phone,
      user.age,
      user.gender,
      user.role,
      user.status,
      user.joined,
      user.meals,
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "healthadmin-users.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const addUser = () => {
    const name = window.prompt("User name");
    const email = window.prompt("User email");

    if (!name?.trim() || !email?.trim()) return;

    setUsers((previousUsers) => [
      ...previousUsers,
      {
        id: Math.max(...previousUsers.map((user) => user.id), 0) + 1,
        name: name.trim(),
        email: email.trim(),
        phone: "Not provided",
        age: 0,
        gender: "Not provided",
        role: "User",
        status: "Active",
        joined: "Today",
        meals: 0,
      },
    ]);
    setCurrentPage(1);
  };

  const viewUser = (user) => {
    window.alert(`${user.name}\n${user.email}\n${user.phone}\nStatus: ${user.status}`);
  };

  const editUser = (user) => {
    const name = window.prompt("Update user name", user.name);
    if (!name?.trim()) return;

    setUsers((previousUsers) =>
      previousUsers.map((item) =>
        item.id === user.id ? { ...item, name: name.trim() } : item
      )
    );
  };

  const deleteUser = (user) => {
    if (!window.confirm(`Delete ${user.name}?`)) return;
    setUsers((previousUsers) => previousUsers.filter((item) => item.id !== user.id));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-gray-100 text-gray-600";
      case "Suspended":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-950 text-white" : "bg-[#f9f9ff] text-[#191b23]"
      }`}
    >
      <Sidebar />
      <div className="hidden">
        <Navbar title="User Management" />
      </div>
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`hidden fixed left-0 top-0 z-50 flex h-screen w-64 flex-col ${
          darkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-[#ecedf7] border-gray-200"
        } border-r`}
      >
        {/* Logo */}
        <div className="px-6 py-7">
          <h1 className="text-[28px] font-bold text-[#0058be]">
            HealthAdmin
          </h1>

          <p
            className={`text-xs font-semibold tracking-wide ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Clinical Systems
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          <NavItem
            icon={<FaThLarge />}
            title="Dashboard"
            active={false}
            darkMode={darkMode}
          />

          <NavItem
            icon={<FaUsers />}
            title="Users"
            active={true}
            darkMode={darkMode}
          />

          <NavItem
            icon={<FaUserMd />}
            title="Dietitians"
            darkMode={darkMode}
          />

          <NavItem
            icon={<FaUtensils />}
            title="Foods"
            darkMode={darkMode}
          />

          <NavItem
            icon={<FaChartBar />}
            title="Reports"
            darkMode={darkMode}
          />

          <NavItem
            icon={<FaCog />}
            title="Settings"
            darkMode={darkMode}
          />
        </nav>

        {/* Generate Report */}
        <div className="px-6 pb-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0058be] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#004395]">
            <FaFileExport />
            Generate Report
          </button>
        </div>

        {/* Admin */}
        <div
          className={`flex items-center gap-3 border-t px-6 py-5 ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8e2ff] font-bold text-[#0058be]">
            AU
          </div>

          <div>
            <p className="text-sm font-bold">Admin User</p>
            <p
              className={`text-[10px] ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Systems Manager
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="ml-[240px] min-h-screen">
        {/* ================= TOP NAV ================= */}
        <header
          className={`hidden sticky top-0 z-40 flex h-[72px] items-center justify-between border-b px-8 ${
            darkMode
              ? "border-gray-800 bg-gray-900"
              : "border-[#e1e2ec] bg-[#f9f9ff]"
          }`}
        >
          {/* Search */}
          <div
            className={`flex w-[320px] items-center gap-3 rounded-full px-4 py-2.5 ${
              darkMode ? "bg-gray-800" : "bg-[#f2f3fd]"
            }`}
          >
            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full border-none bg-transparent text-sm outline-none ${
                darkMode
                  ? "text-white placeholder-gray-500"
                  : "text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <button className="relative text-gray-600 hover:text-[#0058be]">
              <FaBell size={18} />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <button className="text-gray-600 hover:text-[#0058be]">
              <FaQuestionCircle size={18} />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 hover:text-[#0058be]"
            >
              <FaMoon size={18} />
            </button>

            <div className="h-8 w-px bg-gray-300" />

            <h2 className="text-lg font-bold">User Management</h2>
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <div className="mx-auto max-w-[1500px] space-y-6 p-8">
          {/* PAGE HEADER */}
          <section className="flex items-center justify-between">
            <div>
              <h1 className="text-[28px] font-bold">Users</h1>

              <p
                className={`mt-1 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Manage registered users and their account information.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={exportUsers}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  darkMode
                    ? "border-gray-700 bg-gray-900 hover:bg-gray-800"
                    : "border-[#c2c6d6] bg-white hover:bg-gray-50"
                }`}
              >
                <FaFileExport className="text-[#0058be]" />
                Export
              </button>


            </div>
          </section>

          {/* ================= STAT CARDS ================= */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Total Users"
              value="12,450"
              change="+12%"
              icon={<FaUsers />}
              iconBg="bg-[#d8e2ff]"
              iconColor="text-[#0058be]"
              darkMode={darkMode}
            />

            <StatCard
              title="Active Users"
              value="9,824"
              change="+8.4%"
              icon={<FaUsers />}
              iconBg="bg-[#6cf8bb]"
              iconColor="text-[#006c49]"
              darkMode={darkMode}
            />

            <StatCard
              title="New This Month"
              value="482"
              change="+15%"
              icon={<FaPlus />}
              iconBg="bg-[#ffddb8]"
              iconColor="text-[#825100]"
              darkMode={darkMode}
            />

            <StatCard
              title="Suspended Users"
              value="38"
              change="-4.2%"
              icon={<FaUsers />}
              iconBg="bg-[#ffdad6]"
              iconColor="text-[#ba1a1a]"
              darkMode={darkMode}
            />
          </section>

          {/* ================= TABLE CARD ================= */}
          <section
            className={`overflow-hidden rounded-2xl border shadow-sm ${
              darkMode
                ? "border-gray-800 bg-gray-900"
                : "border-[#c2c6d6] bg-white"
            }`}
          >
            {/* TABLE HEADER */}
            <div
              className={`flex flex-wrap items-center justify-between gap-4 border-b px-6 py-5 ${
                darkMode ? "border-gray-800" : "border-[#e1e2ec]"
              }`}
            >
              <div>
                <h2 className="text-lg font-bold">All Users</h2>

                <p
                  className={`mt-1 text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Showing {filteredUsers.length} of {users.length} users
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${
                    darkMode
                      ? "border-gray-700 bg-gray-800"
                      : "border-[#c2c6d6] bg-white"
                  }`}
                >
                  <FaFilter className="text-xs text-gray-500" />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={`border-none bg-transparent text-xs font-medium outline-none ${
                      darkMode ? "bg-gray-800 text-white" : "text-gray-700"
                    }`}
                  >
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Suspended</option>
                  </select>
                </div>

                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className={`rounded-lg border px-4 py-2 text-xs font-medium outline-none ${
                    darkMode
                      ? "border-gray-700 bg-gray-800 text-white"
                      : "border-[#c2c6d6] bg-white text-gray-700"
                  }`}
                >
                  <option>All</option>
                  <option>User</option>
                </select>
              </div>
            </div>

            {/* ================= TABLE ================= */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead
                  className={
                    darkMode
                      ? "bg-gray-800/70"
                      : "bg-[#f2f3fd]"
                  }
                >
                  <tr className="text-left">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      User
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Contact
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Age / Gender
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Meals Logged
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Joined
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody
                  className={`divide-y ${
                    darkMode
                      ? "divide-gray-800"
                      : "divide-[#e1e2ec]"
                  }`}
                >
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className={`transition ${
                          darkMode
                            ? "hover:bg-gray-800/50"
                            : "hover:bg-[#f9f9ff]"
                        }`}
                      >
                        {/* User */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8e2ff] font-bold text-[#0058be]">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>

                            <div>
                              <p className="text-sm font-semibold">
                                {user.name}
                              </p>

                              <p className="text-xs text-gray-500">
                                ID: USR-{String(user.id).padStart(4, "0")}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Contact */}
                        <td className="px-6 py-4">
                          <p className="text-sm">{user.email}</p>

                          <p className="mt-1 text-xs text-gray-500">
                            {user.phone}
                          </p>
                        </td>

                        {/* Age / Gender */}
                        <td className="px-6 py-4">
                          <p className="text-sm">{user.age} years</p>

                          <p className="mt-1 text-xs text-gray-500">
                            {user.gender}
                          </p>
                        </td>

                        {/* Meals */}
                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold">
                            {user.meals}
                          </span>

                          <p className="text-xs text-gray-500">
                            meals
                          </p>
                        </td>

                        {/* Joined */}
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">
                            {user.joined}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                              user.status
                            )}`}
                          >
                            {user.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              title="View User"
                              onClick={() => viewUser(user)}
                              className="rounded-lg p-2 text-gray-500 transition hover:bg-[#d8e2ff] hover:text-[#0058be]"
                            >
                              <FaEye size={14} />
                            </button>

                            <button
                              type="button"
                              title="Edit User"
                              onClick={() => editUser(user)}
                              className="rounded-lg p-2 text-gray-500 transition hover:bg-[#d8e2ff] hover:text-[#0058be]"
                            >
                              <FaEdit size={14} />
                            </button>

                            <button
                              type="button"
                              title="Delete User"
                              onClick={() => deleteUser(user)}
                              className="rounded-lg p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-16 text-center"
                      >
                        <div className="text-gray-400">
                          <FaUsers
                            className="mx-auto mb-3"
                            size={30}
                          />

                          <p className="text-sm font-semibold">
                            No users found
                          </p>

                          <p className="mt-1 text-xs">
                            Try changing your search or filters.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ================= PAGINATION ================= */}
            <div
              className={`flex items-center justify-between border-t px-6 py-4 ${
                darkMode ? "border-gray-800" : "border-[#e1e2ec]"
              }`}
            >
              <p className="text-xs text-gray-500">
                Page {currentPage} · Showing {filteredUsers.length} of {users.length} users
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-800"
                      : "border-[#c2c6d6] hover:bg-gray-100"
                  }`}
                >
                  <FaChevronLeft size={11} />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold ${
                    currentPage === 1 ? "bg-[#0058be] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  1
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium ${
                    currentPage === 2 ? "bg-[#0058be] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  2
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage(3)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium ${
                    currentPage === 3 ? "bg-[#0058be] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  3
                </button>

                <span className="px-1 text-gray-400">...</span>

                <button
                  type="button"
                  onClick={() => setCurrentPage(20)}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium ${
                    currentPage === 20 ? "bg-[#0058be] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  20
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(20, page + 1))}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-800"
                      : "border-[#c2c6d6] hover:bg-gray-100"
                  }`}
                >
                  <FaChevronRight size={11} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

/* =========================================================
   NAV ITEM
========================================================= */

const NavItem = ({
  icon,
  title,
  active = false,
  darkMode = false,
}) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-4 border-r-4 px-5 py-3.5 text-sm transition ${
        active
          ? "border-[#0058be] bg-[#e1e2ec] font-semibold text-[#0058be]"
          : `border-transparent ${
              darkMode
                ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                : "text-gray-600 hover:bg-[#e1e2ec] hover:text-[#0058be]"
            }`
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{title}</span>
    </a>
  );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
  darkMode,
}) => {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        darkMode
          ? "border-gray-800 bg-gray-900"
          : "border-[#c2c6d6] bg-white"
      }`}
    >
      <div className="mb-5 flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

        <span className="rounded-full bg-[#6cf8bb] px-2.5 py-1 text-[11px] font-bold text-[#006c49]">
          {change}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">{value}</h3>
    </div>
  );
};

export default Users;