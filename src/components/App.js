import React, { Component } from 'react';
import '../styles/css/main.min.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
      </>
    );
  }
}

export default App;