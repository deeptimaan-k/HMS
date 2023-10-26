import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Nav from '../../Navigation';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import '../../CommonCSS.css';

const PatientProfileForm = () => {
  const { patientID } = useParams();
  const [patientData, setPatientData] = useState({}); // Initialize as an empty object

  useEffect(() => {
    axios
      .get(`https://long-tan-crane-gear.cyclic.app/api/auth/user/${patientID}`)
      .then((response) => {
        setPatientData(response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, [patientID]);

  return (
    <>
      <Nav />
      <h1 style={{ color: 'rgb(184 191 234)' }}>Patient Profile: </h1>
      <Container className="w-30">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
                    style={{ width: 150, height: 150 }}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  variant="standard"
                  defaultValue=" "
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.patientName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="DOB"
                  name="dob"
                  variant="standard"
                  defaultValue=" "
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.DOB}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Age"
                  name="age"
                  variant="standard"
                  defaultValue=" "
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.age}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mobile"
                  name="mobile"
                  defaultValue=" "
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  defaultValue=" "
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Department"
                  name="department"
                  defaultValue=" "
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.department}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Gender"
                  name="gender"
                  defaultValue=" "
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.gender}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Blood Group"
                  name="bloodGroup"
                  variant="standard"
                  defaultValue=" "
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.bloodGroup}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  variant="standard"
                  defaultValue=" "
                  name="address"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Disease"
                  name="disease"
                  variant="standard"
                  defaultValue=" "
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.disease}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Details"
                  defaultValue=" "
                  name="details"
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.details}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Admitted Date"
                  name="admittedDate"
                  defaultValue=" "
                  variant="standard"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  value={patientData.date}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="button" variant="contained" color="primary">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default PatientProfileForm;
