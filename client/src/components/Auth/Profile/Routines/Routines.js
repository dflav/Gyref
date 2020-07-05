import React, { Component } from 'react';
import ViewWorkouts from './ViewWorkouts';
import ManageWorkouts from './ManageWorkouts';

class Routines extends Component {
  state = { tab: 0, label: 'view' };

  showPanel = (tab, label) => this.setState({ tab, label });

  render() {
    const isSelected = this.state.label === 'view';
    return (
      <>
        <div className='tab-container-routines'>
          <div className='button-container'>
            <button
              onClick={() => this.showPanel(0, 'view')}
              className={isSelected ? 'active' : null}
            >
              View Workouts
            </button>
            <button
              onClick={() => this.showPanel(1, 'create')}
              className={isSelected ? null : 'active'}
            >
              Manage Workouts
            </button>
          </div>
          <div
            className='tab-panel'
            style={{
              display: `${this.state.tab === 0 ? 'block' : 'none'}`
            }}
          >
            <ViewWorkouts />
          </div>
          <div
            className='tab-panel'
            style={{
              display: `${this.state.tab === 1 ? 'block' : 'none'}`
            }}
          >
            <ManageWorkouts />
          </div>
        </div>
      </>
    );
  }
}

export default Routines;
