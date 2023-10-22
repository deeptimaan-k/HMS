import React, { useState } from "react";
import { Radio, Button, Spin, message } from "antd"; 
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom";
import "./DLogin.css";

const DLogin = () => {
  const [userType, setUserType] = useState("Hospital");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Define the user data for login
      const userData = {
        userType,
        userID,
        password,
      };
      console.log("Submitting:", userData);
      // Send a POST request to your backend's login endpoint
      const response = await axios.post(
        "https://long-tan-crane-gear.cyclic.app/api/auth/login", // Update with your server URL
        userData
      );

      if (response.data.success) {
        // Redirect the user to the appropriate page
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
      } else {
        // Handle login failure (show an error message, for example)
        console.log("Login failed");
        message.error("Incorrect login or password. Please try again.");
        // Implement error handling, like displaying an error message to the user
      }
    } catch (error) {
      console.error("Login error:", error);
      message.error("Incorrect login or password. Please try again.");
      // Implement error handling for network or other errors
    }
    finally{
      setLoading(false);
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
          <form onSubmit={handleLoginSubmit}>
            <h3>{userType === "Hospital" ? "Hospital ID" : userType === "Patient" ? "Patient ID" : "Insurance ID"}</h3>
            <input
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              name="ID"
              required
            />
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           {loading ? ( // Show a loading spinner when loading is true
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
