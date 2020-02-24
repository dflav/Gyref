import React, { Component } from 'react';
import {
  Exersices,
  MuscleTypes,
  EquipmentTypes,
  MechanicsTypes
} from '../constants/data';

class Exercises extends Component {
  state = {
    data: [],
    muscles: [],
    equipment: [],
    mechanics: [],
    menu: 'muscles'
  };

  componentDidMount() {
    this.setState({
      data: Exersices,
      muscles: MuscleTypes,
      equipment: EquipmentTypes,
      mechanics: MechanicsTypes
    });
  }

  handleClick = (menu) => this.setState({ menu });

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
            {this.state.data.length > 0 ? (
              this.state.menu === 'muscles' ? (
                <MuscleMenu muscleTypes={this.state.muscles} />
              ) : this.state.menu === 'equipment' ? (
                <EquipmentMenu equipmentTypes={this.state.equipment} />
              ) : this.state.menu === 'type' ? (
                <MechanicsMenu mechanicsTypes={this.state.mechanics} />
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
        <div key={index} className='img-container'>
          <img src={item.image} alt={`${item.name} category`} />
          <span>Exercises for {`${item.name}`}</span>
        </div>
      ))}
    </div>
  );
};

const EquipmentMenu = ({ equipmentTypes }) => {
  return (
    <div className='grid-container'>
      {equipmentTypes.map((item, index) => (
        <div key={index} className='img-container'>
          <img src={item.image} alt={`${item.name} category`} />
          <span>Exercises with {`${item.name}`}</span>
        </div>
      ))}
    </div>
  );
};

const MechanicsMenu = ({ mechanicsTypes }) => {
  return (
    <div className='grid-container'>
      {mechanicsTypes.map((item, index) => (
        <div key={index} className='img-container'>
          <img src={item.image} alt={`${item.name} category`} />
          <span>{`${item.name} exercises `}</span>
        </div>
      ))}
    </div>
  );
};

export default Exercises;
