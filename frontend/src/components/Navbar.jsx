// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { FaBell, FaChevronDown, FaGraduationCap } from "react-icons/fa";
import { FiBell, FiSearch } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { getNotifications } from "../services/notification.services";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifications, setLoadingNotifications] = useState(false);

  // Ref for detecting clicks outside dropdowns
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) return;

      try {
        setLoadingNotifications(true);
        const response = await getNotifications();
        setNotifications(response.data || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoadingNotifications(false);
      }
    };

    fetchNotifications();
  }, [user]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowMobileMenu(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user) return "";
    return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`;
  };

  return (
    <nav className="bg-surface dark:bg-dark-surface shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center text-lg font-bold text-primary dark:text-dark-primary"
        >
          <img src={logo} alt="Smart Health and Diet Recommendation System" className="mr-2 h-9 w-9 rounded-lg object-cover" />
          Smart Health &amp; Diet
        </Link>
        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-grow max-w-md mx-8"
        >
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for people, resources, events..."
              className="w-full px-4 py-2 pl-10 bg-surface-variant dark:bg-dark-surface-variant rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-text-primary dark:text-dark-foreground"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
          </div>
        </form>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className="text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className="text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition"
            >
              Opportunities
            </Link>
          </li>
          <li>
            <Link
              to="/info"
              className="text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition"
            >
              Info
            </Link>
          </li>

          {/* Create Post Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition"
            >
              <span>Create Post</span>
              <FaChevronDown className="text-xs" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-surface rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link
                    to="/resources/new"
                    className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowDropdown(false)}
                  >
                    Add Resource
                  </Link>
                  <Link
                    to="/jobs/new"
                    className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowDropdown(false)}
                  >
                    Add Opportunity
                  </Link>
                  <Link
                    to="/events/new"
                    className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowDropdown(false)}
                  >
                    Add Event
                  </Link>
                  <Link
                    to="/posts/new"
                    className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowDropdown(false)}
                  >
                    Add Post
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right Section - Icons and User Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Toggle */}
          <button
            className="md:hidden text-text-primary dark:text-dark-foreground p-2"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
              // Focus search input when mobile menu opens
              setTimeout(() => {
                const searchInput = document.getElementById("mobile-search");
                if (searchInput) searchInput.focus();
              }, 100);
            }}
          >
            <FiSearch className="w-5 h-5" />
          </button>

          {/* Notification Icon */}
          {user && (
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiBell className="text-gray-700 dark:text-gray-300 text-xl" />
                {notifications.filter((n) => !n.isRead).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications.filter((n) => !n.isRead).length}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-surface rounded-md shadow-lg z-20 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-text-primary dark:text-dark-foreground">
                      Notifications
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {notifications.filter((n) => !n.isRead).length} unread
                    </span>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {loadingNotifications ? (
                      <div className="p-4 text-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                      </div>
                    ) : notifications.length > 0 ? (
                      notifications.slice(0, 5).map((notification) => (
                        <Link
                          key={notification.id}
                          to={`/notifications/${notification.id}`}
                          className={`block p-4 hover:bg-surface-variant dark:hover:bg-dark-surface-variant ${
                            !notification.isRead
                              ? "bg-blue-50 dark:bg-blue-900/20"
                              : ""
                          }`}
                          onClick={() => setShowNotifications(false)}
                        >
                          <div className="flex justify-between">
                            <span className="font-medium text-text-primary dark:text-dark-foreground">
                              {notification.title}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(
                                notification.created_at
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 truncate">
                            {notification.content}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                        No notifications
                      </div>
                    )}
                  </div>
                  <Link
                    to="/notifications"
                    className="block p-3 text-center text-sm font-medium text-primary dark:text-dark-primary hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowNotifications(false)}
                  >
                    View All Notifications
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Message Icon */}
          {/* {user && (
            <div className="relative" ref={messagesRef}>
              <button
                onClick={() => setShowMessages(!showMessages)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiMessageSquare className="text-gray-700 dark:text-gray-300 text-xl" />
                {messageCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {messageCount}
                  </span>
                )}
              </button>

              {showMessages && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-surface rounded-md shadow-lg z-20 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-text-primary dark:text-dark-foreground">
                      Messages
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {messageCount} unread
                    </span>
                  </div>
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {messages.map((message) => (
                      <Link
                        key={message.id}
                        to={`/messages/${message.id}`}
                        className={`block p-4 hover:bg-surface-variant dark:hover:bg-dark-surface-variant ${
                          message.unread ? "bg-blue-50 dark:bg-blue-900/20" : ""
                        }`}
                        onClick={() => setShowMessages(false)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-text-primary dark:text-dark-foreground">
                            {message.sender}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {message.time}
                          </span>
                        </div>
                        <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 truncate">
                          {message.content}
                        </p>
                        {message.unread && (
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            Unread
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/messages"
                    className="block p-3 text-center text-sm font-medium text-primary dark:text-dark-primary hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    onClick={() => setShowMessages(false)}
                  >
                    View All Messages
                  </Link>
                </div>
              )}
            </div>
          )} */}

          {/* User Avatar and Menu */}
          {user && (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center focus:outline-none"
              >
                {user.profile_pic ? (
                  <img
                    src={user.profile_pic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {getUserInitials()}
                  </div>
                )}
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-surface rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link
                      to={`/profile/${user.id}`}
                      className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                      onClick={() => setShowUserMenu(false)}
                    >
                      View Profile
                    </Link>
                    {/* <Link
                      to="/settings"
                      className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Settings
                    </Link> */}
                    <button
                      onClick={() => {
                        handleLogout();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:block">
            {!user && (
              <Link
                to="/login"
                className="px-4 py-2 border border-primary dark:border-dark-primary rounded text-primary dark:text-dark-primary hover:bg-surface dark:hover:bg-dark-surface transition"
              >
                Log In
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary dark:text-dark-foreground focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          className="md:hidden bg-surface dark:bg-dark-surface shadow-lg"
          ref={mobileMenuRef}
        >
          <div className="container mx-auto px-6 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  id="mobile-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search uniNexus..."
                  className="w-full px-4 py-2 pl-10 bg-surface-variant dark:bg-dark-surface-variant rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-text-primary dark:text-dark-foreground"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
              </div>
            </form>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="block text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="block text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="block text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Info
                </Link>
              </li>

              {/* Create Post Dropdown (Mobile) */}
              <li className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                >
                  <span>Create Post</span>
                  <FaChevronDown className="text-xs" />
                </button>

                {showDropdown && (
                  <div className="ml-4 mt-2 bg-white dark:bg-dark-surface rounded-md shadow">
                    <div className="py-1">
                      <Link
                        to="/resources/new"
                        className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Add Resource
                      </Link>
                      <Link
                        to="/jobs/new"
                        className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Add Opportunity
                      </Link>
                      <Link
                        to="/events/new"
                        className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Add Event
                      </Link>
                      <Link
                        to="/posts/new"
                        className="block px-4 py-2 text-text-primary dark:text-dark-foreground hover:bg-surface-variant dark:hover:bg-dark-surface-variant"
                        onClick={() => {
                          setShowDropdown(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Add Post
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Notification and Message Counts (Mobile) */}
              {user && (
                <>
                  <li>
                    <Link
                      to="/notifications"
                      className="flex items-center gap-2 text-text-primary dark:text-dark-foreground hover:text-primary dark:hover:text-dark-primary transition py-2"
                      onClick={() => setShowMobileMenu(false)}
                    >
                      <div className="relative">
                        <FaBell className="text-xl" />
                        {notifications.filter((n) => !n.isRead).length > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            {notifications.filter((n) => !n.isRead).length}
                          </span>
                        )}
                      </div>
                      <span>Notifications</span>
                    </Link>
                  </li>
                </>
              )}

              {/* Auth Buttons (Mobile) */}
              {!user && (
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 border border-primary dark:border-dark-primary rounded text-primary dark:text-dark-primary hover:bg-surface dark:hover:bg-dark-surface transition mt-4"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
