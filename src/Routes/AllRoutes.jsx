import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import HospitalDashboard from "../Pages/Dashboard/Dashboard-hospital/Hospital/HospitalDashboard"; // Import the Hospital Dashboard component
import PatientDashboard from "../Pages/Dashboard/Dashboard-hospital/Patient/PatientDashboard"; // Import the Hospital Dashboard component
import InsuranceDashboard from "../Pages/Dashboard/Dashboard-hospital/Insurance/InsuranceDashboard"; // Import the Hospital Dashboard component
import QuickPatientProfile from "../Pages/Dashboard/Dashboard-hospital/Hospital/PatientSearch/QuickSearchProfile"; // Import the Hospital Dashboard component
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        {/* Add a route for the Hospital Dashboard */}
        <Route path="/hospital" element={<HospitalDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/insurance" element={<InsuranceDashboard />} />
        <Route path="/quickpatientprofile/:card_id" element={<QuickPatientProfile />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
