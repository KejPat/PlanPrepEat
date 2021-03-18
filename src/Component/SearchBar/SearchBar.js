import React, {useState} from 'react';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const searchRecipe = () => {
        console.log(search);
    }

    return (
        <div className={classes.Container}>
            <input 
                type="text" 
                className={classes.SearchBar}
                placeholder="Search Recipe"
                value={search}
                onChange={handleSearch} />
            <button 
                type="button" 
                className={classes.Submit}
                onClick={searchRecipe}>Search</button>
        </div>
    )
}

export default SearchBar;