import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { exercises } from '../../../../constants/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

const emptySet = {
  kg: '',
  reps: ''
};

class CreateLog extends Component {
  state = {
    description: '',
    duration: 0,
    date: new Date(),
    exercise: '',
    exercise_type: 'All',
    entries: [{ ...emptySet }]
  };

  changeSets = action => {
    const entriesCopy = [...this.state.entries];
    action === 'increment'
      ? entriesCopy.push({ ...emptySet })
      : entriesCopy.pop();

    this.setState({ entries: entriesCopy });
  };

  changeInput = (index, e) => {
    const entriesCopy = [...this.state.entries];
    const { value } = e.target;
    const key = e.target.getAttribute('name');

    entriesCopy[index][key] = value;
    this.setState({ entries: entriesCopy });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => this.setState({ date });

  onChangeExercise = event => this.setState({ exercise: event.target.value });

  onChangeExerciseType = event =>
    this.setState({
      exercise_type: event.target.value,
      exercise: ''
    });

  onSubmit = e => {
    e.preventDefault();
    const jwt = localStorage.getItem('jwt-token');

    const exercise = {
      exercise: this.state.exercise,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      sets: this.state.entries.length,
      entries: this.state.entries
    };
    axios
      .put('/api/user/logs/add', exercise, {
        headers: { 'Content-Type': 'application/json', 'auth-token': jwt }
      })
      .catch(err => console.log(err));

    window.location = '/Profile/My-Logs';
  };

  render() {
    const options = exercises.filter(
      item => item.main === this.state.exercise_type
    );

    const all = exercises.map((item, index) => (
      <option value={item.name} key={index}>
        {item.name}
      </option>
    ));

    const choosen = options.map((item, index) => (
      <option value={item.name} key={index}>
        {item.name}
      </option>
    ));

    return (
      <>
        <div>
          <h2>Create New Exercise Log</h2>
          <form onSubmit={this.onSubmit}>
            <FormControl style={{ width: '100%', marginBottom: '1.2em' }}>
              <InputLabel id='SelectExerciseType'>
                Select Exercise Type
              </InputLabel>
              <Select
                labelId='SelectExerciseType'
                value={this.state.exercise_type}
                onChange={this.onChangeExerciseType}
                fullWidth
                native
              >
                <option value='All'>All</option>
                <option value='Chest'>Chest</option>
                <option value='Shoulders'>Shoulders</option>
                <option value='Back'>Back</option>
                <option value='Favorites'>Favorites</option>
                <option value='Costum'>Costum</option>
              </Select>
            </FormControl>

            <FormControl required style={{ width: '100%' }}>
              <InputLabel id='SelectExercise'>Select Exercise</InputLabel>
              <Select
                labelId='SelectExercise'
                value={this.state.exercise}
                onChange={this.onChangeExercise}
                fullWidth
                native
              >
                <option aria-label='None' value='' />
                {this.state.exercise_type === 'All' ? all : choosen}
              </Select>
            </FormControl>

            <TextField
              margin='normal'
              id='Description'
              label='Description'
              type='text'
              name='description'
              fullWidth
              onChange={this.onChange}
            />
            <TextField
              margin='normal'
              id='Duration'
              label='Duration (in minutes)'
              type='text'
              name='duration'
              required
              fullWidth
              onChange={this.onChange}
            />
            <div className='date'>
              <label>Date: </label>
              <br />
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
              <br />
            </div>

            <div className='sets-form'>
              {this.state.entries.map(({ kg, reps }, i) => {
                return (
                  <div className='sets' key={i}>
                    <span>Set {i + 1} : </span>
                    <input
                      name='kg'
                      value={kg}
                      required
                      onChange={e => this.changeInput(i, e)}
                    />
                    <span> Kg </span>

                    <input
                      name='reps'
                      value={reps}
                      required
                      onChange={e => this.changeInput(i, e)}
                    />
                    <span> Reps </span>
                  </div>
                );
              })}
              <button
                type='button'
                onClick={() => this.changeSets('increment')}
              >
                (+) Set
              </button>
              <button
                type='button'
                onClick={() => this.changeSets('decrement')}
              >
                (-) Set
              </button>
            </div>

            <input type='submit' value='Create Log' className='submit-btn' />
          </form>
        </div>
      </>
    );
  }
}

export default CreateLog;
