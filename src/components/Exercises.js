import React, { Component } from 'react';
import exersices from '../constants/data';
class Exercises extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      muscles: true,
      equipment: false,
      type: false
    };
  }

  componentDidMount() {
    this.setState({
      data: exersices
    });
  }

  handleClick = (props) => {
    if (props === 'muscles') {
      this.setState({
        muscles: true,
        equipment: false,
        type: false
      });
    } else if (props === 'equipment') {
      this.setState({
        muscles: false,
        equipment: true,
        type: false
      });
    } else {
      this.setState({
        muscles: false,
        equipment: false,
        type: true
      });
    }
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
                className={this.state.muscles ? 'show' : 'hide'}
                onClick={(e) => this.handleClick('muscles', e)}
              >
                <span>Muscles</span>
              </li>
              <li
                className={this.state.equipment ? 'show' : 'hide'}
                onClick={(e) => this.handleClick('equipment', e)}
              >
                <span>Equipment</span>
              </li>
              <li
                className={this.state.type ? 'show' : 'hide'}
                onClick={(e) => this.handleClick('type', e)}
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
