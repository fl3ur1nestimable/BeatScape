import React from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import "./SearchBar.css";

function SearchBar({onSearch}) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    }

    const clearInput = () => {
        document.querySelector('.search-bar input').value = '';
        onSearch('');
    }

    const focusInput = () => {
        document.querySelector('.search-bar input').focus();
    }

    return (
        <div className='search-bar'>
            <div className="search-bar-container" onClick={focusInput}>
                <IoSearch className="search-icon"/>
                <input className="search-input" type='text' placeholder='Search anything...' onChange={handleSearch} />
                <button className="clear-input" onClick={clearInput}>
                    <IoClose />
                </button>
            </div>
        </div>
    );
}

export default SearchBar;