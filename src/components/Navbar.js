import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      animation: false
    };
  }

  handleChange = () => {
    this.setState((prevState) => {
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
              <Link to='/'>
                <img
                  className='logo_img'
                  src='./images/cover.png'
                  alt='Gyref background'
                />
              </Link>
            </li>
            <li className='item '>
              <Link to='/'>Home</Link>
            </li>
            <li className='item'>
              <Link to='/Workouts'>Workouts</Link>
            </li>
            <li className='item'>
              <Link to='/Exercises'>Exercises</Link>
            </li>
            <li className='item button'>
              <Link to='/Login'>Login</Link>
            </li>
            <li className='item button secondary'>
              <Link to='/Sing-up'>Sing Up</Link>
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
