import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaChartPie,
  FaCalendarAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "My Tasks",
    icon: <FaTasks />,
    path: "/tasks",
  },
  {
    name: "Analytics",
    icon: <FaChartPie />,
    path: "/analytics",
  },
  {
    name: "Calendar",
    icon: <FaCalendarAlt />,
    path: "/calendar",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b">
        <h1 className="text-2xl font-bold text-indigo-600">
          Smart Todo
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t p-4">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-100 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;