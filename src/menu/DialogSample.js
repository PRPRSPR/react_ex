import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogSample() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {/* Open alert dialog */}
        버튼
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
          {"타이틀이래"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running. */}
            내용이래
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>버튼하나</Button>
          {/* <Button onClick={handleClose} autoFocus> */}
          <Button variant="outlined" onClick={handleClose} autoFocus>
            버튼둘
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}