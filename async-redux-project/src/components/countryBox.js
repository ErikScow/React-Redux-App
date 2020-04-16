import React from 'react'

const CountryBox = props => {
    return (
        <div className='card'>
            <div className='card-top'>
                <div className='card-top-left'>
                    <h3>{props.country.country}</h3>
                    <h4>Cases</h4>
                </div>
                <div className='card-top-right'>
                    <p className='total-cases'>{props.country.cases.total}</p>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-container'>
                    <p><span>New: </span><span>{props.country.cases.new}</span></p>
                    <p><span>Active: </span><span>{props.country.cases.active}</span></p>
                    <p><span>Critical: </span><span>{props.country.cases.critical}</span></p>
                    <p><span>Recovered: </span><span>{props.country.cases.recovered}</span></p>
                </div>
                <div className='card-bottom-container'>
                    <p><span>New Deaths: </span><span>{props.country.deaths.new}</span></p>
                    <p><span>Total Deaths: </span><span>{props.country.deaths.total}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CountryBox