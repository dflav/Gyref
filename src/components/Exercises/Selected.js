import React, { Component } from 'react';
import { exersices, menuTypes } from '../../constants/data';
class Selected extends Component {
  state = {
    data: [],
    selectedType: this.props.match.params.id
  };

  componentDidMount() {
    this.setState({ data: exersices });
  }

  render() {
    return (
      <>
        <div className='info'>
          <div>
            <SelectedMenu selectedType={this.state.selectedType} />
          </div>
        </div>
      </>
    );
  }
}

const SelectedMenu = ({ selectedType }) => {
  const option = menuTypes.filter((item) => {
    return item.name === selectedType;
  });

  switch (option[0].type) {
    case 'muscles':
      return (
        <>
          <h1>Exercises for {selectedType}</h1>
          <p>
            All {option[0].name} exercises with pictures and detailed
            instruction about every
          </p>
        </>
      );
    case 'equipment':
      return (
        <>
          <h1>Exercises with {selectedType}</h1>
          <p></p>
        </>
      );
    case 'type':
      return (
        <>
          <h1>{selectedType} exercises</h1>
          <p></p>
        </>
      );
    default:
  }
};

export default Selected;
