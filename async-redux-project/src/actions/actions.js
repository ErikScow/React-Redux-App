import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const RECIEVED_DATA = 'RECIEVED_DATA'
export const RECIEVED_ERROR = 'RECIEVED_ERROR'

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
    axios.get(`https://covid-193.p.rapidapi.com/statistics`, {headers:{ 'x-rapidapi-key': '550ce095ccmsh02ac6d8b51d4815p1f7e0ejsnfa32ead51e67'}})
        .then(res => dispatch({ type: RECIEVED_DATA, payload: res.data.response}))
        .catch(err => dispatch({ type: RECIEVED_ERROR, payload: err}))
}

export const NEW_SEARCH = 'NEW_SEARCH'

export const newSearch = term => {
    return {
        type: NEW_SEARCH,
        payload: term
    }
}

export const SWITCH_SORT = 'SWITCH_SORT'

export const switchSort = value => {
    return {
        type: SWITCH_SORT,
        payload: value
    }
}