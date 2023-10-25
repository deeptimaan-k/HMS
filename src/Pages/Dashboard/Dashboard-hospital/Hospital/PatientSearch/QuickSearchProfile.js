import React from "react";
import Nav from "../../Navigation";
import PatientQuickFrom from "./PatientQuickFrom"; // Assuming PatientQuickFrom.jsx is in the same directory
import "../../CommonCSS.css";
const QuickSearchProfile = () => {
   
  return (
    <>
    {/* <Nav /> */}
    <div className="container">
      <div className="AfterSideBar">
      <PatientQuickFrom />
       </div>
    </div>
    </>
  );
};
export default QuickSearchProfile;

