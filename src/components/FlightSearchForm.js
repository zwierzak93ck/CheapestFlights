import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Select, FormControlLabel, FormControl } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';

export const FlightSearchForm = (props) => {
  const  currentDate  = new Date();
  const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))

  return (
    <div className="search-form-flex-container">
      <Card className="search-form-card">
        <CardContent className="card-content">
      
          <FormControl>
            <Select
              label="From"
              className="select"
              input={
                <OutlinedInput

                  value={props.originAirport}
                  name="origin"
                  
                  labelWidth={0}
                />
              }
              onChange={props.onAirportChange}
            >
              {props.airports.map(option => (
                <MenuItem key={option.iataCode} value={option.iataCode}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <FormControl>
            <Select
             className="select"
                variant="outlined"
              onChange={props.onAirportChange}
            >
              {props.airports.map(option => (
                <MenuItem key={option.iataCode} value={option.iataCode}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <MuiPickersUtilsProvider utils={DateFnsUtils}> 
          <DatePicker
          
          className="date-picker"
            ampm={false}
            format={'dd.MM.YYYY'}
            disableFuture={false}
            value={props.startDate}
            onChange={props.onStartDateChange}
            minDate={currentDate}
            maxDate={props.endDate ? props.endDate : nextYear}
            variant="outlined"
          />
</MuiPickersUtilsProvider> 

           <MuiPickersUtilsProvider utils={DateFnsUtils}> 
          <DatePicker
          className="date-picker"
            ampm={false}
            format={'dd.MM.YYYY'}
            disableFuture={false}
            value={props.endDate}
            onChange={props.onEndDateChange}
            minDate={props.startDate ? props.startDate : currentDate}
            variant="outlined"
          />
</MuiPickersUtilsProvider>




          <Button variant="outlined" className="button" color="default" onClick={props.onSubmit}>Search</Button>
        </CardContent>
      </Card>
    </div>
  )
}