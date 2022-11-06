import React from "react";
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
        return(
            <div className="searchBox">
            <input 
            className="searchInput" 
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            />
            </div>
        ); 
}

export default SearchBox