import { useDispatch } from "react-redux";
import { filterEmployees, setCurrentPage } from "../slices/employeesSlice";
import { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(filterEmployees(searchText));
        dispatch(setCurrentPage(1));
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }
    return (
        <div className={styles.searchBar}>
            <input 
                type="text"
                placeholder="Search Employees"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={handleKeyPress}
                className={styles.searchInput}
            />
            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;