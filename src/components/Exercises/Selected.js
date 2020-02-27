import React, { Component } from 'react';
import { menuTypes } from '../../constants/data';
import { ExerciseMenu } from './Menu';
import { Redirect, Link } from 'react-router-dom';
class Selected extends Component {
  state = {
    selectedType: this.props.match.params.id
  };

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
              improve your workout plan.
            </p>
          </div>
        </div>

        <section className='types'>
          <div>
            <h4>{this.state.selectedType} exercises</h4>
            <p>info</p>
            <ul className='ex-nav'>
              <li className='hide'>
                <span>All</span>
              </li>
              <li className='hide'>
                <span>Barbell</span>
              </li>
              <li className='hide'>
                <span>Body weight</span>
              </li>
            </ul>
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

export default Selected;
