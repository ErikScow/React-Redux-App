import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { newSearch } from '../actions/actions'

const FilterForm = props => {

    const [searchInput, setSearchInput] = useState('')

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        props.newSearch(searchInput)
    }, [searchInput])

    return (
            <form onSubmit={e=>e.preventDefault()}>

                <input 
                    type='text'
                    name='search'
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
                        />
                        <label htmlFor='highest-cases'>Highest Cases</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-new-cases'
                            name='sort-method'
                        />
                        <label htmlFor='highest-new-cases'>Highest New Cases</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-deaths'
                            name='sort-method'
                        />
                        <label htmlFor='highest-deaths'>Highest Deaths</label>
                    </div>
                    <div>
                        <input 
                            type='radio'
                            id='highest-new-deaths'
                            name='sort-method'
                        />
                        <label htmlFor='highest-new-deaths'>Highest New Deaths</label>
                    </div>
                </div>
            </form>
    )
}

export default connect(null, { newSearch })(FilterForm)

