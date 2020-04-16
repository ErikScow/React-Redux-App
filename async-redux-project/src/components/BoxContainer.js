import React from 'react'
import { connect } from 'react-redux'

import CountryBox from './countryBox'

const BoxContainer = props => {
    console.log(props.countryData)
    return (
        <div className='container'>
            {props.countryData.map((country, i) => {
                return <CountryBox key={i} country={country}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        countryData: state.displayData
    }
}

export default connect(mapStateToProps, {})(BoxContainer)