import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

class Sidebar extends React.Component{
    render() {
        return(
            <div className="sidebar-wrapper">
                <Avatar/>
                <UserInfo/>
            </div>
        )
    }
}

export default Sidebar
