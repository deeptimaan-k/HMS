import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Nav from "../../Navigation";
import "../../CommonCSS.css";

const PatientProfileForm = () => {
  return (
    <>
      <Nav />
      <h1 style={{ color: "rgb(184 191 234)" }}>Patient Profile: </h1>
      <form>
      <div>
        <TextField
          label="Name"
          name="name"
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Age"
          name="age"
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Date of Birth"
          name="dob"
          
          fullWidth
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </>
  );
};
export default PatientProfileForm;
