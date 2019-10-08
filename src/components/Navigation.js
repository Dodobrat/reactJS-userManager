import React from 'react';
import NavigationLink from "./NavigationLink";
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        return(
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>User Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavigationLink goesTo={'/login'} linkName={'Login'} />
                        <NavigationLink goesTo={'/register'} linkName={'Register'}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
