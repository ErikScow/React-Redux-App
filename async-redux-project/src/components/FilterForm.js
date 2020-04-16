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
        <div>
            <form onSubmit={e=>e.preventDefault()}>
                <input 
                    type='text'
                    name='search'
                    value={searchInput}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default connect(null, { newSearch })(FilterForm)

