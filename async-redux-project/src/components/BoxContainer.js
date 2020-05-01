import React from 'react'
import { connect } from 'react-redux'

import CountryBox from './countryBox'

const BoxContainer = ({ sortBy, countryData, fetchingData }) => {

    const sortData = (data) => {
        return (
            (sortBy === 'highest-cases') ?
            data.sort((a,b) => b.cases.new - a.cases.new)
            :
            (sortBy === 'highest-new-cases') ?
            data.sort((a,b) => b.cases.new - a.cases.new)
            :
            (sortBy === 'highest-deaths') ?
            data.sort((a,b) => b.deaths.total - a.deaths.total)
            :
            (sortBy === 'highest-new-deaths') ?
            data.sort((a,b) => b.deaths.new - a.deaths.new)
            :
            data
        )
    }

    if (fetchingData === true) {
        return <><div className='fetching'>Fetching Data</div></>
    } else {
        return (
            <div className='container'>
                {sortData(countryData).map((country, i) => {
                    return <CountryBox key={i} country={country}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        countryData: state.displayData,
        sortBy: state.sortBy,
        fetchingData: state.isFetching
    }
}

export default connect(mapStateToProps, {})(BoxContainer)