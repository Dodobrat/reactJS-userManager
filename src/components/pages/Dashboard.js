import React, {useContext, useEffect} from "react";
import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    },[]);

    return (
        <div>
            Dashboard
        </div>
    )
};

export default Dashboard;
