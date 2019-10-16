import React from 'react';
import {Layout, Menu} from 'antd';
import NavigationLink from "../partials/NavigationLink";

const {Header} = Layout;

class Navigation extends React.Component {
    render() {
        return (
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className='content-wrapper'>
                    <NavigationLink goesTo={'/login'}
                                    linkName={'Login'}
                                    customClass={'ant-menu-item'}/>
                    <NavigationLink goesTo={'/register'}
                                    linkName={'Register'}
                                    customClass={'ant-menu-item'}/>


                    {/*// WHEN LOGGED IN*/}

                </Menu>
            </Header>
        );
    }
}

export default Navigation;

