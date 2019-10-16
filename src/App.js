import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgotPwdPage from "./components/pages/ForgotPwdPage";
import NotFound from "./components/pages/NotFound";
import DashboardPage from "./components/pages/DashboardPage";
import EditPage from "./components/pages/EditPage";
import { Layout } from 'antd';
const { Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout className="layout">
                    <Navigation/>
                    <Content>
                        <Switch>
                            <Redirect exact from="/" to="/login"/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Route path="/forgot" component={ForgotPwdPage}/>
                            <Route path="/dashboard" component={DashboardPage}/>
                            <Route path="/edit" component={EditPage}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </Content>
                    <Footer/>
                </Layout>
            </Router>
        )
    }
}

export default App;
