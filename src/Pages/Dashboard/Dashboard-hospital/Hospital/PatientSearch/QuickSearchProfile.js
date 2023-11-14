import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Nav from '../../Navigation';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import '../../CommonCSS.css';
import { db } from '../../../../../firebaseConfig';
import { getDocs, collection, query, where, updateDoc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

const PatientProfileForm = () => {
  const { card_id } = useParams();

  const [patientData, setPatientData] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "patient_details"),
          where('card_no', '==', card_id)
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setPatientData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [card_id]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  const handleUpload = async () => {
    try {
      console.log('handleUpload function called');
      if (file) {
        setLoading(true);
        console.log('Uploading image:', file.name);
        const fileName = file.name;
        const storageRef = ref(db, `Patients/${card_id}/` + fileName);
        await uploadBytes(storageRef, file);
        const imagePath = `${fileName}`;
        console.log('Image uploaded. Updating database...');
        const q = query(collection(db, 'patient_details'), where('card_no', '==', card_id));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          await updateDoc(docRef, {
            reports: arrayUnion(imagePath),
          });
          console.log('Successfully updated database with image path:', imagePath);
        } else {
          console.log('No matching document found');
        }
      } else {
        console.log('No file selected');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleViewReports = () => {
    console.log('Viewing reports');
    // Add your logic for viewing reports
  };

  return (
    <>
      <div className='nav-fixed'>
        <Nav />
      </div>
      <h1 style={{ color: 'rgb(184 191 234)' }}>Patient Profile: </h1>
      <Container className="w-30">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
              <Grid item xs={6}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug="
                    style={{ width: 150, height: 150 }}
                  />
                </Stack>
              </Grid>

              <Grid item xs={3} style={{ textAlign: 'right' }}>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={handleViewReports}
                >
                  View Reports
                </Button>
              </Grid>
              <Grid item xs={3} style={{ textAlign: 'right' }}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    component="span"
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '5px' }}
                    onClick={handleUpload}
                  >
                    Upload Report
                  </Button>
                </label>
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
                  value={patientData.patientName || ""}
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
                  value={patientData.DOB || ""}
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
                  value={patientData.age || ""}
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
                  value={patientData.mobile || ""}
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
                  value={patientData.email || ""}
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
                  value={patientData.department || ""}
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
                  value={patientData.gender || ""}
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
                  value={patientData.bloodGroup || ""}
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
                  value={patientData.address || ""}
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
                  value={patientData.disease || ""}
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
                  value={patientData.details || ""}
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
                  value={patientData.date || ""}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="button" variant="contained" color="primary">
                  Cancel
                </Button>
                {loading && <LinearProgress />} {/* Show loading progress if loading is true */}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default PatientProfileForm;