import React from 'react';
import {Link} from 'react-router-dom';

import classes from './SectionImage.module.css';

const SectionImage = props => (
    <div className={classes.Container}>
        <Link to={"/recipe/" + props.id} style={{textDecoration: "none", color: "#444"}}>
            <div className={classes.Crop}>
                <img src={props.img} alt={props.alt} className={classes.Image}/>
            </div>
            <div>
                <p className={classes.Name}>{props.name}</p>
                <p className={classes.Caption}>{props.caption}</p>
            </div>
        </Link>
    </div>
)

export default SectionImage;