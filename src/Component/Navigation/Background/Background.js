import React from 'react';

import classes from './Background.module.css'

const Background = props => (
    // if drop down is open then add background and onClick handler otherwise pass null
    props.isOpen ? <div className={classes.Background} onClick={props.closeDropDown}></div> : null
)

export default Background;