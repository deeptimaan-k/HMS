import React, { useState } from "react";
import { Radio, Button, Spin, message } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./DLogin.css";

const DLogin = () => {
  const [userType, setUserType] = useState("Hospital");
  const [hospitalID, setHospitalID] = useState("");
  const [deptID, setDeptID] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [companyID, setCompanyID] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCVV] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const patientsCollection = collection(db, "patients");
      const q = query(
        patientsCollection,
        where("card_no", "==", cardNo),
        where("cvv", "==", cvv)
      );
      const patientQuery = await getDocs(q);

      if (!patientQuery.empty) {
        navigate("/patient");
        message.success("Successfully Logged in");
      } else {
        message.error("Incorrect patient details. Please try again.");
      }
    } catch (error) {
      console.error("Error during patient login: ", error);
      message.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginDoctor = async () => {
    try {
      const doctorsCollection = collection(db, "doctors");
      const q = query(
        doctorsCollection,
        where("hospital_id", "==", hospitalID),
        where("department_id", "==", deptID),
        where("doctor_id", "==", doctorID),
        where("cvv", "==", cvv)
      );
      const doctorQuery = await getDocs(q);

      if (!doctorQuery.empty) {
        navigate("/hospital");
        message.success("Successfully Logged in");
      } else {
        message.error("Incorrect doctor details. Please try again.");
      }
    } catch (error) {
      console.error("Error during doctor login: ", error);
      message.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const loginInsurance = async () => {
    try {
      const insuranceCollection = collection(db, "insurance_company");
      const q = query(
        insuranceCollection,
        where("company_id", "==", companyID),
        where("cvv", "==", cvv)
      );
      const insuranceQuery = await getDocs(q);

      if (!insuranceQuery.empty) {
        navigate("/insurance");
        message.success("Successfully Logged in");
      } else {
        message.error("Incorrect insurance details. Please try again.");
      }
    } catch (error) {
      console.error("Error during insurance login: ", error);
      message.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      switch (userType) {
        case "Hospital":
          await loginDoctor();
          break;
        case "Patient":
          await login();
          break;
        case "Insurance":
          await loginInsurance();
          break;
        default:
          throw new Error("Invalid userType");
      }
    } catch (error) {
      console.error("Login error: ", error);
      message.error("Login failed. Please check your credentials and try again.");
    } finally {
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
              value={
                userType === "Hospital"
                  ? hospitalID
                  : userType === "Patient"
                  ? cardNo
                  : companyID
              }
              onChange={(e) =>
                userType === "Hospital"
                  ? setHospitalID(e.target.value)
                  : userType === "Patient"
                  ? setCardNo(e.target.value)
                  : setCompanyID(e.target.value)
              }
              name={
                userType === "Hospital"
                  ? "hospitalID"
                  : userType === "Patient"
                  ? "cardNo"
                  : "companyID"
              }
              required
            />

            {userType === "Hospital" && (
              <div>
                <h3>Department ID</h3>
                <input
                  type="text"
                  value={deptID}
                  onChange={(e) => setDeptID(e.target.value)}
                  name="deptID"
                  required
                />
                <h3>Doctor ID</h3>
                <input
                  type="text"
                  value={doctorID}
                  onChange={(e) => setDoctorID(e.target.value)}
                  name="doctorID"
                  required
                />
              </div>
            )}

            <h3>CVV</h3>
            <input
              type="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
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
