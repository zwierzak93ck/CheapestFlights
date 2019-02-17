export const setAirports = (airports) => {
    return ({ type: 'SET_AIRPORTS', airports })
}

export const setFlights = (flights) => {
    return ({ type: 'SET_FLIGHTS', flights })
}

export const changeAirport = (airport, direction) => {
    return ({ type: 'CHANGE_AIRPORT', airport, direction })
}

export const changeDateFrom = (date) => {
    return ({ type: 'CHANGE_DATE_FROM', date })
}

export const changeDateTo = (date) => {
    return ({ type: 'CHANGE_DATE_TO', date })
}
