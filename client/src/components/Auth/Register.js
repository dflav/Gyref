import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
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

    const { name, email, password } = this.state;

    const config = { headers: { 'Content-Type': 'application/json' } };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('/api/user/register', body, config);
      console.log(res.body);
      this.props.handleClose();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log('Status ' + error.response.status);
        this.setState({
          msg: error.response.data
        });
      }
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
              <Alert severity='error'>{this.state.msg}</Alert>
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
                name='name'
                required
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                margin='normal'
                id='email'
                label='Email Address'
                type='email'
                name='email'
                required
                fullWidth
                onChange={this.onChange}
              />
              <TextField
                margin='normal'
                id='password'
                label='Password'
                type='password'
                name='password'
                required
                fullWidth
                onChange={this.onChange}
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
