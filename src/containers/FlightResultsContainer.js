import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlightResults } from '../components/FlightResults';

class FlightResultsContainers extends Component {

    setDate = (date) => {
        const day = (date.getDate() + 1) < 10 ? '0' + date.getDate() : date.getDate();
        const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        const year = date.getFullYear();

        return month + '/' + day + '/' + year;
    }

    render() {
        const prices = this.props.flights ? this.props.flights.map((flight) => flight.price) : null;
        return (
            this.props.flights ?
                this.props.flights.map((flight) =>
                    <FlightResults
                        key={flight.price}
                        dateFrom={this.setDate(new Date(flight.dateFrom))}
                        dateTo={this.setDate(new Date(flight.dateTo))}
                        price={flight.price}
                        currency={flight.currency}
                        lowestPrice={Math.min(...prices)}
                    />) : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state.flights
    }
}

export default connect(mapStateToProps)(FlightResultsContainers)