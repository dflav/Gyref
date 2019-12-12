import React, { Component } from 'react';

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
      <div className='navbar' /*style={{this.state.animation}}*/>
        <nav style={animation}>
          <ul className='menu'>
            <li className='logo'>
              <a href='#!'>
                <img
                  className='logo'
                  src='./images/cover.png'
                  alt='Gyref background'
                />
              </a>
            </li>
            <li className='item '>
              <a href='#!'>Home</a>
            </li>
            <li className='item'>
              <a href='#!'>Workouts</a>
            </li>
            <li className='item'>
              <a href='#!'>Exercises</a>
            </li>
            <li className='item button'>
              <a href='#!'>Login</a>
            </li>
            <li className='item button secondary'>
              <a href='#!'>Sing Up</a>
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
