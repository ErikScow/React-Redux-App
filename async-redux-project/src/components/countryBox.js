import React from 'react'

const CountryBox = props => {
    return (
        <div>
            <div className='card-top'>
                <div className='card-top-left'>
                    <h3>{props.country.country}</h3>
                    <h4>Cases</h4>
                </div>
                <div className='car-top-right'>
                    <p className='total-cases'>{props.country.cases.total}</p>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-left'>
                    <p>New: {props.country.cases.new}</p>
                    <p>Active: {props.country.cases.active}</p>
                    <p>Critical: {props.country.cases.critical}</p>
                    <p>Recovered: {props.country.cases.recovered}</p>
                </div>
                <div className='card-bottom-right'>
                    <p>New Deaths: {props.country.deaths.new}</p>
                    <p>Total Deaths: {props.country.deaths.total}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryBox