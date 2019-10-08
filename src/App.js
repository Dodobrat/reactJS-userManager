import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends React.Component{
    render() {
        return(
            <Router>
                <Navigation/>
                <div className="App">
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" render={props => (
                        <div>
                            login
                        </div>
                    )}/>
                    <Route path="/register" render={props => (
                        <div>
                            register
                        </div>
                    )}/>
                </div>
                <Footer/>
            </Router>
        )
    }
}

export default App;
