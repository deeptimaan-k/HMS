import React from "react";
import { MdPersonAdd } from "react-icons/md";
import { RiEmpathizeLine } from "react-icons/ri";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import Nav from "../Navigation";
import Quick from "./QuickDetails";

import "../CommonCSS.css";
const FrontPage = () => {
  return (
    <>
    <Nav />
    <div className="container">
      <div className="AfterSideBar">
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>45</h1>
              <p>Doctor</p>
            </div>
            <MdPersonAdd className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>50</h1>
              <p>Patient</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>78</h1>
              <p>Insurance</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>70</h1>
              <p>Appointment</p>
            </div>
            <BsFillBookmarkCheckFill className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>Patient Details</h1>
          <div className="maindiv">
          <div className="one commondiv">
            <div>
            <Quick />
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

