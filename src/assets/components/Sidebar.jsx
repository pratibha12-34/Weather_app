import React from "react";
import { FiHome, FiUsers, FiMessageCircle, FiCalendar, FiFileText, FiDollarSign, FiSettings, FiHelpCircle } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🩺 Medisight</h2>
      <nav className="nav-menu">
        <a className="nav-item active"><FiHome /> Dashboard</a>
        <a className="nav-item"><FiUsers /> Patients</a>
        <a className="nav-item"><FiMessageCircle /> Message</a>
        <a className="nav-item"><FiCalendar /> Appointments</a>
        <a className="nav-item"><FiFileText /> Billing</a>
        <a className="nav-item"><FiDollarSign /> Transactions</a>
      </nav>
      <div className="tools-section">
        <a className="nav-item"><FiSettings /> Settings</a>
        <a className="nav-item"><BiSupport /> Chat & Support</a>
        <a className="nav-item"><FiHelpCircle /> Help Center</a>
      </div>
      <div className="upgrade-box">
        <p>Upgrade your account to premium to get more features</p>
        <button>Upgrade plan</button>
      </div>
    </div>
  );
};

export default Sidebar;