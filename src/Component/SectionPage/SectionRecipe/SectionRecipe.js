import React from 'react';
import {Link} from 'react-router-dom';

import classes from './SectionRecipe.module.css';

const SectionRecipe = (props) => {
    return (
        <div className={classes.Container}>
            <Link to={"/recipe/" + props.id} style={{textDecoration: "none", color: "#444"}}>
                <div className={classes.Crop}>
                    <img src={props.img} alt={props.alt} className={classes.Image}/>
                </div>
                <div>
                    <p className={classes.Name}>{props.name}</p>
                </div>
            </Link>
        </div>
    );
}

export default SectionRecipe;