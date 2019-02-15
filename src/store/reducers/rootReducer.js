const initialState = {
    airports: null,
    flights: null,
    originAirport: '',
    destinationAirport: '',
    startDate: null,
    endDate: null
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE_AIRPORT':
            switch (action.direction) {
                case 'origin':
                    return {
                        ...state,
                        originAirport: action.airport
                    };

                case 'destination':
                    return {
                        ...state,
                        destinationAirport: action.airport
                    };
                default:
                    return state;
            }
        case 'CHANGE_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'CHANGE_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        case 'SET_AIRPORTS':
            return {
                ...state,
                airports: action.airports
            };
        case 'SET_FLIGHTS':
        return {
            ...state,
            flights: action.flights
        };
        default:
            return state;
    }
}

export default rootReducer;