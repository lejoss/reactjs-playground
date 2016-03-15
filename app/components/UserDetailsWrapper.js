/**
 * Created by lejoss on 3/14/16.
 */

import React from 'react';

const PropTypes = React.PropTypes;

const UserDetailsWrapper = (props) => {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
};

UserDetailsWrapper.PropTypes = {
    header: PropTypes.string.isRequired
};

module.exports = UserDetailsWrapper;