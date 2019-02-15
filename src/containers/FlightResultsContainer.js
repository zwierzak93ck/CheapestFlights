import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlightResults } from '../components/FlightResults';

class FlightResultsContainers extends Component {
    
    render() {
        
        const prices = this.props.flights ? this.props.flights.map((flight) => flight.price) : null;
        return (
            this.props.flights ? 
            this.props.flights.map((flight) => <FlightResults key={flight.price} flight={flight} lowestPrice={Math.min(...prices)}/>) 
             : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights
    }
}

export default connect(mapStateToProps)(FlightResultsContainers)