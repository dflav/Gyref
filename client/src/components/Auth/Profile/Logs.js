import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { exercises } from '../../../constants/data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Logs extends Component {
  state = {
    tab: 0,
    label: 'view',
    description: '',
    duration: 0,
    date: new Date(),
    exercise: '',
    exercise_type: 'All',
    sets: 3,
    kg: [],
    reps: []
  };
  // componentDidMount() {
  //   axios.get('/users').then(res => {
  //     if (res.data.length > 0) {
  //       this.setState({
  //         users: res.data.map(user => user.name),
  //         name: res.data[0].name
  //       });
  //     }
  //   });
  // }
  showPanel = (tab, label) => this.setState({ tab, label });

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeDate = date => this.setState({ date });

  onChangeSets = sets => this.setState({});

  onChangeExercise = event => this.setState({ exercise: event.target.value });

  onChangeExerciseType = event =>
    this.setState({
      exercise_type: event.target.value,
      exercise: ''
    });

  onSubmit = e => {
    e.preventDefault();
    const exercise = {
      name: this.state.exercise,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      sets: this.state.sets,
      reps: this.stae.reps
    };

    console.log(exercise);
    // axios.post('/exercises/add', exercise).then(res => console.log(res.data));
    // window.location = '/';
  };

  addSet = () => {
    this.setState(prevState => ({
      sets: prevState.sets + 1
    }));
  };
  removeSet = () => {
    this.setState(prevState => ({
      sets: prevState.sets - 1
    }));
  };

  render() {
    const isSelected = this.state.label === 'view';

    const options = exercises.filter(
      item => item.main === this.state.exercise_type
    );

    const all = exercises.map((item, index) => (
      <MenuItem value={item.name} key={index}>
        {item.name}
      </MenuItem>
    ));

    const choosen = options.map((item, index) => (
      <MenuItem value={item.name} key={index}>
        {item.name}
      </MenuItem>
    ));

    const sets = [];

    for (let i = 0; i < this.state.sets; i++) {
      sets.push(
        <div className='sets' key={i}>
          <label>Set {i + 1} : </label>
          <input required type='text' name='kg' onChange={this.onChangeSets} />
          <label> Kg </label>
          <input
            required
            type='text'
            name='reps'
            onChange={this.onChangeSets}
          />
          <label> Reps</label>
          <br />
        </div>
      );
    }

    return (
      <>
        <div className='tab-container'>
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
          ></div>
          <div
            className='tab-panel'
            style={{
              display: `${this.state.tab === 1 ? 'block' : 'none'}`
            }}
          >
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
                  >
                    <MenuItem value='' disabled>
                      Select Exercise Type
                    </MenuItem>
                    <MenuItem value='All'>All</MenuItem>
                    <MenuItem value='Chest'>Chest</MenuItem>
                    <MenuItem value='Shoulders'>Shoulders</MenuItem>
                    <MenuItem value='Back'>Back</MenuItem>
                    <MenuItem value='Favorites'>Favorites</MenuItem>
                    <MenuItem value='Costum'>Costum</MenuItem>
                  </Select>
                </FormControl>

                <FormControl required style={{ width: '100%' }}>
                  <InputLabel id='SelectExercise'>Select Exercise</InputLabel>
                  <Select
                    labelId='SelectExercise'
                    value={this.state.exercise}
                    onChange={this.onChangeExercise}
                    fullWidth
                  >
                    <MenuItem value='' disabled>
                      Select Exercise
                    </MenuItem>
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
                  {sets}
                  <button type='button' onClick={this.addSet}>
                    (+) Set
                  </button>
                  <button type='button' onClick={this.removeSet}>
                    (-) Set
                  </button>
                </div>

                <input
                  type='submit'
                  value='Create Log'
                  className='submit-btn'
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Logs;
