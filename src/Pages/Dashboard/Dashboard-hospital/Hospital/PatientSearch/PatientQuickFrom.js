import React from "react";
import { makeStyles } from "@mui/styles"; // Import makeStyles from the correct path
import TextField from "@mui/material/TextField"; // Import TextField from the correct path
import Grid from "@mui/material/Grid"; // Import Grid from the correct path
import Paper from "@mui/material/Paper"; // Import Paper from the correct path
import Typography from "@mui/material/Typography"; // Import Typography from the correct path\
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const PatientProfileForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Patient Profile
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="User Type" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="User ID" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Password" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Patient Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Mobile" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Age" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Department" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Gender" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Blood Group" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="DOB" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Address" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Disease" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Details" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Admitted Date" fullWidth />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default PatientProfileForm;
