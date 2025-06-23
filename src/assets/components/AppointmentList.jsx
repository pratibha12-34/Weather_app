
import React from "react";
import "./AppointmentList.css";

const appointments = [
  { name: "Brooklyn Simmons", type: "Allergy Testing", time: "10:30", date: "Tomorrow" },
  { name: "Courtney Henry", type: "Routine Lab Tests", time: "10:00", date: "Tomorrow" },
  { name: "Sarah Miller Olivia", type: "Chronic Disease Management", time: "15:00", date: "Today" },
  { name: "Esther Howard", type: "Allergy Testing", time: "14:00", date: "Today" },
  { name: "Arlene McCoy", type: "Routine Lab Tests", time: "11:30", date: "Today" },
  { name: "Jane Cooper", type: "Acute Illness", time: "10:00", date: "Today" }
];

const AppointmentList = () => {
  return (
    <div className="appointment-list">
      <h3>Appointment list</h3>
      {appointments.map((appt, index) => (
        <div key={index} className="appt-card">
          <div className="appt-info">
            <strong>{appt.name}</strong>
            <p>{appt.type}</p>
          </div>
          <div className="appt-time">
            <p>{appt.date}</p>
            <strong>{appt.time}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
