/**
 * Created by lejoss on 3/14/16.
 */

import React, { PropTypes } from 'react';

const UserDetailsWrapper = (props) => {
    console.log(props);
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
};

UserDetailsWrapper.header = {
    header: PropTypes.string.isRequired
};

export default UserDetailsWrapper;