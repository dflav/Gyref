import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      animation: false
    };
  }

  handleChange = () => {
    this.setState(prevState => {
      return { animation: !prevState.animation };
    });
  };
  render() {
    const animation = { maxHeight: this.state.animation ? '410px' : '100px' };

    return (
      <div className='navbar'>
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
              <NavLink to='/Login'>Login</NavLink>
            </li>
            <li className='item button secondary'>
              <NavLink to='/Sing-up'>Sing Up</NavLink>
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
      </div>
    );
  }
}

export default Navbar;
