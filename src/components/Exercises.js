import React, { Component } from 'react';
class Exercises extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

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
        <section></section>
      </>
    );
  }
}
export default Exercises;
