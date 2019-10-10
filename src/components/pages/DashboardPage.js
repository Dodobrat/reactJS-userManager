import React from "react";
import DataTable from "../partials/DataTable";
import About from "../partials/About";
import Sidebar from "../partials/Sidebar";

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="content-wrapper">
                <Sidebar/>
                <div className="main-wrapper">
                    <div className="about">
                        <h3>About Me</h3>
                        <hr/>
                        <About/>
                    </div>
                    <br/><br/>
                    <div className="log-history">
                        <h3>Activity History</h3>
                        <hr/>
                        <DataTable/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPage;
