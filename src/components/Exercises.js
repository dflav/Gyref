import React, { Component } from 'react';
import exersices from '../constants/data';
class Exercises extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      active: 'muscles'
    };
  }

  componentDidMount() {
    this.setState({
      data: exersices
    });
  }

  handleClickMuscles = () => {
    this.setState({
      active: ''
    });
  };

  handleClickEquipment = () => {
    this.setState({
      active: 'equipment'
    });
  };

  handleClickType = () => {
    this.setState({
      active: 'type'
    });
  };

  render() {
    return (
      <>
        <div className='info'>
          <div>
            <h1>Exercise database</h1>
            <p>
              Get information about any exercise in our database with pictures
              and detailed instructions for every step.Search exercises by type,
              body part or equipment.
            </p>
          </div>
        </div>
        <section className='types'>
          <div>
            <h4>CHOOSE AN EXERCISE TYPE</h4>
            <p>
              Learn about over a 100 exercises that exist in our database by
              choosing one category below.
            </p>

            <ul className='ex-nav'>
              <li
                className={this.state.active === 'muscles' ? 'show' : 'hide'}
                onClick={this.handleClickMuscles}
              >
                <span>Muscles</span>
              </li>
              <li
                className={this.state.active === 'equipment' ? 'show' : 'hide'}
                onClick={this.handleClickEquipment}
              >
                <span>Equipment</span>
              </li>
              <li
                className={this.state.active === 'type' ? 'show' : 'hide'}
                onClick={this.handleClickType}
              >
                <span>Type</span>
              </li>
            </ul>

            <div className='grid-container'></div>
          </div>
        </section>
      </>
    );
  }
}
export default Exercises;
