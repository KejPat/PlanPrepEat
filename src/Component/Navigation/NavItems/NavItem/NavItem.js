import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavItem.module.css';

// Passed down from NavItems to make each item a link
const NavItem = (props) => (
        <ul className={classes.NavItem}>
            <li>
                <NavLink 
                    to={props.link}
                    exact={props.exact}
                    // if class is active then add active style
                    activeClassName={classes.active}>{props.children}</NavLink>
            </li>
        </ul>
);

export default NavItem;