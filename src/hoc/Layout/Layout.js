import React, {Component} from 'react';

import classes from './Layout.module.css';
import NavBar from '../../Component/Navigation/Navbar/NavBar';
import DropDown from '../../Component/Navigation/DropDown/DropDown';
import SearchBar from '../../Component/SearchBar/SearchBar';
import Aux from '../Auxiliry/Auxiliry';

// Contains layout to be used in all pages.
class Layout extends Component{
    state = {
        showDropDown: false
    }

    closeDropDownMenu = () => {
        this.setState({showDropDown: false});
    }

    // change the state of showDropDown if the menu icon is clicked
    dropDownMenuHandler = () => {
        this.setState((prevState) => {
            return {showDropDown: !prevState.showDropDown};
        });
    }

    render() {
        return (
            <Aux>
                <NavBar dropDownClicked={this.dropDownMenuHandler}/>
                <DropDown 
                    open={this.state.showDropDown}
                    close={this.closeDropDownMenu} />
                <SearchBar />
                <p className={classes.Title}>Plan. Prep. Eat.</p>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default Layout;