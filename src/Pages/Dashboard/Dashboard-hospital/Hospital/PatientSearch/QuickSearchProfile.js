import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Button from '@mui/material/Button';
import Nav from "../../Navigation";
import "../../CommonCSS.css";

const PatientProfileForm = () => {
  return (
    <>
      <Nav />
      <h1 style={{ color: "rgb(184 191 234)" }}>Patient Profile: </h1>
      <form>
      <Container className='mt-20'>
      <Grid container spacing={2}>
        <TextField
          label="Name"
          name="name"
          fullWidth
        />
      </Grid>
      <Grid container spacing={2}>
        <TextField
          label="Age"
          name="age"
          fullWidth
        />
      </Grid>
      <Grid container spacing={2}>
        <TextField
          label="Date of Birth"
          name="dob"
          fullWidth
        />
      </Grid>
      <Grid container spacing={2}>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Grid>
      </Container>
    </form>
    </>
  );
};
export default PatientProfileForm;
