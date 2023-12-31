import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [card_id, setcard_id] = React.useState("");
  const navigate = useNavigate(); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSearch = () => {
    navigate(`/quickpatientprofile/${card_id}`);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ fontSize: '20px', padding: '40px' }} onClick={handleClickOpen}>
        Patient Search 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Find Patient</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="ID"
            label="Patient ID"
            fullWidth
            variant="standard"
            value={card_id}
            onChange={(e) => setcard_id(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
