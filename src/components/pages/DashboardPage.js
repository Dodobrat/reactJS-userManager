import React from "react";
import {Layout, Icon, Avatar, Divider, Typography, Table, Button} from 'antd';
import NavigationLink from "../partials/NavigationLink";

const {Content, Sider} = Layout;
const {Paragraph} = Typography;


class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                },
                {
                    title: 'Attempt Date',
                    dataIndex: 'attempt_date',
                },
                {
                    title: 'Succeeded',
                    dataIndex: 'succeeded',
                },
                {
                    title: 'IP',
                    dataIndex: 'ip',
                },
                {
                    title: 'Logged In',
                    dataIndex: 'time_of_login',
                },
                {
                    title: 'Logged Out',
                    dataIndex: 'time_of_logout',
                },
                {
                    title: 'Device',
                    dataIndex: 'device',
                },
            ],

            data: [
                {
                    key: 1,
                    id: 1,
                    attempt_date: '28 Jul 2019 12:05:48',
                    succeeded: 'No',
                    ip: '192.168.0.1',
                    time_of_login: '-',
                    time_of_logout: '28 Jul 2019 12:05:49',
                    device: 'iPhone 6',
                },{
                    key: 2,
                    id: 2,
                    attempt_date: '28 Jul 2019 12:05:48',
                    succeeded: 'No',
                    ip: '192.168.0.1',
                    time_of_login: '-',
                    time_of_logout: '28 Jul 2019 12:05:49',
                    device: 'iPhone 6',
                },{
                    key: 3,
                    id: 3,
                    attempt_date: '28 Jul 2019 12:05:48',
                    succeeded: 'No',
                    ip: '192.168.0.1',
                    time_of_login: '-',
                    time_of_logout: '28 Jul 2019 12:05:49',
                    device: 'iPhone 6',
                },{
                    key: 4,
                    id: 4,
                    attempt_date: '28 Jul 2019 12:05:48',
                    succeeded: 'No',
                    ip: '192.168.0.1',
                    time_of_login: '-',
                    time_of_logout: '28 Jul 2019 12:05:49',
                    device: 'iPhone 6',
                },
            ]
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <Layout style={{background: '#fff', margin: '1rem 0'}}>
                    <Sider breakpoint="lg"
                           theme="light"
                           collapsedWidth="0"
                           style={{borderRight: '1px solid rgba(0,0,0,0.075)'}}>
                        <div className="user-info">
                            <Avatar size={'large'} icon="user" className='user-info-pic'/>
                            <div className="user-info-details">
                                <p className="user-info-details-name">Deyan Bozhilov</p>
                                <p className="user-info-details-username">Dodobrat</p>
                            </div>
                        </div>
                        <div className="user-extra-info">
                            <p className="user-extra-info-text">Born: <span className="highlighted">15 Jan 1998</span></p>
                            <p className="user-extra-info-text">From: <span className="highlighted">Bulgaria</span></p>
                            <p className="user-extra-info-text">E-mail: <span className="highlighted">dodobrat@abv.bg</span></p>
                        </div>
                        <div style={{padding: '1rem'}}>
                            <Button block>
                                <Icon type="edit" /> <NavigationLink goesTo={'/edit'} linkName={'Edit Profile'} customClass={'muted'}/>
                            </Button>
                            <Button block style={{margin: '0.5rem 0'}}>
                                <Icon type="poweroff" /> <NavigationLink goesTo={'/logout'} linkName={'Logout'} customClass={'muted'}/>
                            </Button>
                        </div>
                    </Sider>
                    <Content style={{padding: '1rem 2.5rem', minHeight: 320}}>
                        <Divider orientation="left">
                            <Icon type="user"/> About Me
                        </Divider>

                        <Paragraph ellipsis={{rows: 3, expandable: true}}>
                            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design, a design language for background applications, is refined by Ant UED Team. Ant
                            Design,
                            a design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design language for background applications, is refined by Ant UED Team. Ant Design, a
                            design
                            language for background applications, is refined by Ant UED Team. Ant Design, a design
                            language for background applications, is refined by Ant UED Team.
                        </Paragraph>

                        <Divider orientation="left">
                            <Icon type="info-circle"/> Activity
                        </Divider>

                        <Table columns={this.state.columns} dataSource={this.state.data} size={'small'}/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default DashboardPage;
