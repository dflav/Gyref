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
    console.log(this.state.menu);
    return (
      <>
        <div className='info'>
          <div>
            <h1>{this.state.selectedType} exercises</h1>
            <p>
              All {this.state.selectedType.toLowerCase()} exercises with
              pictures and detailed instructions for every step to help you
              improve your workout plan.
            </p>
          </div>
        </div>

        <section className='types'>
          <div>
            <h4>{this.state.selectedType} exercises</h4>
            <p>info info info</p>

            {targetObj !== 'equipment' ? (
              <ul className='ex-nav'>
                <OptionsList
                  isSelected={this.state.menu === 'All'}
                  setExerciseType={() => this.handleClick('All')}
                >
                  <span>All</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Dumbell'}
                  setExerciseType={() => this.handleClick('Dumbell')}
                >
                  <span>Dumbell</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Barbell'}
                  setExerciseType={() => this.handleClick('Barbell')}
                >
                  <span>Barbell</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Machine'}
                  setExerciseType={() => this.handleClick('Machine')}
                >
                  <span>Machine</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Bench'}
                  setExerciseType={() => this.handleClick('Bench')}
                >
                  <span>Bench</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Body weigth'}
                  setExerciseType={() => this.handleClick('Body weigth')}
                >
                  <span>Body weight</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Pull Bar'}
                  setExerciseType={() => this.handleClick('Pull Bar')}
                >
                  <span>Pull Bar</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Cable'}
                  setExerciseType={() => this.handleClick('Cable')}
                >
                  <span>Cable</span>
                </OptionsList>
                <OptionsList
                  isSelected={this.state.menu === 'Plate'}
                  setExerciseType={() => this.handleClick('Plate')}
                >
                  <span>Plate</span>
                </OptionsList>
              </ul>
            ) : null}
            <ExerciseMenu
              desiredType={this.state.selectedType}
              target={targetObj}
            />
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

export default Selected;
