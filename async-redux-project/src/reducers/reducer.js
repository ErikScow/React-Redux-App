import { FETCHING_DATA, 
    RECIEVED_DATA, 
    RECIEVED_ERROR,
    NEW_SEARCH } from '../actions/actions'

const initialState = {
    countriesData: [], 
    displayData: [],
    error: '',
    isFetching: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        //api call
        case FETCHING_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case RECIEVED_DATA:
            return {
                ...state,
                countriesData: action.payload,
                displayData: action.payload,
                isFetching: false,
                error: ''
            }
        case RECIEVED_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        //filter form
        case NEW_SEARCH:
            return {
                ...state,
                displayData: state.countriesData.filter(
                (item) => {
                    return (item.country.toLowerCase().includes(action.payload.toLowerCase()))
                })
            }
        default:
            return state
    }
}

export default reducer