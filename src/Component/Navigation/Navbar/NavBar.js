import React from 'react';

import classes from './NavBar.module.css';
import NavItems from '../NavItems/NavItems';
import MenuIcon from '../DropDown/MenuIcon/MenuIcon';

const NavBar = props => {
    return (
        <header className={classes.NavBar}>
            <p><a href="/">Plan. Prep. Eat. </a></p>
            {/* pass the state change of drop down to Layout.js */}
            <MenuIcon dropDown={props.dropDownClicked}/>
            <nav>
                <NavItems />
            </nav>
        </header>
    );
};

export default NavBar;