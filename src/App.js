import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import './App.css';
import Reacttable from './screens/Reacttable';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/reacttable" component={Reacttable}/>
        </div>
      </Router>
    );
  }
}

export default App;
