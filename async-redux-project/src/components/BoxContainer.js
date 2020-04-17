import React from 'react'
import { connect } from 'react-redux'

import CountryBox from './countryBox'

const BoxContainer = props => {
    console.log(props.countryData)

    const sortData = (data) => {
        return (
            (props.sortBy === 'highest-cases') ?
            data.sort((a,b) => b.cases.new - a.cases.new)
            :
            (props.sortBy === 'highest-new-cases') ?
            data.sort((a,b) => b.cases.new - a.cases.new)
            :
            (props.sortBy === 'highest-deaths') ?
            data.sort((a,b) => b.deaths.total - a.deaths.total)
            :
            (props.sortBy === 'highest-new-deaths') ?
            data.sort((a,b) => b.deaths.new - a.deaths.new)
            :
            data
        )
    }

    return (
        <div className='container'>
            {sortData(props.countryData).map((country, i) => {
                return <CountryBox key={i} country={country}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        countryData: state.displayData,
        sortBy: state.sortBy
    }
}

export default connect(mapStateToProps, {})(BoxContainer)