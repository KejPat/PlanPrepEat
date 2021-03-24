import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className={classes.Container}>
            <input 
                type="text" 
                className={classes.SearchBar}
                placeholder="Search Recipe"
                value={search}
                onChange={handleSearch} />
            {/* only search if there is something to search */}
           {search.length > 0 ?
            <Link to={"/search/" + search} style={{textDecoration: "none", color: "#444"}}>
                <button 
                    type="button" 
                    className={classes.Submit}>Search</button>
            </Link> : 
                <button 
                    type="button" 
                    className={classes.Submit}>Search</button>}
        </div>
    )
}

export default SearchBar;