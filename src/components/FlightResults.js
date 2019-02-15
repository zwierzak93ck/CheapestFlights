import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../stylesheets/rootStyles.scss';

export const FlightResults = (props) =>
{
    const dateFrom = new Date(props.flight.dateFrom);
    console.log(dateFrom)
    const dateTo = new Date(props.flight.dateTo);
    return (
         
             <Card className="results-card">
                 <CardContent >

                     
                     <div>Price: {props.flight.price.toFixed(2)}{props.flight.currency}</div>
                     { (props.lowestPrice === props.flight.price) === true ? <div>Lowest Price!!!</div> : null }
                     <div><span>Date From: </span><span>{dateFrom.getMonth() + 1}/{dateFrom.getDate()}/{dateFrom.getFullYear()}</span></div>
                     <div>Date To: {dateTo.getMonth() + 1}/{dateTo.getDate()}/{dateTo.getFullYear()}  </div>
                 </CardContent>
             </Card>
        )
    
}