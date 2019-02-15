import React, { Component } from 'react';
import FlightSearchFormContainer from './containers/FlightSearchFormContainer';
import FlightResultsContainer from './containers/FlightResultsContainer';
import './stylesheets/rootStyles.scss'

class App extends Component {
  render() {
    return (
      <div>
        <FlightSearchFormContainer />
        <div className="results-flex-container">
        <FlightResultsContainer/>
        </div>
        </div>
    );
  }
}

export default App;
