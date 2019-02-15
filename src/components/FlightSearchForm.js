import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const FlightSearchForm = (props) => {
    return (
        <div className="search-form-flex-container">
        <Card className="search-form-card">
          <CardContent>
          <TextField
          select
          label="From"
          name="origin"
          onChange={props.onAirportChange}
          value={props.originAirport}
          margin="normal"
        >
          {props.airports.map(option => (
            <MenuItem key={option.iataCode} value={option.iataCode}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="To"
          name="destination"
          onChange={props.onAirportChange}
          value={props.destinationAirport}
          margin="normal"
        >
          {props.airports.map(option => (
            <MenuItem key={option.iataCode} value={option.iataCode}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

<MuiPickersUtilsProvider utils={DateFnsUtils}> 
<div className="picker">
          <DateTimePicker
            ampm={false}
            format={'dd.MM.YYYY - HH:mm'}
            disableFuture={false}
            value={props.startDate}
            onChange={props.onStartDateChange}
            label="Start date"
          />
        </div>
</MuiPickersUtilsProvider>

<MuiPickersUtilsProvider utils={DateFnsUtils}> 
<div className="picker">
          <DateTimePicker
            ampm={false}
            format={'dd.MM.YYYY - HH:mm'}
            disableFuture={false}
            value={props.endDate}
            onChange={props.onEndDateChange}
            label="End date"
          />
        </div>
</MuiPickersUtilsProvider>
        

        <button onClick={props.onSubmit}>Check</button>
          </CardContent>
        </Card>
        </div>
    )
}