import React, { useEffect, useMemo, useState } from "react";
import {
  FaBell,
  FaBriefcase,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaCog,
  FaFileAlt,
  FaFilter,
  FaGraduationCap,
  FaMoon,
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaSun,
  FaThLarge,
  FaTimes,
  FaUtensils,
  FaUsers,
  FaUserMd,
  FaChartBar,
  FaDownload,
  FaSpinner,
  FaClipboardList,
} from "react-icons/fa";

const PAGE_SIZE = 3;

const initialApplications = [
  {
    id: "D001",
    name: "Dr. Elena Rodriguez",
    role: "Registered Dietitian (RD)",
    specialty: "Clinical Nutrition",
    education: "MS in Clinical Nutrition",
    experience: "8+ years practice",
    applied: "2 hours ago",
    appliedTime: "2026-09-04T07:30:00",
    verified: true,
    image: "https://i.pravatar.cc/150?img=47",
    documents: [
      "RD_License.pdf",
      "MS_Credential.pdf",
      "Portfolio.zip",
    ],
  },
  {
    id: "D002",
    name: "Mark J. Thompson",
    role: "Senior Nutritionist",
    specialty: "Metabolic Nutrition",
    education: "PhD in Metabolic Science",
    experience: "12+ years experience",
    applied: "5 hours ago",
    appliedTime: "2026-09-04T04:30:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=12",
    documents: [
      "License_M_Thompson.pdf",
      "CV_2024.pdf",
    ],
  },
  {
    id: "D003",
    name: "Sarah Lin",
    role: "Certified Sports Nutritionist",
    specialty: "Sports Nutrition",
    education: "BS in Nutritional Science",
    experience: "5+ years experience",
    applied: "Yesterday",
    appliedTime: "2026-09-03T11:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=44",
    documents: [
      "Sports_Cert_Level_2.pdf",
    ],
  },
  {
    id: "D004",
    name: "Dr. James Wilson",
    role: "Clinical Dietitian",
    specialty: "Clinical Nutrition",
    education: "MSc in Dietetics",
    experience: "7+ years practice",
    applied: "Yesterday",
    appliedTime: "2026-09-03T09:00:00",
    verified: true,
    image: "https://i.pravatar.cc/150?img=11",
    documents: [
      "RD_Wilson.pdf",
      "MSc_Certificate.pdf",
    ],
  },
  {
    id: "D005",
    name: "Emily Carter",
    role: "Pediatric Nutritionist",
    specialty: "Pediatric Nutrition",
    education: "MS Pediatric Nutrition",
    experience: "6+ years practice",
    applied: "2 days ago",
    appliedTime: "2026-09-02T10:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=32",
    documents: [
      "Pediatric_License.pdf",
      "CV_Carter.pdf",
    ],
  },
  {
    id: "D006",
    name: "Daniel Brown",
    role: "Renal Dietitian",
    specialty: "Renal Nutrition",
    education: "MS Clinical Dietetics",
    experience: "9+ years practice",
    applied: "2 days ago",
    appliedTime: "2026-09-02T08:00:00",
    verified: true,
    image: "https://i.pravatar.cc/150?img=68",
    documents: [
      "Renal_Certificate.pdf",
    ],
  },
  {
    id: "D007",
    name: "Sophia Martinez",
    role: "Nutrition Specialist",
    specialty: "Community Nutrition",
    education: "BS Food & Nutrition",
    experience: "4+ years practice",
    applied: "3 days ago",
    appliedTime: "2026-09-01T14:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=49",
    documents: [
      "Nutrition_License.pdf",
      "Portfolio.pdf",
    ],
  },
  {
    id: "D008",
    name: "Michael Davis",
    role: "Sports Dietitian",
    specialty: "Sports Nutrition",
    education: "MSc Sports Nutrition",
    experience: "10+ years practice",
    applied: "3 days ago",
    appliedTime: "2026-09-01T09:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=13",
    documents: [
      "Sports_License.pdf",
      "CV_Davis.pdf",
    ],
  },
  {
    id: "D009",
    name: "Olivia Anderson",
    role: "Clinical Nutritionist",
    specialty: "Clinical Nutrition",
    education: "MS Clinical Nutrition",
    experience: "5+ years practice",
    applied: "4 days ago",
    appliedTime: "2026-08-31T12:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=45",
    documents: [
      "Clinical_Certificate.pdf",
    ],
  },
  {
    id: "D010",
    name: "Robert Taylor",
    role: "Metabolic Nutritionist",
    specialty: "Metabolic Nutrition",
    education: "PhD Nutritional Science",
    experience: "11+ years practice",
    applied: "4 days ago",
    appliedTime: "2026-08-31T08:00:00",
    verified: true,
    image: "https://i.pravatar.cc/150?img=14",
    documents: [
      "PhD_Certificate.pdf",
      "License_Taylor.pdf",
    ],
  },
  {
    id: "D011",
    name: "Grace Kim",
    role: "Pediatric Dietitian",
    specialty: "Pediatric Nutrition",
    education: "MS Pediatric Dietetics",
    experience: "6+ years practice",
    applied: "5 days ago",
    appliedTime: "2026-08-30T11:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=25",
    documents: [
      "Pediatric_RD.pdf",
    ],
  },
  {
    id: "D012",
    name: "William Thomas",
    role: "Community Dietitian",
    specialty: "Community Nutrition",
    education: "BS Nutrition & Health",
    experience: "3+ years practice",
    applied: "5 days ago",
    appliedTime: "2026-08-30T08:00:00",
    verified: false,
    image: "https://i.pravatar.cc/150?img=15",
    documents: [
      "Community_License.pdf",
      "CV_Thomas.pdf",
    ],
  },
];

