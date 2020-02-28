import React, { Component } from 'react';
import { Menu } from './Menu';
import { Route } from 'react-router-dom';
import Selected from './Selected';

class Exercises extends Component {
  state = {
    menu: 'muscles'
  };

  handleClick = (menu) => this.setState({ menu });

  render() {
    return (
      <>
        <Route
          path='/Exercises'
          exact
          component={() => (
            <>
              <div className='info'>
                <div>
                  <h1>Exercise database</h1>
                  <p>
                    Get information about any exercise in our database with
                    pictures and detailed instructions for every step.Search
                    exercises by type, body part or equipment.
                  </p>
                </div>
              </div>
              <section className='types'>
                <div>
                  <h4>CHOOSE AN EXERCISE TYPE</h4>
                  <p>
                    Learn about over a 100 exercises that exist in our database
                    by choosing one category below.
                  </p>
                  <OptionsMenu
                    menu={this.state.menu}
                    setExerciseType={this.handleClick}
                  />
                  <Menu desiredType={this.state.menu} />
                </div>
              </section>
            </>
          )}
        />
        <Route path='/Exercises/:id' component={Selected} />
      </>
    );
  }
}

const OptionsMenu = ({ menu, setExerciseType }) => {
  const types = ['muscles', 'equipment', 'type'];

  return (
    <ul className='ex-nav'>
      {types.map((item, index) => (
        <OptionsList
          key={index}
          isSelected={menu === item}
          setExerciseType={() => setExerciseType(`${item}`)}
        >
          <span>{item}</span>
        </OptionsList>
      ))}
    </ul>
  );
};

const OptionsList = ({ isSelected, setExerciseType, children }) => {
  return (
    <li className={isSelected ? 'show' : 'hide'} onClick={setExerciseType}>
      {children}
    </li>
  );
};

export default Exercises;
