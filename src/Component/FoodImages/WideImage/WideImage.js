import React from 'react';

import classes from './WideImage.module.css';

const WideImage = props => (
    <div className={classes.Container}>
        <img src={props.img} alt={props.alt} className={classes.Image}/>
        <div className={classes.Text}>
            <p>{props.name}</p>
        </div>
    </div>
)

export default WideImage;