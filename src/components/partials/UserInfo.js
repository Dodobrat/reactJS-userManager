import React from "react";
import NavigationLink from "./NavigationLink";

class UserInfo extends React.Component{
    render() {
        return (
            <div className="user-info">
                <h5 className="user-name">
                    John Doe
                    <div className="online-indicator"></div>
                </h5>
                <hr/>
                <p className="user-email text-muted">
                    dodobrat@abv.bg
                </p>
                <hr/>
                <p className="user-alias">
                    Dodobrat
                </p>
                <NavigationLink goesTo={'/edit'}
                                linkName={'Edit Profile'}
                                customClass={'btn btn-dark w-100 profile-edit'}/>
            </div>
        );
    }
}

export default UserInfo
