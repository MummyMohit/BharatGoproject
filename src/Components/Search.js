import React from 'react'
import './search.css'
import { useState } from 'react';
const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <>
            <div clasName="mt-4 mb-4" style={{ textAlign: 'center' }}>
                <p>Home</p>
                <input type="text" placeholder="Search a Product"
                    className='input-text-box'
                    value={query}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default Search