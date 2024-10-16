import React from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import "../Styles/SearchBar.css";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearch = (event:any) => {
        onSearch(event.target.value);
    }

    const clearInput = () => {
        const input = document.querySelector('.search-bar input') as HTMLInputElement;
        input.value = '';
        onSearch('');
    }

    const focusInput = () => {
        const input = document.querySelector('.search-bar input') as HTMLInputElement;
        input.focus();
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