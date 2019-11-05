import React, { useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/authContext";

const UserActivity = () => {
    const authContext = useContext(AuthContext);

    const {user} = authContext;

    useEffect(() => {
        //eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="user-bio">
                <h2>About Me</h2>
                <p>{user && user.about ? user.about : 'No Bio found'}</p>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Attempt Date</th>
                        <th>Succeeded</th>
                        <th>IP</th>
                        <th>Login date</th>
                        <th>Logout date</th>
                        <th>Device</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>31.12.2019 15:27:47</td>
                        <td>Yes</td>
                        <td>192.168.0.1</td>
                        <td>31.12.2019 15:27:47</td>
                        <td>31.12.2019 16:27:47</td>
                        <td>Mobile</td>
                    </tr><tr>
                        <td>31.12.2019 15:27:47</td>
                        <td>Yes</td>
                        <td>192.168.0.1</td>
                        <td>31.12.2019 15:27:47</td>
                        <td>31.12.2019 16:27:47</td>
                        <td>Mobile</td>
                    </tr><tr>
                        <td>31.12.2019 15:27:47</td>
                        <td>Yes</td>
                        <td>192.168.0.1</td>
                        <td>31.12.2019 15:27:47</td>
                        <td>31.12.2019 16:27:47</td>
                        <td>Mobile</td>
                    </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <button className="current">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;
