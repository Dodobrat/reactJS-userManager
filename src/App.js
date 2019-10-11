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

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navigation/>
                <div className="App">
                    <Switch>
                        <Redirect exact from="/" to="/login"/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/forgot" component={ForgotPwdPage}/>
                        <Route exact path="/dashboard" component={DashboardPage}/>
                        <Route exact path="/edit" component={EditPage}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        )
    }
}

export default App;
