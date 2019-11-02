import React from "react";
import Footer from "../layout/Footer";
import UserSidebar from "../users/UserSidebar";
import UserActivity from "../users/UserActivity";

const Dashboard = () => {
    return (
        <div className='content-wrapper'>
            <UserSidebar/>
            <div className="main-wrapper">
                <UserActivity/>
                <Footer/>
            </div>
        </div>
    )
};

export default Dashboard;
