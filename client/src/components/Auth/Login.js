import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      msg: ['Error', '400'], //object kanto
      alert: false,
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const config = { headers: { 'Content-Type': 'application/json' } };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/user/login', body, config);
      localStorage.setItem('jwt-token', res.data);
      this.setState({
        msg: [res.data, res.status],
        alert: false,
      });
      this.props.handleClose();
    } catch (error) {
      if (error.response) {
        this.setState({
          msg: [error.response.data, error.response.status],
          alert: true,
        });
      }
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleAlert = () => {
    this.setState({ alert: false });
  };

  render() {
    return (
      <>
        <Dialog
          open={this.props.show}
          onClose={this.props.handleClose}
          aria-labelledby='form-dialog-title'
          fullWidth={true}
          maxWidth='sm'
        >
          <DialogTitle
            id='form-dialog-title'
            style={{ borderBottom: '1px solid lightgray' }}
          >
            Login
          </DialogTitle>
          <form onSubmit={this.onSubmit}>
            <DialogContent>
              {this.state.msg[1] !== 200 ? (
                <Snackbar
                  open={this.state.alert}
                  autoHideDuration={3000}
                  onClose={this.handleAlert}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Alert
                    severity={this.state.msg[1] === 200 ? 'success' : 'error'}
                    variant='filled'
                  >
                    {this.state.msg[0]}
                  </Alert>
                </Snackbar>
              ) : null}
              <DialogContentText>
                Enter pass and email to login
              </DialogContentText>

              <TextField
                autoFocus
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
                Login
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

export default Login;
