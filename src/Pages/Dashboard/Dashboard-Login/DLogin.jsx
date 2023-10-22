import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./DLogin.css";

const DLogin = () => {
  const [userType, setUserType] = useState("Hospital");
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLoginSubmit = async () => {
    try {
      // Define the user data for login
      const userData = {
        userType,
        userID: document.querySelector("[name=ID]").value,
        password: document.querySelector("[name=password]").value,
      };

      // Send a POST request to your backend's login endpoint
      const response = await axios.post(
        "https://long-tan-crane-gear.cyclic.app/api/auth/login",
        userData
      );

      if (response.data.success) {
        // Redirect the user to the appropriate page
        if (userType === "hospital") {
          navigate("/hospital");
        } else if (userType === "Patient") {
          navigate("/patient");
        } else {
          navigate("/insurance");
        }
      } else {
        // Handle login failure (show an error message, for example)
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mainLoginPage">
      <div className="leftside">
        <img src={banner} alt="banner" />
      </div>
      <div className="rightside">
        <h1>Login</h1>
        <div>
          <Radio.Group className={"radiogroup"} value={userType} onChange={handleUserTypeChange}>
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
          <form>
            <h3>{userType === "Hospital" ? "Hospital ID" : userType === "Patient" ? "Patient ID" : "Insurance ID"}</h3>
            <input type="number" name="ID" required />
            <h3>Password</h3>
            <input type="password" name="password" required />
            <button type="button" onClick={handleLoginSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DLogin;
