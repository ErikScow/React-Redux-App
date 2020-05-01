import React from 'react'

const CountryBox = props => {
    
    const commafyNum = num => {
        if (num === null){
            return null
        } else {
            return num.toLocaleString()
        }
    }

    return (
        <div className='card'>
            <h3>{props.country.country}</h3>
            <div className='card-top'>
                
                <div className='card-top-left'>
                    
                    <h4>Cases</h4>
                </div>
                <div className='card-top-right'>
                    <p className='total-cases'>{commafyNum(props.country.cases.total)}</p>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-container'>
                    <p><span>New: </span><span className='red'>{commafyNum(props.country.cases.new)}</span></p>
                    <p><span>Active: </span><span>{commafyNum(props.country.cases.active)}</span></p>
                    <p><span>Critical: </span><span>{commafyNum(props.country.cases.critical)}</span></p>
                    <p><span>Recovered: </span><span>{commafyNum(props.country.cases.recovered)}</span></p>
                </div>
                <div className='card-bottom-container'>
                    <p><span>New Deaths: </span><span className='red'>{commafyNum(props.country.deaths.new)}</span></p>
                    <p><span>Total Deaths: </span><span >{commafyNum(props.country.deaths.total)}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CountryBox