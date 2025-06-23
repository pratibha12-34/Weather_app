import React from "react";
import { FaUserInjured, FaCalendarCheck, FaMoneyBillWave, FaHeartbeat } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div>
        <h2>🌞 Good Morning, Dr. Patel!</h2>
        <p>Overview of all of your patients and your income</p>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon">
            <FaUserInjured size={24} color="#4a5568" />
          </div>
          <h3>Total Patients</h3>
          <p>579 <span className="green">+15%</span></p>
          <a href="#">See details →</a>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaCalendarCheck size={24} color="#4a5568" />
          </div>
          <h3>Total Appointment</h3>
          <p>54 <span className="green">+10%</span></p>
          <a href="#">See details →</a>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaMoneyBillWave size={24} color="#4a5568" />
          </div>
          <h3>Total Income</h3>
          <p>$8,399.24 <span className="green">+28%</span></p>
          <a href="#">See details →</a>
        </div>

        <div className="stat-box">
          <div className="stat-icon">
            <FaHeartbeat size={24} color="#4a5568" />
          </div>
          <h3>Total Treatments</h3>
          <p>112 <span className="green">+12%</span></p>
          <a href="#">See details →</a>
        </div>
      </div>

      <div className="action-buttons">
        <button className="export-btn">Export</button>
        <button className="create-btn">+ Create new</button>
      </div>
    </div>
  );
};

export default Header;