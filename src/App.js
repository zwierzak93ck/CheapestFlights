import React, { Component } from 'react';
import FlightSearchFormContainer from './containers/FlightSearchFormContainer';
import FlightResultsContainer from './containers/FlightResultsContainer';
import './stylesheets/rootStyles.scss'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title"><img src={logo} alt="logo" className="logo"></img> Flight Finder</h1>
        <FlightSearchFormContainer />
        <div className="results-flex-container">
        <FlightResultsContainer/>
        </div>
        </div>
    );
  }
}

export default App;
