import React, { Component } from 'react';
import '../styles/css/main.min.css';
import Navbar from './Navbar';
import Exercises from './Exercises/Info';
import Workouts from './Workouts';

import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <header>
            <Navbar />
          </header>
          <Route path='/' exact component={Home} />
          <Route path='/Exercises' component={Exercises} />
          <Route path='/Workouts' component={Workouts} />
        </Router>
      </>
    );
  }
}

export default App;
