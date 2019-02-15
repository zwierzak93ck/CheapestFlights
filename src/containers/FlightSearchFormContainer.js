import React, { Component } from 'react'
import axios from 'axios';
import { FlightSearchForm } from '../components/FlightSearchForm';
import { connect } from 'react-redux';
import { changeAirport, changeStartDate, changeEndDate, setAirports, setFlights} from '../store/actions/rootActions'

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
        console.log(e)
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
        changeAirport: (airport, direction) => { dispatch(changeAirport(airport, direction)) },
        changeStartDate: (date) => { dispatch(changeStartDate(date))},
        changeEndDate: (date) => { dispatch(changeEndDate(date))},
        setAirports: (airports) => { dispatch(setAirports(airports))},
        setFlights: (flights) => { dispatch(setFlights(flights))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearchFormContainer)