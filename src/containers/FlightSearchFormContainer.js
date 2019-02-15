import React, { Component } from 'react'
import axios from 'axios';
import { FlightSearchForm } from '../components/FlightSearchForm';
import { connect } from 'react-redux';

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

    changeStartDate = (e) => {
        this.props.changeStartDate(e);
    }

    changeEndDate = (e) => {
        this.props.changeEndDate(e);
    }

    search = () => {
        axios.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/' + 
                    this.props.originAirport + '/to/' + this.props.destinationAirport + '/' + 
                    this.props.startDate.getFullYear() + '-' + this.props.startDate.getMonth() + '-' + this.props.startDate.getDate() + '%20/' + 
                    this.props.endDate.getFullYear() + '-' + this.props.endDate.getMonth() + '-' + this.props.endDate.getDate()  + 
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
                    onAirportChange={this.changeAirport} 
                    onStartDateChange={this.changeStartDate}
                    onEndDateChange={this.changeEndDate}
                    onSubmit={this.search}
                    airports={this.props.airports} 
                    originAirport={this.props.originAirport} 
                    destinationAirport={this.props.destinationAirport}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}

                />
            </div> : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        originAirport: state.originAirport,
        destinationAirport: state.destinationAirport,
        startDate: state.startDate,
        endDate: state.endDate,
        airports: state.airports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAirport: (airport, direction) => { dispatch({type:'CHANGE_AIRPORT', airport, direction}) },
        changeStartDate: (date) => { dispatch({type: 'CHANGE_START_DATE', date})},
        changeEndDate: (date) => { dispatch({ type: 'CHANGE_END_DATE', date})},
        setAirports: (airports) => { dispatch({type: 'SET_AIRPORTS', airports}) },
        setFlights: (flights) => { dispatch({ type: 'SET_FLIGHTS', flights})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchFormContainer)