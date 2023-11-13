import React, { useState, useEffect } from "react";
import { Radio, Button, Spin, message } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DLogin.css";

const DLogin = () => {
  const [userType, setUserType] = useState("Hospital");
  const [userID, setUserID] = useState("");
  const [hospitalID, setHospitalID] = useState("");
  const [DepartmentID, setDepartmentID] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const showhospitalfields = () => {
    return (
      <div>
        <h3>Department ID</h3>
        <input
          type="text"
          value={DepartmentID}
          onChange={(e) => setDepartmentID(e.target.value)}
          name="DepartmentID"
          // required
        />
        <h3>Doctor ID</h3>
        <input
          type="text"
          value={doctorID}
          onChange={(e) => setDoctorID(e.target.value)}
          name="doctorID"
          // required
        />
      </div>
    );
  };

  useEffect(() => {
    if (userType === "Hospital") {
      showhospitalfields();
    }
  }, [userType]);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (userType === "Hospital") {
      console.log("Hospital login successful");
      navigate("/hospital");
    } else if (userType === "Patient") {
      console.log("Patient login successful");
      navigate("/patient");
    } else {
      console.log("Insurance login successful");
      navigate("/insurance");
    }
    // try {
    //   const userData = {
    //     userType,
    //     userID: userType === "Hospital" ? hospitalID : userID, // Fixed hospitalID
    //     password,
    //   };

    //   const response = await axios.post(
    //     "https://long-tan-crane-gear.cyclic.app/api/auth/login",
    //     userData
    //   );

    //   if (response.data.success) {
    //     if (userType === "Hospital") {
    //       console.log("Hospital login successful");
    //       navigate("/hospital");
    //     } else if (userType === "Patient") {
    //       console.log("Patient login successful");
    //       navigate("/patient");
    //     } else {
    //       console.log("Insurance login successful");
    //       navigate("/insurance");
    //     }
    //   } else {
    //     console.log("Login failed");
    //     message.error("Incorrect login or password. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Login error:", error);
    //   message.error("Incorrect login or password. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="mainLoginPage">
      <div className="leftside">
        <img src={banner} alt="banner" />
      </div>
      <div className="rightside">
        <h1>Login</h1>
        <div>
          <Radio.Group
            className={"radiogroup"}
            value={userType}
            onChange={handleUserTypeChange}
          >
            <Radio.Button value="Hospital" className={"radiobutton"}>
              Hospital
            </Radio.Button>
            <Radio.Button value="Patient" className={"radiobutton"}>
              Patient
            </Radio.Button>
            <Radio.Button value="Insurance" className={"radiobutton"}>
              Insurance
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className="Profileimg">
          <img src={admin} alt="profile" />
        </div>
        <div>
          <form onSubmit={handleLoginSubmit}>
            <h3>
              {userType === "Hospital"
                ? "Hospital ID"
                : userType === "Patient"
                  ? "Patient ID"
                  : "Insurance ID"}
            </h3>
            <input
              type="text"
              value={userType === "Hospital" ? hospitalID : userID}
              onChange={(e) => (userType === "Hospital" ? setHospitalID(e.target.value) : setUserID(e.target.value))}
              name={userType === "Hospital" ? "hospitalID" : "userID"}
              required
            />

            {userType === "Hospital" ? showhospitalfields() : null}
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {loading ? (
              <Spin size="large" />
            ) : (
              <Button type="primary" htmlType="submit">
                {loading ? "Loading..." : "Submit"}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DLogin;
