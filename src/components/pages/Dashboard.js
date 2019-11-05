import React, {useEffect, useContext} from "react";
import Footer from "../layout/Footer";
import UserSidebar from "../users/UserSidebar";
import UserActivity from "../users/UserActivity";
import AuthContext from "../../context/auth/authContext";
import UserEdit from "../users/UserEdit";

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    const { current, loadUser} = authContext;

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, []);

    return (
        <div className='content-wrapper'>
            <UserSidebar/>
            <div className="main-wrapper">
                {current ? <UserEdit/> : <UserActivity/>}
                <Footer/>
            </div>
        </div>
    )
};

export default Dashboard;
