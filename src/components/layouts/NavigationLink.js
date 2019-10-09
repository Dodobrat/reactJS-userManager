import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goesTo : this.props.goesTo,
            linkName: this.props.linkName
        }
    }

    render(){
        return(
            <NavLink to={this.state.goesTo}
                     className="nav-link"
                     activeClassName="active">{this.state.linkName}
            </NavLink>
        );
    }
}

export default NavigationLink;
