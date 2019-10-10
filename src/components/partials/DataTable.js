import React from "react";
import {Table} from "react-bootstrap";

class DataTable extends React.Component{
    render() {
        return(
            <div className="log-table-container">
                <Table striped bordered hover size="sm" className="log-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Attempt Date</th>
                        <th>Succeeded</th>
                        <th>IP</th>
                        <th>Last Login</th>
                        <th>Last Logout</th>
                        <th>Device Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>False</td>
                        <td>192.168.0.1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>12-01-2019 21:42:58</td>
                        <td>Desktop</td>
                    </tr><tr>
                        <td>1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>False</td>
                        <td>192.168.0.1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>12-01-2019 21:42:58</td>
                        <td>Desktop</td>
                    </tr><tr>
                        <td>1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>False</td>
                        <td>192.168.0.1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>12-01-2019 21:42:58</td>
                        <td>Desktop</td>
                    </tr><tr>
                        <td>1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>False</td>
                        <td>192.168.0.1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>12-01-2019 21:42:58</td>
                        <td>Desktop</td>
                    </tr><tr>
                        <td>1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>False</td>
                        <td>192.168.0.1</td>
                        <td>12-01-2019 21:32:58</td>
                        <td>12-01-2019 21:42:58</td>
                        <td>Desktop</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DataTable
