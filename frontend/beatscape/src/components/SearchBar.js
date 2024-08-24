import React from "react";
import { IoSearch } from "react-icons/io5";
import "./SearchBar.css";

function SearchBar({onSearch}) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    }

    const focusInput = () => {
        document.querySelector('.search-bar input').focus();
    }

    return (
        <div className='search-bar'>
            <div className="search-bar-container" onClick={focusInput}>
                <IoSearch className="search-icon"/>
                <input type='text' placeholder='Search anything...' onChange={handleSearch} />
            </div>
        </div>
    );
}

export default SearchBar;