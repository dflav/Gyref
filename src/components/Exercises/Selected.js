import React, { Component } from 'react';
import { exersices } from '../../constants/data';
class Selected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: exersices });
  }

  render() {
    return (
      <>
        <div className='info'>
          <div>
            <SelectedMenu
              selectedOption={this.props.menu}
              selectedType={this.props.selectedType}
            />
          </div>
        </div>
      </>
    );
  }
}

const SelectedMenu = ({ selectedOption, selectedType }) => {
  switch (selectedOption) {
    case 'muscles':
      return (
        <>
          <h1>Exercises for {selectedType}</h1>
          <p></p>
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
