import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import Overview from "./assets/components/OverviewChart";
import AppointmentList from "./assets/components/AppointmentList";
import PatientList from "./assets/components/PatientList";
import './App.css'

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
      <div className="top-section">
        <OverviewChart />
        <AppointmentList />
      </div>
        <div className="bottom-section">
          <PatientList />
          
        </div>
      </div>
    </div>
  );
}

export default App;