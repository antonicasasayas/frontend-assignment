import React from 'react'
import "./SearchBar.css"
export default function SearchBar({query, handleChange}) {
    return (
        <div id="input-container">
            <img  src="/search.png" alt="search" />
            <input value={query} onChange={(e) => handleChange(e)} type="text" placeholder="Search for a movie" />
        </div>
    )
}
