import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goesTo : this.props.goesTo,
            linkName: this.props.linkName,
            customClass: this.props.customClass
        }
    }

    render(){
        return(
            <NavLink to={this.state.goesTo}
                     className={this.state.customClass}
                     activeClassName="ant-menu-item-selected">
                {this.state.linkName}
            </NavLink>
        );
    }
}

export default NavigationLink;
