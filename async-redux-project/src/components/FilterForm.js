import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { newSearch, switchSort } from '../actions/actions'

const FilterForm = ({ newSearch, switchSort }) => {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        newSearch(searchInput)
    }, [searchInput, newSearch])

    const handleClick = e => {
        switchSort(e.target.value)
    }

    return (
            <form onSubmit={e=>e.preventDefault()}>

                <input 
                    type='text'
                    name='search'
                    placeholder='Search Countries'
                    value={searchInput}
                    onChange={handleChange}
                />

                <div className='radio-input'>
                    <p className='radio-input-label'>Sort By:</p>
                    <div>
                        <input 
                            type='radio'
                            id='highest-cases'
                            name='sort-method'
                            value='highest-cases'
                            onClick={handleClick}
                            
                        />
                        <label htmlFor='highest-cases'>Highest Cases</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-new-cases'
                            name='sort-method'
                            value='highest-new-cases'
                            onClick={handleClick}
                        />
                        <label htmlFor='highest-new-cases'>Highest New Cases</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-deaths'
                            name='sort-method'
                            value='highest-deaths'
                            onClick={handleClick}
                        />
                        <label htmlFor='highest-deaths'>Highest Deaths</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-new-deaths'
                            name='sort-method'
                            value='highest-new-deaths'
                            onClick={handleClick}
                        />
                        <label htmlFor='highest-new-deaths'>Highest New Deaths</label>
                    </div>
                </div>
            </form>
    )
}

export default connect(null, { newSearch, switchSort })(FilterForm)

