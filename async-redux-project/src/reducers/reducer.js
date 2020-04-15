import { FETCHING_DATA, 
    RECIEVED_DATA, 
    RECIEVED_ERROR } from '../actions/actions'

const initialState = {
    countriesData: [], 
    error: '',
    isFetching: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
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
                isFetching: false,
                error: ''
            }
        case RECIEVED_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer