import React from 'react';

import classes from './MenuIcon.module.css';

const MenuIcon = (props) => (
    // onClick of the hamburger menu change the state of the drop down
    <div className={classes.MenuIcon} onClick={props.dropDown}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default MenuIcon;