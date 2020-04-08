import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt-token');
    if (!jwt) this.props.history.push('/');

    axios
      .get('api/user', { headers: { 'auth-token': jwt } })
      .then((res) => this.setState({ user: res.data }))
      .catch((err) => {
        localStorage.removeItem('jwt-token');
        this.props.history.push('/');
      });
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(Auth);
