import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { setAirports, setFlights, changeAirport, changeDateFrom, changeDateTo } from '../store/actions/rootActions'
import { FlightSearchForm } from '../components/FlightSearchForm';

class FlightSearchFormContainer extends Component {

    componentDidMount() {
        axios.get('https://murmuring-ocean-10826.HEROkuapp.com/en/api/2/forms/flight-booking-selector/')
            .then((result) => {
                this.props.setAirports(result.data.airports);
            });
    }

    changeAirport = (e) => {
        this.props.changeAirport(e.target.value, e.target.name);
    }

    changeDateFrom = (e) => {
        this.props.changeDateFrom(e);
    }

    changeDateTo = (e) => {
        this.props.changeDateTo(e);
    }

    search = () => {
        axios.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/' +
            this.props.originAirport + '/to/' + this.props.destinationAirport + '/' +
            this.props.dateFrom.getFullYear() + '-' + (this.props.dateFrom.getMonth() + 1) + '-' + this.props.dateFrom.getDate() + '%20/' +
            this.props.dateTo.getFullYear() + '-' + (this.props.dateTo.getMonth() + 1) + '-' + this.props.dateTo.getDate() +
            '/250/unique/?limit=15&amp;offset-0')
            .then((result) => {
                const flightsSortedByPrice = result.data.flights.sort((a, b) => {
                    return a.price - b.price
                });
                this.props.setFlights(flightsSortedByPrice);
            });
    }

    render() {
        return (
            this.props.airports ?
                <div>
                    <FlightSearchForm
                        key={new Date()}
                        airports={this.props.airports}
                        originAirport={this.props.originAirport}
                        destinationAirport={this.props.destinationAirport}
                        dateFrom={this.props.dateFrom}
                        dateTo={this.props.dateTo}
                        onAirportChange={this.changeAirport}
                        onDateFromChange={this.changeDateFrom}
                        onDateToChange={this.changeDateTo}
                        onSubmit={this.search}
                    />
                </div> : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        airports: state.airports,
        originAirport: state.originAirport,
        destinationAirport: state.destinationAirport,
        dateFrom: state.dateFrom,
        dateTo: state.dateTo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAirports: (airports) => { dispatch(setAirports(airports)) },
        setFlights: (flights) => { dispatch(setFlights(flights)) },
        changeAirport: (airport, direction) => { dispatch(changeAirport(airport, direction)) },
        changeDateFrom: (date) => { dispatch(changeDateFrom(date)) },
        changeDateTo: (date) => { dispatch(changeDateTo(date)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchFormContainer)