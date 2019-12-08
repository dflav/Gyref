import React, { Component } from 'react';
import Humburger from './Humburger';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };
  }

  updateNav = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    return (
      <>
        <div className='navbar'>
          <img
            className='logo'
            src='./images/cover.png'
            alt='A person lifting weights'
          />
          <div className='menu-wrap'>
            <Humburger toggle={this.updateNav} />
          </div>
          <nav className={this.state.toggle ? 'on' : 'off'}>
            <ul className='nav-links'>
              <li>
                <a href='#!'>Home</a>
              </li>
              <li>
                <a href='#!'>Workouts</a>
              </li>
              <li>
                <a href='#!'>Exercises</a>
              </li>
            </ul>
          </nav>
          <a className='login-btn' href='#!'>
            <button>Login</button>
          </a>
        </div>
      </>
    );
  }
}

export default Navbar;
