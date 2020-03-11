import React, { Component } from 'react';
import '../styles/css/main.min.css';
import Navbar from './Navbar';
import Exercises from './Exercises/Info';
import Workouts from './Workouts';
import Selected from './Exercises/Selected';
import Details from './Exercises/Details';

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
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Exercises' exact component={Exercises} />
            <Route path='/Exercises/:id' exact component={Selected} />
            <Route path='/Exercises/:ida/:idb' exact component={Details} />
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
