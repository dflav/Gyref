import React, { Component } from 'react';
import { menuTypes } from '../../constants/data';
import { ExerciseMenu } from './Menu';
import { Redirect } from 'react-router-dom';
class Selected extends Component {
  state = {
    selectedType: this.props.match.params.id,
    menu: 'All'
  };

  handleClick = (menu) => this.setState({ menu });

  render() {
    if (!menuTypes.hasOwnProperty(this.state.selectedType))
      return <Redirect to='/' />;
    const targetObj = menuTypes[this.state.selectedType].type;

    return (
      <>
        <div className='info'>
          <div>
            <h1>{this.state.selectedType} exercises</h1>
            <p>
              All {this.state.selectedType.toLowerCase()} exercises with
              pictures and detailed instructions for every step to help you
              improve your workout plan.Select an exercise or log in to add it
              to your workout.
            </p>
          </div>
        </div>

        <section className='types'>
          <div>
            <h2> {this.state.selectedType.toUpperCase()} EXERCISES</h2>
            <p>{menuTypes[this.state.selectedType].info}</p>

            {targetObj !== 'equipment' && (
              <OptionsMenu
                menu={this.state.menu}
                setExerciseType={this.handleClick}
              />
            )}
            <ExerciseMenu
              menu={this.state.menu}
              desiredType={this.state.selectedType}
              target={targetObj}
            />
          </div>
        </section>
      </>
    );
  }
}

const OptionsMenu = ({ menu, setExerciseType }) => {
  const types = [
    'All',
    'Dumbbell',
    'Barbell',
    'Machine',
    'Bench',
    'Body weight',
    'Pull Bar',
    'Cable',
    'Plate'
  ];

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

export default Selected;
