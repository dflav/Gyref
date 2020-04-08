import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Auth/Register';
import Login from './Auth/Login';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: false,
      showLogin: false,
      showRegister: false,
      logged_in: false,
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem('jwt-token');
    if (!jwt) {
      this.setState({ logged_in: false });
    } else {
      this.setState({ logged_in: true });
    }
  }

  handleChange = () => {
    this.setState((prevState) => ({
      animation: !prevState.animation,
    }));
  };

  handleRegister = () => {
    this.setState((prevState) => ({
      showRegister: !prevState.showRegister,
    }));
  };
  handleLogin = () => {
    this.setState((prevState) => ({
      showLogin: !prevState.showLogin,
    }));

    if (this.state.showLogin === false) {
      const jwt = localStorage.getItem('jwt-token');
      if (!jwt) {
        this.setState({ logged_in: false });
      } else {
        this.setState({ logged_in: true });
      }
    }
  };
  handleLogout = () => {
    localStorage.removeItem('jwt-token');
    this.setState({ logged_in: false });
  };

  render() {
    const animation = { maxHeight: this.state.animation ? '410px' : '100px' };

    return (
      <>
        <div className='navbar_container'>
          <nav style={animation}>
            <ul className='menu'>
              <li className='logo'>
                <NavLink exact to='/'>
                  <img
                    className='logo_img'
                    src='/images/cover.png'
                    alt='Gyref background'
                  />
                </NavLink>
              </li>
              <li className='item '>
                <NavLink
                  exact
                  to='/'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#0088a9',
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className='item'>
                <NavLink
                  exact
                  to='/Workouts'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#0088a9',
                  }}
                >
                  Workouts
                </NavLink>
              </li>
              <li className='item'>
                <NavLink
                  to='/Exercises'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#0088a9',
                  }}
                >
                  Exercises
                </NavLink>
              </li>
              {this.state.logged_in === false ? (
                <>
                  <li className='item button' onClick={this.handleLogin}>
                    <NavLink to='#'>Login</NavLink>
                  </li>
                  <li
                    className='item button secondary'
                    onClick={this.handleRegister}
                  >
                    <NavLink to='#'>Sing Up</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className='item button'>
                    <NavLink to='/Profile'>Profile</NavLink>
                  </li>
                  <li
                    className='item button secondary'
                    onClick={this.handleLogout}
                  >
                    <NavLink to='/'>Log out</NavLink>
                  </li>
                </>
              )}

              <li className='toggle'>
                <input
                  onClick={this.handleChange}
                  type='checkbox'
                  className='toggler'
                />
                <span className='bars'></span>
              </li>
            </ul>
          </nav>
        </div>
        <Register
          show={this.state.showRegister}
          handleClose={this.handleRegister}
        />
        <Login show={this.state.showLogin} handleClose={this.handleLogin} />
      </>
    );
  }
}

export default Navbar;
