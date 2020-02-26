import React, { Component } from 'react';
import { MuscleMenu, EquipmentMenu, MechanicsMenu } from './Menu';
import { Route } from 'react-router-dom';
import Selected from './Selected';

class Exercises extends Component {
  state = {
    menu: 'muscles'
  };

  handleClickMenu = (menu) => this.setState({ menu });

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

                  <ul className='ex-nav'>
                    <OptionsList
                      isSelected={this.state.menu === 'muscles'}
                      setExerciseType={() => this.handleClickMenu('muscles')}
                    >
                      <span>Muscles</span>
                    </OptionsList>
                    <OptionsList
                      isSelected={this.state.menu === 'equipment'}
                      setExerciseType={() => this.handleClickMenu('equipment')}
                    >
                      <span>Equipment</span>
                    </OptionsList>
                    <OptionsList
                      isSelected={this.state.menu === 'type'}
                      setExerciseType={() => this.handleClickMenu('type')}
                    >
                      <span>Type</span>
                    </OptionsList>
                  </ul>

                  <SelectedMenu selectedOption={this.state.menu} />
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

const SelectedMenu = ({ selectedOption }) => {
  switch (selectedOption) {
    case 'muscles':
      return <MuscleMenu />;
    case 'equipment':
      return <EquipmentMenu />;
    case 'type':
      return <MechanicsMenu />;
    default:
  }
};

const OptionsList = ({ isSelected, setExerciseType, children }) => {
  return (
    <li className={isSelected ? 'show' : 'hide'} onClick={setExerciseType}>
      {children}
    </li>
  );
};

export default Exercises;
