import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import MyApp from './components/MyApp'


class App extends Component {
  render() {
    return (
      <Router>
        <MyApp />
      </Router>
    );
  }
}

export default App;
