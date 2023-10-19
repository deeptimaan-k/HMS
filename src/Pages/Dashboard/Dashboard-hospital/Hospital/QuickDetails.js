import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ fontSize: '20px', padding: '40px' }} onClick={handleClickOpen}>
        Emergency Search 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Find Patient</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="ID"
            label="Patient ID"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
