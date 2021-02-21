import React from 'react';

import classes from './NavItems.module.css'
import NavItem from './NavItem/NavItem';

// List pages in nav bar
const NavItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/lunch" >Lunch</NavItem>
        <NavItem link="/dinner">Dinner</NavItem>
        <NavItem link="/weekprep">Week Prep</NavItem>
        <NavItem link="/newpost">New Post</NavItem>
    </ul>
);

export default NavItems;