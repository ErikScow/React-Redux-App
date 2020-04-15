import React from 'react'

import CountryBox from './countryBox'

const BoxContainer = props => {
    return (
        <div>
            {props.countryData.map((country, i) => {
                return <CountryBox key={i} country={country}/>
            })}
        </div>
    )
}

export default BoxContainer