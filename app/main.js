/**
 * Created by lejoss on 16/12/15.
 */
// entry file for webpack


import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes'



ReactDOM.render(
    routes,
    document.getElementById('app')
);