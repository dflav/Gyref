import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Register from './Auth/Register';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      animation: false,
      show: false
    };
  }

  handleChange = () => {
    this.setState(prevState => ({
      animation: !prevState.animation
    }));
  };

  handleRegister = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const animation = { maxHeight: this.state.animation ? '410px' : '100px' };

    return (
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
                  color: '#0088a9'
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
                  color: '#0088a9'
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
                  color: '#0088a9'
                }}
              >
                Exercises
              </NavLink>
            </li>
            <li className='item button'>
              <NavLink to='#'>Login</NavLink>
            </li>
            <li className='item button secondary' onClick={this.handleRegister}>
              <NavLink to='#'>Sing Up</NavLink>
            </li>
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
        {this.state.show ? (
          <Register show={this.state.show} handleClose={this.handleRegister} />
        ) : null}
      </div>
    );
  }
}

export default Navbar;
