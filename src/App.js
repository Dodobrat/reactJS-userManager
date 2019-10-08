import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";

class App extends React.Component{
    render() {
        return(
            <Router>
                <div className="App">
                    <Navigation/>
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
            </Router>
        )
    }
}

export default App;
