import React from 'react'
import FilterForm from './FilterForm'

const Header = () => {
    return (
        <div className='header'>
            <h1>Covid-19 Data</h1>
            <FilterForm />
        </div>
    )
}

export default Header