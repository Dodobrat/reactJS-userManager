import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navigation from "./components/layouts/Navigation";
import Footer from "./components/layouts/Footer";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgotPwdPage from "./components/pages/ForgotPwdPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navigation/>
                <div className="App">
                    <Redirect exact from="/" to="/login"/>
                    <Route path="/login" render={() => (
                        <LoginPage/>
                    )}/>
                    <Route path="/register" render={() => (
                        <RegisterPage/>
                    )}/>
                    <Route path="/forgot" render={() => (
                        <ForgotPwdPage/>
                    )}/>
                </div>
                <Footer/>
            </Router>
        )
    }
}

export default App;
