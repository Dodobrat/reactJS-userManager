import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/pages/Dashboard";
import Edit from "./components/pages/Edit";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    return (
        <AuthState>
            <AlertState>
                <Router>
                    <Alerts/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Dashboard}/>
                        <PrivateRoute exact path="/edit/:id" component={Edit}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/forgot" component={Reset}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </Router>
            </AlertState>
        </AuthState>
    )
};

export default App;
