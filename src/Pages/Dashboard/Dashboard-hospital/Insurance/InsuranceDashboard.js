import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { RiEmpathizeLine } from "react-icons/ri";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import Nav from "../Navigation";

import "../CommonCSS.css";
const FrontPage = () => {
  return (
    <>
    <Nav />
    <div className="container">
      <div className="AfterSideBar">
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className="maindiv">
          <div className="six commondiv">
            {" "}
            <div>
              <h1>78</h1>
              <p>Insurance</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>Insurance Details</h1>
          <div className="maindiv">
          <div className="one commondiv">
            <div>
            {/* <Quick /> */}
            </div>
          </div>
          <div className="one commondiv">
            <div>
            {/* <Search /> */}
            </div>
          </div>
          <div className="one commondiv">
            <div>
            {/* <DoctorList /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default FrontPage;