function Dietitians() {
  const [applications, setApplications] = useState(initialApplications);

  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [sort, setSort] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);

  const [approvedToday, setApprovedToday] = useState(8);

  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [processingId, setProcessingId] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const [notification, setNotification] = useState("");

  // ----------------------------------------------------
  // DARK MODE
  // ----------------------------------------------------

  useEffect(() => {
    const savedTheme = localStorage.getItem("healthadmin-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("healthadmin-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("healthadmin-theme", "light");
    }
  };

  // ----------------------------------------------------
  // NOTIFICATION
  // ----------------------------------------------------

  const showNotification = (message) => {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 2500);
  };

  // ----------------------------------------------------
  // SEARCH + FILTER + SORT
  // ----------------------------------------------------

  const filteredApplications = useMemo(() => {
    let result = [...applications];

    // Search
    if (search.trim()) {
      const searchText = search.toLowerCase();

      result = result.filter((item) =>
        [
          item.name,
          item.role,
          item.specialty,
          item.education,
          item.experience,
          ...item.documents,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchText)
      );
    }

    // Specialty
    if (specialty !== "All Specialties") {
      result = result.filter(
        (item) => item.specialty === specialty
      );
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.appliedTime);
      const dateB = new Date(b.appliedTime);

      if (sort === "newest") {
        return dateB - dateA;
      }

      return dateA - dateB;
    });

    return result;
  }, [applications, search, specialty, sort]);

  // Reset page when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, specialty, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredApplications.length / PAGE_SIZE)
  );

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const visibleApplications = filteredApplications.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  // ----------------------------------------------------
  // APPROVE
  // ----------------------------------------------------

  const handleApprove = (id) => {
    setProcessingId(id);

    setTimeout(() => {
      setApplications((prev) =>
        prev.filter((application) => application.id !== id)
      );

      setApprovedToday((prev) => prev + 1);

      setProcessingId(null);

      showNotification("Specialist approved successfully.");
    }, 700);
  };

  // ----------------------------------------------------
  // REJECT
  // ----------------------------------------------------

  const handleReject = (application) => {
    const confirmReject = window.confirm(
      `Are you sure you want to reject ${application.name}?`
    );

    if (!confirmReject) return;

    setApplications((prev) =>
      prev.filter((item) => item.id !== application.id)
    );

    showNotification("Application rejected.");
  };

  // ----------------------------------------------------
  // VIEW PROFILE
  // ----------------------------------------------------

  const handleViewProfile = (application) => {
    setSelectedApplicant(application);
  };

  // ----------------------------------------------------
  // GENERATE REPORT
  // ----------------------------------------------------

  const generateReport = () => {
    const headers = [
      "ID",
      "Name",
      "Role",
      "Specialty",
      "Education",
      "Experience",
      "Applied",
    ];

    const rows = applications.map((item) => [
      item.id,
      item.name,
      item.role,
      item.specialty,
      item.education,
      item.experience,
      item.applied,
    ]);

    const csv = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) =>
            `"${String(value).replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "dietitian-applications-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    showNotification("Report generated successfully.");
  };

  // ----------------------------------------------------
  // SIDEBAR
  // ----------------------------------------------------

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaThLarge />,
    },
    {
      name: "Users",
      icon: <FaUsers />,
    },
    {
      name: "Dietitians",
      icon: <FaUserMd />,
      active: true,
    },
    {
      name: "Foods",
      icon: <FaUtensils />,
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#f8f8ff]
        text-[#20222b]
        dark:bg-[#12141a]
        dark:text-white
        transition-colors
      "
    >
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="
          fixed
          left-0
          top-0
          z-40
          h-screen
          w-[240px]
          border-r
          border-[#d9dce8]
          bg-[#eef0fa]
          dark:border-[#30333d]
          dark:bg-[#1b1d24]
          flex
          flex-col
        "
      >
        {/* Logo */}

        <div className="px-6 pt-6 pb-7">
          <h1 className="text-[28px] font-bold text-[#0565c9]">
            HealthAdmin
          </h1>

          <p className="mt-1 text-[12px] font-semibold tracking-wide text-[#4d5261] dark:text-gray-400">
            Clinical Systems
          </p>
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-0">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (!item.active) {
                  showNotification(
                    `${item.name} page navigation`
                  );
                }
              }}
              className={`
                relative
                flex
                w-full
                items-center
                gap-4
                px-5
                py-[15px]
                text-left
                text-[16px]
                transition
                ${
                  item.active
                    ? "text-[#0565c9] bg-[#e4e8f5] dark:bg-[#252a34]"
                    : "text-[#505564] hover:bg-[#e5e7f2] dark:text-gray-300 dark:hover:bg-[#252832]"
                }
              `}
            >
              {item.active && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    h-full
                    w-[4px]
                    bg-[#0565c9]
                  "
                />
              )}

              <span className="w-5 text-[19px]">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Generate Report */}

        <div className="p-6">
          <button
            onClick={generateReport}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-[12px]
              bg-[#0874dc]
              py-3
              text-[14px]
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-[#0565c9]
            "
          >
            <FaDownload />

            Generate Report
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="ml-[240px] min-h-screen">
        {/* =====================================================
            TOP NAVBAR
        ====================================================== */}

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
              w-[240px]
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search applications..."
              className="
                w-full
                bg-transparent
                text-[14px]
                outline-none
                placeholder:text-[#7d8292]
              "
            />
          </div>

          {/* Right side */}

          <div className="flex items-center gap-5">
            {/* Notification */}

            <button
              onClick={() =>
                showNotification(
                  `You have ${applications.length} pending applications.`
                )
              }
              className="
                relative
                text-[#343845]
                transition
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              <FaBell className="text-[19px]" />

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#d92727]
                "
              />
            </button>

            {/* Help */}

            <button
              onClick={() =>
                showNotification(
                  "Use search and filters to find applications."
                )
              }
              className="
                text-[#343845]
                transition
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              <FaQuestionCircle className="text-[19px]" />
            </button>

            {/* Dark mode */}

            <button
              onClick={toggleDarkMode}
              className="
                text-[#343845]
                transition
                hover:text-[#0565c9]
                dark:text-gray-300
              "
            >
              {darkMode ? (
                <FaSun className="text-[19px]" />
              ) : (
                <FaMoon className="text-[19px]" />
              )}
            </button>

            {/* Divider */}

            <div className="h-[34px] w-px bg-[#cdd0da]" />

            {/* Admin */}

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
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />
            </div>
          </div>
        </header>

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}

        <section className="px-7 py-7">
          {/* Header */}

          <div className="mb-7 flex items-start justify-between">
            <div>
              <h2 className="text-[30px] font-bold tracking-[-0.5px]">
                Dietitian Approval
              </h2>

              <p className="mt-1 text-[15px] text-[#667085] dark:text-gray-400">
                Review and verify credentials for pending specialist
                applications.
              </p>
            </div>

            {/* Filters */}

            <div className="flex gap-3">
              <div className="relative">
                <FaFilter
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[11px]
                    text-[#687083]
                  "
                />

                <select
                  value={specialty}
                  onChange={(e) =>
                    setSpecialty(e.target.value)
                  }
                  className="
                    h-[40px]
                    w-[160px]
                    appearance-none
                    rounded-[8px]
                    border
                    border-transparent
                    bg-[#edf0fa]
                    pl-9
                    pr-8
                    text-[13px]
                    font-medium
                    text-[#535968]
                    outline-none
                    dark:bg-[#292c35]
                    dark:text-gray-200
                  "
                >
                  <option>All Specialties</option>
                  <option>Clinical Nutrition</option>
                  <option>Metabolic Nutrition</option>
                  <option>Sports Nutrition</option>
                  <option>Pediatric Nutrition</option>
                  <option>Renal Nutrition</option>
                  <option>Community Nutrition</option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="
                    h-[40px]
                    w-[140px]
                    appearance-none
                    rounded-[8px]
                    border
                    border-transparent
                    bg-[#edf0fa]
                    px-4
                    text-[13px]
                    font-medium
                    text-[#535968]
                    outline-none
                    dark:bg-[#292c35]
                    dark:text-gray-200
                  "
                >
                  <option value="newest">
                    Newest First
                  </option>

                  <option value="oldest">
                    Oldest First
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Pending */}

            <div
              className="
                flex
                h-[96px]
                items-center
                gap-5
                rounded-[12px]
                border
                border-[#cdd2e1]
                bg-white
                px-6
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e7f0ff]
                  text-[#0565c9]
                "
              >
                <FaClipboardList className="text-[20px]" />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#555b6b]">
                  Pending Review
                </p>

                <p className="mt-1 text-[31px] font-bold leading-none">
                  {applications.length}
                </p>
              </div>
            </div>

            {/* Approved */}

            <div
              className="
                flex
                h-[96px]
                items-center
                gap-5
                rounded-[12px]
                border
                border-[#cdd2e1]
                bg-white
                px-6
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#dcfaee]
                  text-[#00875a]
                "
              >
                <FaShieldAlt className="text-[21px]" />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#555b6b]">
                  Approved Today
                </p>

                <p className="mt-1 text-[31px] font-bold leading-none">
                  {String(approvedToday).padStart(2, "0")}
                </p>
              </div>
            </div>

            {/* Average */}

            <div
              className="
                flex
                h-[96px]
                items-center
                gap-5
                rounded-[12px]
                border
                border-[#cdd2e1]
                bg-white
                px-6
                dark:border-[#363a46]
                dark:bg-[#1c1f27]
              "
            >
              <div
                className="
                  flex
                  h-[46px]
                  w-[46px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f6f0e4]
                  text-[#976c22]
                "
              >
                <FaClock className="text-[20px]" />
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#555b6b]">
                  Avg. Process Time
                </p>

                <p className="mt-1 text-[31px] font-bold leading-none">
                  2.4h
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              APPLICATIONS TITLE
          ================================================= */}

          <div className="mb-5 mt-8 flex items-center gap-3">
            <h3 className="text-[20px] font-bold">
              Pending Applications
            </h3>

            <span
              className="
                flex
                h-7
                min-w-7
                items-center
                justify-center
                rounded-full
                bg-[#0768ca]
                px-2
                text-[12px]
                font-bold
                text-white
              "
            >
              {applications.length}
            </span>
          </div>

          {/* =================================================
              APPLICATION CARDS
          ================================================= */}

          <div className="space-y-5">
            {visibleApplications.length === 0 ? (
              <div
                className="
                  rounded-[12px]
                  border
                  border-[#cdd2e1]
                  bg-white
                  p-10
                  text-center
                  dark:border-[#363a46]
                  dark:bg-[#1c1f27]
                "
              >
                <p className="text-gray-500">
                  No applications found.
                </p>
              </div>
            ) : (
              visibleApplications.map((application) => (
                <div
                  key={application.id}
                  className="
                    flex
                    min-h-[172px]
                    rounded-[12px]
                    border
                    border-[#cdd2e1]
                    bg-white
                    p-5
                    dark:border-[#363a46]
                    dark:bg-[#1c1f27]
                  "
                >
                  {/* Applicant */}

                  <div className="flex min-w-0 flex-1">
                    {/* Photo */}

                    <div className="relative mr-5 shrink-0">
                      <img
                        src={application.image}
                        alt={application.name}
                        className="
                          h-[76px]
                          w-[76px]
                          rounded-[10px]
                          object-cover
                        "
                      />

                      {application.verified && (
                        <div
                          className="
                            absolute
                            -bottom-5
                            left-1/2
                            flex
                            h-[22px]
                            w-[22px]
                            -translate-x-1/2
                            items-center
                            justify-center
                            rounded-[6px]
                            border
                            border-[#cfd5df]
                            bg-white
                            text-[#00875a]
                          "
                        >
                          <FaCheckCircle className="text-[13px]" />
                        </div>
                      )}
                    </div>

                    {/* Information */}

                    <div className="flex-1">
                      <h4 className="text-[19px] font-bold">
                        {application.name}
                      </h4>

                      <p className="mt-0.5 text-[14px] font-semibold text-[#0068ce]">
                        {application.role}
                      </p>

                      {/* Education / Experience */}

                      <div className="mt-5 grid grid-cols-2 gap-8">
                        <div className="flex items-center gap-2 text-[14px] text-[#555b68] dark:text-gray-400">
                          <FaGraduationCap />

                          <span>
                            {application.education}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[14px] text-[#555b68] dark:text-gray-400">
                          <FaBriefcase />

                          <span>
                            {application.experience}
                          </span>
                        </div>
                      </div>

                      {/* Documents */}

                      <div className="mt-4 flex flex-wrap gap-2">
                        {application.documents.map(
                          (document) => (
                            <span
                              key={document}
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-[#edf0f7]
                                px-3
                                py-1.5
                                text-[12px]
                                font-medium
                                text-[#555b6b]
                                dark:bg-[#292d36]
                                dark:text-gray-300
                              "
                            >
                              <FaFileAlt className="text-[10px]" />

                              {document}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Applied */}

                  <div
                    className="
                      flex
                      w-[110px]
                      shrink-0
                      flex-col
                      items-end
                      border-r
                      border-[#d0d3dc]
                      pr-5
                      dark:border-[#3a3d46]
                    "
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#686e7d]">
                      Applied
                    </p>

                    <p className="mt-1 text-[13px] text-right">
                      {application.applied}
                    </p>
                  </div>

                  {/* Actions */}

                  <div className="w-[220px] shrink-0 pl-5">
                    <button
                      disabled={
                        processingId === application.id
                      }
                      onClick={() =>
                        handleApprove(application.id)
                      }
                      className="
                        flex
                        h-[35px]
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-[7px]
                        bg-[#0768c9]
                        text-[14px]
                        font-bold
                        text-white
                        transition
                        hover:bg-[#005cb7]
                        disabled:cursor-not-allowed
                        disabled:opacity-70
                      "
                    >
                      {processingId === application.id ? (
                        <>
                          <FaSpinner className="animate-spin" />

                          Processing...
                        </>
                      ) : (
                        "Approve Specialist"
                      )}
                    </button>

                    <button
                      onClick={() =>
                        handleReject(application)
                      }
                      className="
                        mt-3
                        h-[35px]
                        w-full
                        rounded-[7px]
                        border
                        border-[#e32828]
                        bg-white
                        text-[14px]
                        font-bold
                        text-[#d92121]
                        transition
                        hover:bg-[#fff1f1]
                        dark:bg-transparent
                      "
                    >
                      Reject Application
                    </button>

                    <button
                      onClick={() =>
                        handleViewProfile(application)
                      }
                      className="
                        mt-3
                        w-full
                        text-center
                        text-[14px]
                        font-medium
                        text-[#50586a]
                        hover:text-[#0068ce]
                        dark:text-gray-400
                      "
                    >
                      View Full Profile
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* =================================================
              PAGINATION
          ================================================= */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-between
              border-t
              border-[#d4d7e1]
              pt-5
              dark:border-[#363a46]
            "
          >
            <p className="text-[13px] text-[#596071] dark:text-gray-400">
              Showing{" "}
              {filteredApplications.length === 0
                ? 0
                : startIndex + 1}{" "}
              to{" "}
              {Math.min(
                startIndex + PAGE_SIZE,
                filteredApplications.length
              )}{" "}
              of {filteredApplications.length} applications
            </p>

            <div className="flex items-center gap-2">
              {/* Previous */}

              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[7px]
                  border
                  border-[#d1d5df]
                  text-[#626979]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <FaChevronLeft className="text-[11px]" />
              </button>

              {/* Pages */}

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-[7px]
                    text-[13px]
                    font-medium
                    ${
                      currentPage === page
                        ? "bg-[#0768c9] text-white"
                        : "text-[#525969] hover:bg-[#edf0f7] dark:text-gray-300 dark:hover:bg-[#292d36]"
                    }
                  `}
                >
                  {page}
                </button>
              ))}

              {/* Next */}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(totalPages, prev + 1)
                  )
                }
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[7px]
                  border
                  border-[#d1d5df]
                  text-[#626979]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <FaChevronRight className="text-[11px]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          PROFILE MODAL
      ====================================================== */}

      {selectedApplicant && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-5
          "
          onClick={() => setSelectedApplicant(null)}
        >
          <div
            className="
              w-full
              max-w-[600px]
              rounded-[16px]
              bg-white
              p-6
              shadow-2xl
              dark:bg-[#1d2028]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedApplicant.image}
                  alt={selectedApplicant.name}
                  className="
                    h-16
                    w-16
                    rounded-[10px]
                    object-cover
                  "
                />

                <div>
                  <h3 className="text-[21px] font-bold">
                    {selectedApplicant.name}
                  </h3>

                  <p className="text-[14px] font-semibold text-[#0068ce]">
                    {selectedApplicant.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedApplicant(null)
                }
                className="
                  text-[#777d8b]
                  hover:text-red-500
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* Details */}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#f5f6fa] p-4 dark:bg-[#292d36]">
                <p className="text-xs text-gray-500">
                  Specialty
                </p>

                <p className="mt-1 font-semibold">
                  {selectedApplicant.specialty}
                </p>
              </div>

              <div className="rounded-lg bg-[#f5f6fa] p-4 dark:bg-[#292d36]">
                <p className="text-xs text-gray-500">
                  Experience
                </p>

                <p className="mt-1 font-semibold">
                  {selectedApplicant.experience}
                </p>
              </div>

              <div className="col-span-2 rounded-lg bg-[#f5f6fa] p-4 dark:bg-[#292d36]">
                <p className="text-xs text-gray-500">
                  Education
                </p>

                <p className="mt-1 font-semibold">
                  {selectedApplicant.education}
                </p>
              </div>
            </div>

            {/* Documents */}

            <div className="mt-5">
              <h4 className="font-bold">
                Submitted Documents
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedApplicant.documents.map(
                  (document) => (
                    <span
                      key={document}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#edf0f7]
                        px-3
                        py-2
                        text-sm
                        dark:bg-[#292d36]
                      "
                    >
                      <FaFileAlt />

                      {document}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Close */}

            <button
              onClick={() => setSelectedApplicant(null)}
              className="
                mt-6
                w-full
                rounded-lg
                bg-[#0768c9]
                py-3
                font-semibold
                text-white
              "
            >
              Close Profile
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          TOAST
      ====================================================== */}

      {notification && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-[200]
            rounded-lg
            bg-[#20242c]
            px-5
            py-3
            text-sm
            font-medium
            text-white
            shadow-xl
          "
        >
          {notification}
        </div>
      )}
    </div>
  );
}

export default Dietitians;