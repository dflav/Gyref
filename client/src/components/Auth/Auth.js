import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Route } from 'react-router-dom';
import Profile from './Profile';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt-token');
    if (!jwt) this.props.history.push('/');

    axios
      .get('api/user', { headers: { 'auth-token': jwt } })
      .then(res => this.setState({ user: res.data }))
      .catch(err => {
        localStorage.removeItem('jwt-token');
        this.props.history.push('/');
      });
  }

  render() {
    if (this.state.user === null) return <div></div>;
    return (
      <div>
        <Route
          path='/Profile'
          render={props => <Profile {...props} user={this.state.user} />}
        />
      </div>
    );
  }
}

export default withRouter(Auth);
