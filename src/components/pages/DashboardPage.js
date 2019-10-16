import React from "react";
import {Layout, Menu, Icon} from 'antd';

const {Content, Sider} = Layout;

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // collapsed: false,
        }
    }

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // };

    render() {
        return (
            <div className="content-wrapper">
                <Layout style={{background: '#fff', margin: '1rem 0'}}>
                    <Sider breakpoint="lg"
                           collapsedWidth="0">
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '1rem 2.5rem', minHeight: 320}}>
                        Content
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default DashboardPage;
