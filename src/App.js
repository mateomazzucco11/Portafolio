import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Main />
      </Router>
    );
  }
}

export default App;
