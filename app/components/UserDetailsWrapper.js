/**
 * Created by lejoss on 3/14/16.
 */

import React, { PropTypes } from 'react';

const UserDetailsWrapper = ({header, children}) => {
    return (
        <div className="col-sm-6">
            <p className="lead">{header}</p>
            {children}
        </div>
    )
};

UserDetailsWrapper.header = {
    header: PropTypes.string.isRequired
};

export default UserDetailsWrapper;