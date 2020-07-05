import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { exercises } from '../../../../constants/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

export default class ManageWorkouts extends Component {
  state = {
    name: '',
    frequency: '',
    type: '',
    description: '',
    days: [[{}]]
  };

  render() {
    return (
      <div>
        <h2>Create New Workout</h2>
        <form onSubmit={this.onSubmit}>
          <TextField
            margin='normal'
            id='Workout_name'
            label='Workout Name'
            type='text'
            name='WorkoutName'
            required
            fullWidth
            onChange={this.onChange}
          />
          <FormControl required style={{ width: '100%' }}>
            <InputLabel id='Frequency'>Frequency</InputLabel>
            <Select
              labelId='Frequency'
              value={this.state.frequency}
              onChange={this.onChangeFrequency}
              fullWidth
              native
            >
              <option aria-label='None' value='' />
              <option value='1 day / week'>1 day / week</option>
              <option value='2 days / week'>2 days / week</option>
              <option value='3 days / week'>3 days / week</option>
              <option value='4 days / week'>4 days / week</option>
              <option value='5 days / week'>5 days / week</option>
              <option value='6 days / week'>6 days / week</option>
              <option value='7 days / week'>7 days / week</option>
            </Select>
          </FormControl>
          <FormControl required style={{ width: '100%' }}>
            <InputLabel id='Type'>Type</InputLabel>
            <Select
              labelId='Type'
              value={this.state.type}
              onChange={this.onChangeWorkoutType}
              fullWidth
              native
            >
              <option aria-label='None' value='' />
              <option value='General Fitness'>General Fitness</option>
              <option value='Bulking - Gain Muscle'>
                Bulking - Gain Muscle
              </option>
              <option value='Cutting - Lose Fat'>Cutting - Lose Fat</option>
              <option value='Strength'>Strength</option>
            </Select>
          </FormControl>
          <TextField
            margin='normal'
            id='Description'
            label='Description'
            type='text'
            name='duration'
            multiline={true}
            fullWidth
            onChange={this.onChange}
          />

          <input type='submit' value='Create Workout' className='submit-btn' />
        </form>
      </div>
    );
  }
}
