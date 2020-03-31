import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function Register(props) {
  return (
    <>
      <Dialog
        open={props.show}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle
          id='form-dialog-title'
          style={{ borderBottom: '1px solid lightgray' }}
        >
          Register
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create an account, please enter your email address and your
            password here.Then you will be able to save and log workouts and
            much more!
          </DialogContentText>
          <TextField
            autoFocus
            margin='normal'
            id='name'
            label='Name'
            type='text'
            required
            fullWidth
          />
          <TextField
            margin='normal'
            id='email'
            label='Email Address'
            type='email'
            required
            fullWidth
          />
          <TextField
            margin='normal'
            id='password'
            label='Password'
            type='password'
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color='primary'>
            Register
          </Button>
          <Button onClick={props.handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Register;
