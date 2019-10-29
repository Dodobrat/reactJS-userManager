import React, {useContext, useEffect} from "react";
import AuthContext from '../../context/auth/authContext';
import Footer from "../layout/Footer";

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user} = authContext;

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <div className='content-wrapper'>
            <div className="side-wrapper">
                Sidebar
            </div>
            <div className="main-wrapper">
                Dashboard
                <Footer/>
            </div>
        </div>
    )
};

export default Dashboard;
