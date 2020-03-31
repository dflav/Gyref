import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      msg: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    this.props.handleClose();

    const { name, email, password } = this.state;

    const body = JSON.stringify({ name, email, password });
    console.log(body);
    let res = await axios.post('http://localhost:5000/api/user/register', body);
    console.log(res.data);
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <>
        <Dialog
          open={this.props.show}
          onClose={this.props.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle
            id='form-dialog-title'
            style={{ borderBottom: '1px solid lightgray' }}
          >
            Register
          </DialogTitle>
          <form onSubmit={this.onSubmit}>
            <DialogContent>
              <DialogContentText style={{ paddingTop: '1em' }}>
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
                onChange={this.onChangeName}
              />
              <TextField
                margin='normal'
                id='email'
                label='Email Address'
                type='email'
                required
                fullWidth
                onChange={this.onChangeEmail}
              />
              <TextField
                margin='normal'
                id='password'
                label='Password'
                type='password'
                required
                fullWidth
                onChange={this.onChangePassword}
              />
            </DialogContent>
            <DialogActions>
              <Button color='default' type='submit' variant='outlined'>
                Register
              </Button>
              <Button
                onClick={this.props.handleClose}
                color='default'
                variant='outlined'
                type='button'
              >
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
  }
}

export default Register;
