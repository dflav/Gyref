import React, { Component } from 'react';
import '../styles/css/main.min.css';
import Navbar from './Navbar';
import ChooseType from './Exercises/ChooseType';
import Workouts from './Workouts';
import ChooseExercise from './Exercises/ChooseExercise';
import ExerciseDetails from './Exercises/ExerciseDetails';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <Navbar />
          </header>
          <ScrollToTop />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Exercises' exact component={ChooseType} />
            <Route path='/Exercises/:id' exact component={ChooseExercise} />
            <Route
              path='/Exercises/:ida/:idb'
              exact
              component={ExerciseDetails}
            />
            <Route path='/Workouts' component={Workouts} />
            <Redirect from='/:id' to='/' />
          </Switch>
          <footer>
            <div>
              &copy; 2020 Copyright: <span>Flavio Dollani</span>
            </div>
          </footer>
        </Router>
      </>
    );
  }
}

export default App;
