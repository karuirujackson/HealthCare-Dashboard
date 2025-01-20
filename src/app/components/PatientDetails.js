import React from 'react';

// interface patient {
//   name: string;
//   gender: string;
//   age: number;
//   address: string;
//   phone: number;
//   dob: string;
//   insurance: string;
//   emergencyContact: string;
// }

export default function PatientDetails({ patient }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold">{patient.name}</h2>
      <p>Gender: {patient.gender}</p>
      <p>Age: {patient.age}</p>
      <p>Address: {patient.address}</p>
      <p>Phone: {patient.phone}</p>
      <p>DOB: {patient.dob}</p>
      <p>Insurance: {patient.insurance}</p>
      <p>Emergency Contact: {patient.emergencyContact}</p>
    </div>
  );
}
