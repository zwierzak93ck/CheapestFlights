import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../stylesheets/rootStyles.scss';
import Button from '@material-ui/core/Button';


export const FlightResults = (props) =>
{

    return (
         
             <Card className="results-card">
                 <CardContent >
                     {/* <div>Price: {props.price.toFixed(2)}{props.currency}</div>
                     { (props.lowestPrice === props.price) ? <div>Lowest Price!!!</div> : <div>&nbsp;</div> }
                     <div><span>Date From: </span><span>{props.dateFrom}</span></div>
                     <div><span>Date To: </span><span>{props.dateTo}</span></div> */}
                     <table>
                         <tbody>
                         <tr>
                             <th>Price: {props.price.toFixed(2)}{props.currency}</th>
                         </tr>
                         <tr>
                             
                                
                         { (props.lowestPrice === props.price) ? 
                            <td className="label">Lowest Price!!!</td> : <td>&nbsp;</td>
                        }
                             
                         </tr>
                         <tr>
                             <td className="label">
                             Date From: 
                             </td>
                             <td className="value">
                             {props.dateFrom}
                             </td>
                         </tr>
                        <tr>
                            <td className="label">
                            Date To: 
                            </td>
                            <td className="value">
                            {props.dateTo}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                            
                            <Button variant="outlined" className="button" color="default">Go somewhere</Button>
                            </td>
                            
                        </tr>
                        </tbody>
                     </table>
                 </CardContent>
             </Card>
        )
    
}