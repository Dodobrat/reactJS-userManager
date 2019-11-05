import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from "../../context/auth/authContext";

const UserSidebar = () => {
    const authContext = useContext(AuthContext);

    const [classes, setClasses] = useState('expanded');
    const [collapsed, setCollapsed] = useState(false);

    const {isAuthenticated, logout, loadUser, user, setCurrent, clearCurrent} = authContext;

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
        collapsed ? setClasses('expanded') : setClasses('collapsed');
    };

    const authLinks = (
        <Fragment>
            <div className="user-details">
                <div className="user-card">
                    <img src={user && user.avatar ? `${user.avatar}` : "https://picsum.photos/id/238/200/200"} alt="" className="avatar"/>
                    <div className="user-card-details">
                        {(user && user.username !== null) ? <p className="user-card-item username">{user && user.username}</p> : ''}
                        <p className="user-card-item name">{(user && (user.first_name !== null || user.last_name !== null)) ? user.first_name + ' ' + user.last_name : 'Guest'}</p>
                    </div>
                </div>
                <p className="user-item email">Email: <span>{user && user.email}</span></p>
                {(user && user.country_id !== null) ? <p className="user-item nationality">Nationality: <span>{user.country_id}</span></p> : ''}
                {(user && user.birth_date !== null) ? <p className="user-item birthday">Birth date: <span>{user.birth_date}</span></p> : ''}
                <div className="user-actions">
                    <button className="edit" onClick={() => setCurrent(user)}>
                        <i className="fas fa-edit"/>
                        Edit
                    </button>
                    <button className="logout" onClick={onLogout}>
                        <i className="fas fa-power-off"/>
                        Logout
                    </button>
                </div>
            </div>
        </Fragment>
    );

    return (
        <div className={`side-wrapper ${classes}`}>
            <button className="sidebar-trigger" onClick={toggleSidebar}>
                {collapsed ? <i className="fas fa-bars"/> : <i className="fas fa-times"/>}
            </button>
            <p className="sidebar-title" onClick={() => clearCurrent()}>
                User <span>Manager</span>
            </p>
            { isAuthenticated ? authLinks : <p>No user</p>}
        </div>
    );
};

export default UserSidebar;
