import React, { useState } from "react";
import {
  FaBell,
  FaQuestionCircle,
  FaMoon,
  FaSun,
  FaSearch,
  FaCalendarAlt,
  FaFilePdf,
  FaFileAlt,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaClipboardCheck,
  FaFilter,
  FaSyncAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChartBar,
} from "react-icons/fa";

import Sidebar from "../../components/admin/Sidebar";

const Reports = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [reportType, setReportType] =
    useState("Monthly Report");

  const [logPage, setLogPage] = useState(1);

  const [logs, setLogs] = useState([
    {
      date: "2023-10-27",
      time: "14:32:05",
      action: "Data export initiated",
      admin: "Admin_AThorne",
      details: "Exported Q3 Patient Analytics to CSV",
      severity: "INFO",
    },
    {
      date: "2023-10-27",
      time: "12:15:22",
      action: "System update deployed",
      admin: "SYS_AUTO",
      details: "Patch v4.2.1-stable applied to DietEngine",
      severity: "SUCCESS",
    },
    {
      date: "2023-10-27",
      time: "10:05:41",
      action: "User account deleted",
      admin: "Admin_MStafford",
      details: "Account UID: #77281 removed per GDPR request",
      severity: "CRITICAL",
    },
    {
      date: "2023-10-27",
      time: "09:12:10",
      action: "Login attempt limit reached",
      admin: "Auth_Service",
      details: "IP 192.168.1.1 locked for 15 minutes",
      severity: "WARNING",
    },
    {
      date: "2023-10-26",
      time: "23:59:59",
      action: "Daily backup completed",
      admin: "SYS_AUTO",
      details: "Database cluster encrypted and stored in S3",
      severity: "SUCCESS",
    },
  ]);

  // --------------------------------------------
  // DARK MODE
  // --------------------------------------------

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // --------------------------------------------
  // EXPORT PDF
  // --------------------------------------------

  const exportPDF = () => {
    window.print();
  };

  // --------------------------------------------
  // REFRESH LOGS
  // --------------------------------------------

  const refreshLogs = () => {
    setLogs((prev) => [...prev]);

    alert("Administrative logs refreshed.");
  };

  // --------------------------------------------
  // SEVERITY STYLE
  // --------------------------------------------

  const severityStyle = (severity) => {
    switch (severity) {
      case "SUCCESS":
        return "bg-[#c8f9e5] text-[#007653]";

      case "CRITICAL":
        return "bg-[#ffd8d5] text-[#b42318]";

      case "WARNING":
        return "bg-[#ffe4bf] text-[#8b4b00]";

      default:
        return "bg-[#e9eaf2] text-[#545968]";
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#f8f8ff]
        text-[#20222b]
        dark:bg-[#12141a]
        dark:text-white
      "
    >
      {/* ==================================================
          CONSTANT SIDEBAR
      ================================================== */}

      <Sidebar active="Reports" />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main className="ml-[240px] min-h-screen">
        {/* ==================================================
            TOP NAVBAR
        ================================================== */}

        <header
          className="
            sticky
            top-0
            z-30
            flex
            h-[62px]
            items-center
            justify-between
            border-b
            border-[#d9dce8]
            bg-[#fafaff]/95
            px-6
            backdrop-blur
            dark:border-[#30333d]
            dark:bg-[#181a21]/95
          "
        >
          {/* Search */}

          <div
            className="
              flex
              h-[40px]
              w-[320px]
              items-center
              gap-3
              rounded-full
              bg-[#f0f1fa]
              px-4
              dark:bg-[#292c35]
            "
          >
            <FaSearch className="text-[#73798a]" />

            <input
              placeholder="Search analytics..."
              className="
                w-full
                bg-transparent
                text-[14px]
                outline-none
                placeholder:text-[#7d8292]
              "
            />
          </div>

          {/* Right navbar */}

          <div className="flex items-center gap-5">
            <button
              className="
                text-[#343845]
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              <FaBell />
            </button>

            <button
              className="
                text-[#343845]
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              <FaQuestionCircle />
            </button>

            <button
              onClick={toggleDarkMode}
              className="
                text-[#343845]
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <div className="h-[34px] w-px bg-[#d0d3dd]" />

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[14px] font-bold">
                  Admin Sarah
                </p>

                <p className="text-[9px] font-semibold tracking-wide text-[#747987]">
                  SYSTEMS LEAD
                </p>
              </div>

              <img
                src="https://i.pravatar.cc/100?img=32"
                alt="Admin"
                className="
                  h-10
                  w-10
                  rounded-full
                  object-cover
                "
              />
            </div>
          </div>
        </header>

        {/* ==================================================
            PAGE
        ================================================== */}

        <section className="px-7 py-7">
          {/* PAGE HEADER */}

          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1
                className="
                  text-[30px]
                  font-bold
                  tracking-[-0.5px]
                "
              >
                System Reports & Analytics
              </h1>

              <p className="mt-1 text-[14px] text-[#667085] dark:text-gray-400">
                Real-time health ecosystem oversight and
                platform performance metrics.
              </p>
            </div>

            {/* Header actions */}

            <div className="flex gap-3">
              <div className="relative">
                <FaCalendarAlt
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#687083]
                  "
                />

                <select
                  value={reportType}
                  onChange={(e) =>
                    setReportType(e.target.value)
                  }
                  className="
                    h-[40px]
                    w-[145px]
                    appearance-none
                    rounded-[8px]
                    border
                    border-[#ccd1df]
                    bg-[#eef0f8]
                    pl-9
                    pr-4
                    text-[13px]
                    font-medium
                    text-[#535968]
                    outline-none
                    dark:border-[#3b3f4a]
                    dark:bg-[#292c35]
                    dark:text-gray-200
                  "
                >
                  <option>Monthly Report</option>
                  <option>Weekly Report</option>
                  <option>Annual Report</option>
                </select>
              </div>

              <button
                onClick={exportPDF}
                className="
                  flex
                  h-[40px]
                  items-center
                  gap-2
                  rounded-[8px]
                  bg-[#0768c9]
                  px-4
                  text-[13px]
                  font-semibold
                  text-white
                  hover:bg-[#005cb7]
                "
              >
                <FaFilePdf />

                Export PDF
              </button>
            </div>
          </div>

          {/* ==================================================
              STAT CARDS
          ================================================== */}

          <div className="grid grid-cols-4 gap-5">
            {/* Card 1 */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#596071]">
                    Reports
                    <br />
                    Generated
                  </p>

                  <h2 className="mt-2 text-[28px] font-bold">
                    1,284
                  </h2>

                  <p className="text-[12px] font-semibold text-[#00875a]">
                    ↗ +12% vs last month
                  </p>
                </div>

                <div className="rounded-lg bg-[#dce9ff] p-3 text-[#0768c9]">
                  <FaFileAlt />
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#596071]">
                    System Uptime
                  </p>

                  <h2 className="mt-5 text-[28px] font-bold">
                    99.98%
                  </h2>

                  <p className="text-[12px] text-[#596071]">
                    Continuous health monitoring
                  </p>
                </div>

                <div className="rounded-lg bg-[#d3fae9] p-3 text-[#00875a]">
                  <FaShieldAlt />
                </div>
              </div>
            </div>

            {/* Card 3 */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#596071]">
                    Avg. User
                    <br />
                    Engagement
                  </p>

                  <h2 className="mt-2 text-[28px] font-bold">
                    18.5m
                  </h2>

                  <p className="text-[12px] text-[#596071]">
                    Average daily session duration
                  </p>
                </div>

                <div className="rounded-lg bg-[#ffe4c4] p-3 text-[#a45d00]">
                  <FaClock />
                </div>
              </div>
            </div>

            {/* Card 4 */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#596071]">
                    Consultations
                  </p>

                  <h2 className="mt-5 text-[28px] font-bold">
                    432
                  </h2>

                  <p className="text-[12px] text-[#d42323]">
                    △ 14 pending review
                  </p>
                </div>

                <div className="rounded-lg bg-[#ffd9d7] p-3 text-[#d42323]">
                  <FaClipboardCheck />
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              CHART + TOP FOODS
          ================================================== */}

          <div className="mt-5 grid grid-cols-[2fr_1fr] gap-5">
            {/* Calories Chart */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-bold">
                  Platform-wide Calories Intake
                </h3>

                <div className="flex gap-4 text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0768c9]" />
                    Recommended
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#007653]" />
                    Actual
                  </span>
                </div>
              </div>

              {/* Chart */}

              <div className="mt-5 h-[190px] border-b border-dashed border-[#cdd2df]">
                <div className="flex h-full items-end justify-around gap-8 px-8">
                  {[
                    ["Week 1", 78, 72],
                    ["Week 2", 83, 88],
                    ["Week 3", 74, 63],
                    ["Week 4", 78, 80],
                  ].map((week) => (
                    <div
                      key={week[0]}
                      className="flex h-full items-end gap-2"
                    >
                      <div
                        className="w-[14px] rounded-t bg-[#c7dced]"
                        style={{
                          height: `${week[1]}%`,
                        }}
                      />

                      <div
                        className="w-[14px] rounded-t bg-[#007653]"
                        style={{
                          height: `${week[2]}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex justify-around text-[10px] text-[#656c7b]">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            {/* Top Foods */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <h3 className="text-[17px] font-bold">
                Top Logged Foods
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  ["🥑", "Avocado", "12.4k"],
                  ["🥣", "Oats", "10.1k"],
                  ["🍗", "Chicken Breast", "9.8k"],
                  ["🥬", "Spinach", "8.5k"],
                ].map((food, index) => (
                  <div key={food[1]}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf0f5] text-xl">
                        {food[0]}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-[13px] font-bold">
                            {food[1]}
                          </span>

                          <span className="text-[11px] font-semibold text-[#555c6b]">
                            {food[2]} logs
                          </span>
                        </div>

                        <div className="mt-1 h-[5px] rounded-full bg-[#e8ebf2]">
                          <div
                            className="h-full rounded-full bg-[#007653]"
                            style={{
                              width: `${
                                100 - index * 9
                              }%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              RESPONSE + ACTIVE USERS
          ================================================== */}

          <div className="mt-5 grid grid-cols-[1fr_1.7fr] gap-5">
            {/* Response Volume */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-bold">
                  Dietitian Response Volume
                </h3>

                <button className="text-[12px] font-bold text-[#0768c9]">
                  View All
                </button>
              </div>

              {/* Heatmap */}

              <div className="mt-5 grid grid-cols-7 gap-2">
                {[
                  20, 40, 55, 85, 65, 45, 20,
                  10, 45, 70, 90, 60, 50, 15,
                  55, 85, 65, 40, 75, 25, 45,
                ].map((value, index) => (
                  <div
                    key={index}
                    className="h-8 rounded"
                    style={{
                      backgroundColor:
                        `rgb(${225 - value}, ${245 - value / 2}, ${235 - value / 3})`,
                    }}
                  />
                ))}
              </div>

              <div className="mt-3 grid grid-cols-7 text-[9px] text-[#555c6b]">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>

              <div className="mt-4 border-t border-[#d5d8e2] pt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[11px] text-[#5f6573]">
                      Average Wait Time
                    </p>

                    <p className="text-[16px] font-semibold">
                      2h 14m
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] text-[#5f6573]">
                      Consultations Total
                    </p>

                    <p className="text-[17px] font-semibold text-[#007653]">
                      3,492
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Users */}

            <div
              className="
                rounded-[11px]
                border
                border-[#ccd2e1]
                bg-white
                p-5
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <h3 className="text-[17px] font-bold">
                Most Active Users
              </h3>

              <div className="mt-5 overflow-hidden rounded-lg border border-[#ccd2e1]">
                <table className="w-full text-left">
                  <thead className="bg-[#f0f2fa] text-[10px] uppercase text-[#596071]">
                    <tr>
                      <th className="px-4 py-3">
                        User
                      </th>

                      <th className="px-4 py-3">
                        Daily Avg logs
                      </th>

                      <th className="px-4 py-3">
                        Goal Compliance
                      </th>

                      <th className="px-4 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["SM", "Sarah Miller", "12.4", "98%"],
                      ["JR", "James Reed", "11.8", "92%"],
                      ["EL", "Elena Lopez", "10.5", "88%"],
                    ].map((user, index) => (
                      <tr
                        key={user[1]}
                        className="border-t border-[#d9dce5]"
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dce9ff] text-[10px] font-bold text-[#0768c9]">
                              {user[0]}
                            </div>

                            <span className="text-[12px] font-semibold">
                              {user[1]}
                            </span>
                          </div>
                        </td>

                        <td className="px-4 text-[12px]">
                          {user[2]}
                        </td>

                        <td className="px-4">
                          <div className="flex items-center gap-2">
                            <div className="h-[5px] w-[65px] rounded-full bg-[#e5e8ef]">
                              <div
                                className="h-full rounded-full bg-[#007653]"
                                style={{
                                  width: user[3],
                                }}
                              />
                            </div>

                            <span className="text-[10px]">
                              {user[3]}
                            </span>
                          </div>
                        </td>

                        <td className="px-4">
                          <span className="rounded bg-[#bff7df] px-2 py-1 text-[8px] font-bold text-[#007653]">
                            ACTIVE
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ==================================================
              ADMINISTRATIVE LOGS
          ================================================== */}

          <div
            className="
              mt-5
              overflow-hidden
              rounded-[11px]
              border
              border-[#ccd2e1]
              bg-white
              dark:border-[#363a46]
              dark:bg-[#1c1f27]
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#ccd2e1] px-5 py-5">
              <div>
                <h3 className="text-[17px] font-bold">
                  Recent Administrative Logs
                </h3>

                <p className="mt-1 text-[12px] text-[#606776]">
                  Traceability and system modification history.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#ccd2e1]
                  "
                >
                  <FaFilter className="text-[11px]" />
                </button>

                <button
                  onClick={refreshLogs}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#ccd2e1]
                  "
                >
                  <FaSyncAlt className="text-[11px]" />
                </button>
              </div>
            </div>

            {/* Table */}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-[#f0f2fa] text-left dark:bg-[#252832]">
                  <tr className="text-[10px] uppercase tracking-wide text-[#596071]">
                    <th className="px-5 py-3">
                      Timestamp
                    </th>

                    <th className="px-5 py-3">
                      Action
                    </th>

                    <th className="px-5 py-3">
                      Administrator
                    </th>

                    <th className="px-5 py-3">
                      Details
                    </th>

                    <th className="px-5 py-3 text-right">
                      Severity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {logs.map((log) => (
                    <tr
                      key={`${log.date}-${log.time}-${log.action}`}
                      className="
                        border-t
                        border-[#d9dce5]
                        text-[12px]
                      "
                    >
                      <td className="px-5 py-4 text-[#596071]">
                        <div>{log.date}</div>
                        <div>{log.time}</div>
                      </td>

                      <td className="px-5 py-4 font-bold">
                        {log.action}
                      </td>

                      <td className="px-5 py-4">
                        {log.admin}
                      </td>

                      <td className="px-5 py-4 text-[#596071]">
                        {log.details}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <span
                          className={`
                            rounded-full
                            px-3
                            py-1
                            text-[9px]
                            font-bold
                            ${severityStyle(
                              log.severity
                            )}
                          `}
                        >
                          {log.severity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}

            <div className="flex items-center justify-between border-t border-[#d9dce5] px-5 py-4">
              <p className="text-[12px] text-[#596071]">
                Showing 5 of 2,492 entries
              </p>

              <div className="flex gap-2">
                <button
                  disabled={logPage === 1}
                  onClick={() =>
                    setLogPage((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="
                    rounded
                    border
                    border-[#ccd2df]
                    px-3
                    py-1.5
                    text-[11px]
                    disabled:opacity-40
                  "
                >
                  Previous
                </button>

                <button
                  onClick={() =>
                    setLogPage((prev) => prev + 1)
                  }
                  className="
                    rounded
                    border
                    border-[#ccd2df]
                    px-3
                    py-1.5
                    text-[11px]
                  "
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* ==================================================
              FOOTER
          ================================================== */}

          <footer className="mt-12 border-t border-[#d5d8e1] py-6 text-center">
            <p className="text-[11px] font-semibold tracking-wide text-[#5c6372]">
              HealthAdmin © 2023 - Confidential Clinical Data -
              Internal Use Only
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Reports;