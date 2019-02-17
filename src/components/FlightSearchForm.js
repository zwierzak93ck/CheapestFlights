import React from 'react';
import { Select, FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DateRangeOutlined from '@material-ui/icons/DateRangeOutlined'
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';


export const FlightSearchForm = (props) => {
  const currentDate = new Date();
  const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1))

  return (
    <div className="search-form-flex-container">
      <Card className="search-form-card">
        <CardContent className="card-content">

          <FormControl>
            <Select
              className="select"
              onChange={props.onAirportChange}
              displayEmpty
              input={
                <OutlinedInput
                  name="origin"
                  value={props.originAirport}
                  labelWidth={0}
                />
              }>

              <MenuItem disabled value="">From</MenuItem>
              {props.airports.map(option => (
                <MenuItem
                  key={option.iataCode}
                  value={option.iataCode}>
                  {option.name}
                </MenuItem>

              ))}
            </Select>
          </FormControl>

          <FormControl>
            <Select
              className="select"
              onChange={props.onAirportChange}
              displayEmpty
              input={
                <OutlinedInput
                  name="destination"
                  value={props.destinationAirport}
                  labelWidth={0}
                />
              }>

              <MenuItem disabled value="">To</MenuItem>
              {props.airports.map(option => (
                <MenuItem
                  key={option.iataCode}
                  value={option.iataCode}>
                  {option.name}
                </MenuItem>

              ))}
            </Select>
          </FormControl>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className="date-picker"
              value={props.dateFrom}
              onChange={props.onDateFromChange}
              format={'dd.MM.YYYY'}
              minDate={currentDate}
              maxDate={props.endDate ? props.endDate : nextYear}
              ampm="false"
              disableFuture={false}
              variant="outlined"
              emptyLabel="Date from"
              keyboardIcon={<DateRangeOutlined />}
              keyboard
              clearable
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              className="date-picker"
              value={props.dateTo}
              onChange={props.onDateToChange}
              format={'dd.MM.YYYY'}
              minDate={props.startDate ? props.startDate : currentDate}
              ampm="false"
              disableFuture={false}
              variant="outlined"
              emptyLabel="Date to"
              keyboardIcon={<DateRangeOutlined />}
              keyboard
              clearable
            />
          </MuiPickersUtilsProvider>

          <Button
            className="button"
            onClick={props.onSubmit}
            variant="outlined"
            color="default"
          >Search</Button>
          
        </CardContent>
      </Card>
    </div>
  )
}