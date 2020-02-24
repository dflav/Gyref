import React, { Component } from 'react';
import { exersices, types } from '../constants/data';

class Exercises extends Component {
  state = {
    data: [],
    muscleTypes: [],
    exerciseType: 'muscles'
  };

  componentDidMount() {
    this.setState({
      data: exersices,
      muscleTypes: types
    });
  }

  handleClick = (exerciseType) => this.setState({ exerciseType });

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
              <OptionsList
                isSelected={this.state.exerciseType === 'muscles'}
                setExerciseType={() => this.handleClick('muscles')}
              >
                <span>Muscles</span>
              </OptionsList>
              <OptionsList
                isSelected={this.state.exerciseType === 'equipment'}
                setExerciseType={() => this.handleClick('equipment')}
              >
                <span>Equipment</span>
              </OptionsList>
              <OptionsList
                isSelected={this.state.exerciseType === 'type'}
                setExerciseType={() => this.handleClick('type')}
              >
                <span>Type</span>
              </OptionsList>
            </ul>
            {this.state.data.length > 0 ? (
              this.state.exerciseType === 'muscles' ? (
                <MuscleMenu muscleTypes={this.state.muscleTypes} />
              ) : this.state.exerciseType === 'equipment' ? (
                <EquipmentMenu equipmentTypes={this.state.muscleTypes} />
              ) : this.state.exerciseType === 'muscles' ? (
                <MuscleMenu muscleTypes={this.state.muscleTypes} />
              ) : null
            ) : null}
          </div>
        </section>
      </>
    );
  }
}

const OptionsList = ({ isSelected, setExerciseType, children }) => {
  return (
    <li className={isSelected ? 'show' : 'hide'} onClick={setExerciseType}>
      {children}
    </li>
  );
};

const MuscleMenu = ({ muscleTypes }) => {
  return (
    <div className='grid-container'>
      {muscleTypes.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`${item.name} category`} />
        </div>
      ))}
    </div>
  );
};

const EquipmentMenu = ({ equipmentTypes }) => {
  return (
    <div className='grid-container'>
      {equipmentTypes.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`${item.name} category`} />
        </div>
      ))}
    </div>
  );
};

export default Exercises;
