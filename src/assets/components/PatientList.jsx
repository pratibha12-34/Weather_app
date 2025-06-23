import React from "react";
import "./PatientList.css";

const patients = [
  { name: "Brooklyn Simmons", gender: "Male", dob: "1995-03-18", age: "29 years old", dept: "Cardiology", id: "#OM123AA" },
  { name: "Anthony Johnson", gender: "Male", dob: "1997-03-18", age: "27 years old", dept: "Cardiology", id: "#AT456BB" },
  { name: "Sarah Miller", gender: "Female", dob: "1990-05-20", age: "34 years old", dept: "Neurology", id: "#NT112ZZ" }
];

const PatientList = () => {
  return (
    <div className="patient-list">
      <h3>Patient list</h3>
      <div className="filter-section">
        <input type="text" placeholder="Search..." />
        <select>
          <option>All status</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Department</th>
            <th>Patient ID</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.gender}</td>
              <td>{p.dob}</td>
              <td>{p.age}</td>
              <td>{p.dept}</td>
              <td>{p.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;