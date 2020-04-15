import React from 'react'
import { connect } from 'react-redux'

import CountryBox from './countryBox'

const BoxContainer = props => {
    console.log(props.countryData)
    return (
        <div>
            {props.countryData.map((country, i) => {
                return <CountryBox key={i} country={country}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        countryData: state.countriesData
    }
}

export default connect(mapStateToProps, {})(BoxContainer)