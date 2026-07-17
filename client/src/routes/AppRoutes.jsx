import { Routes, Route, Navigate } from "react-router-dom"; // Remove BrowserRouter from here

import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Analytics from "../pages/Analytics";
import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    // REMOVED <BrowserRouter> from here
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Layout - This will now wrap all children with Sidebar and Navbar */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;