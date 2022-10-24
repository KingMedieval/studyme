import React from 'react';
import '../../../App.css'

const NotFound = () => {
    return(
        <div className={'App'}>
            <h1>
                404 NOT FOUND
                <br/>
                <br/>
                The link is invalid.
                <br/>
                You are trying to access questions that don't exist.
            </h1>
        </div>
    )
}

export default NotFound;