import React from 'react';

import Aux from '../../../hoc/Auxiliry/Auxiliry';
import NavItems from '../NavItems/NavItems';
import Background from '../Background/Background';
import classes from './DropDown.module.css';

const DropDown = (props) => {
    // attach different classes depending on if drop down is open or closed to make it appear of disappear
    let attachedClasses = [classes.DropDown, classes.Close];

    if(props.open) {
        attachedClasses = [classes.DropDown, classes.Open];
    }

    // drop down menu for mobile devices
    return (
        <Aux>
            {/* pass with drop down is open or if background is clicked then close drop down */}
            <Background isOpen={props.open} closeDropDown={props.close} />
            <div className={attachedClasses.join(' ')}>
                <NavItems />
            </div> 
        </Aux>
    );
}

export default DropDown;