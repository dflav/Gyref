import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <img className='logo' src='./images/cover.png' />
        <nav>
          <ul className='nav-links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Workouts</a>
            </li>
            <li>
              <a href='#'>Exercises</a>
            </li>
          </ul>
        </nav>
        <a className='login-btn' href='#'>
          <button>Login</button>
        </a>
      </div>
    );
  }
}

export default Navbar;
