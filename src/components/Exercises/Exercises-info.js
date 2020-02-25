import React, { Component } from 'react';
import { exersices } from '../../constants/data';
import { MuscleMenu, EquipmentMenu, MechanicsMenu } from './Exercises-menu';

class Exercises extends Component {
  state = {
    data: [],
    menu: 'muscles',
    selectedType: ''
  };

  componentDidMount() {
    this.setState({
      data: exersices
    });
  }

  handleClick = (option) => this.setState({ option });

  render() {
    console.log(this.selectedType);
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
              <OptionsList
                isSelected={this.state.menu === 'muscles'}
                setExerciseType={() => this.handleClick('muscles')}
              >
                <span>Muscles</span>
              </OptionsList>
              <OptionsList
                isSelected={this.state.menu === 'equipment'}
                setExerciseType={() => this.handleClick('equipment')}
              >
                <span>Equipment</span>
              </OptionsList>
              <OptionsList
                isSelected={this.state.menu === 'type'}
                setExerciseType={() => this.handleClick('type')}
              >
                <span>Type</span>
              </OptionsList>
            </ul>
            <SelectedMenu
              selectedOption={this.state.menu}
              handleClick={this.handleClick}
            />
          </div>
        </section>
      </>
    );
  }
}

const SelectedMenu = ({ selectedOption, handleClick }) => {
  switch (selectedOption) {
    case 'muscles':
      return <MuscleMenu handleClick={handleClick} />;
    case 'equipment':
      return <EquipmentMenu handleClick={handleClick} />;
    case 'type':
      return <MechanicsMenu handleClick={handleClick} />;
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
