import React, { Component } from 'react';
import CreateLog from './CreateLog';
import LogsList from './LogsList';

class Logs extends Component {
  state = {
    tab: 0,
    label: 'view'
  };

  showPanel = (tab, label) => this.setState({ tab, label });

  render() {
    const isSelected = this.state.label === 'view';

    return (
      <>
        <div className='tab-container-logs'>
          <div className='button-container'>
            <button
              onClick={() => this.showPanel(0, 'view')}
              className={isSelected ? 'active' : null}
            >
              View Logs
            </button>
            <button
              onClick={() => this.showPanel(1, 'create')}
              className={isSelected ? null : 'active'}
            >
              Log Workout
            </button>
          </div>
          <div
            className='tab-panel'
            style={{
              display: `${this.state.tab === 0 ? 'block' : 'none'}`
            }}
          >
            <LogsList />
          </div>
          <div
            className='tab-panel'
            style={{
              display: `${this.state.tab === 1 ? 'block' : 'none'}`
            }}
          >
            <CreateLog />
          </div>
        </div>
      </>
    );
  }
}

export default Logs;
