import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-700"
              aria-label="GoalSetter home"
            >
              GoalSetter
            </NavLink>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`
              }
            >
              <FaSignInAlt className="text-lg" />
              <span className="hidden sm:inline">Login</span>
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                }`
              }
            >
              <FaUser className="text-lg" />
              <span className="hidden sm:inline">Register</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
