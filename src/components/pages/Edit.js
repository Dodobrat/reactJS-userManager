import React from "react";
import Footer from "../layout/Footer";
import UserSidebar from "../users/UserSidebar";
import UserEdit from "../users/UserEdit";

const Edit = () =>{
    return (
        <div className='content-wrapper'>
            <UserSidebar/>
            <div className="main-wrapper">
                <UserEdit/>
                <Footer/>
            </div>
        </div>
    );
};

export default Edit;
