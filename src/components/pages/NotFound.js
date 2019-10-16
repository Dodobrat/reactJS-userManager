import React from 'react';
import {Empty} from 'antd';

function NotFound() {
    return (
        <Empty style={{padding: '4rem 0'}} description={
            <span style={{ fontSize: '1.4rem'}}>
                404 Not Found
            </span>
        }/>
    )
}

export default NotFound;
