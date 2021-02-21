import React from 'react';
import {Link} from 'react-router-dom';

import classes from './RecentlyAddedImage.module.css';

const RecentlyAddedImage = props => (
    <div className={classes.Container}>
        <Link to={"/recipe/" + props.id}>
            <img src={props.img} alt={props.alt} className={classes.Image}/>
            <div className={classes.Text}>
                <p>{props.name}</p>
            </div>  
        </Link>
    </div>
)

export default RecentlyAddedImage;