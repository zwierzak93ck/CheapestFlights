export const changeAirport = (airport, direction) => { 
   return ({type:'CHANGE_AIRPORT', airport, direction}) 
}

export const changeStartDate = (date) => { 
    return ({type: 'CHANGE_START_DATE', date})
}

export const changeEndDate = (date) => { 
    return ({type: 'CHANGE_END_DATE', date})
}

export const setAirports = (airports) => { 
    return ({type: 'SET_AIRPORTS', airports})
}

export const setFlights = (flights) => { 
    return ({type: 'SET_FLIGHTS', flights})
}