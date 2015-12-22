/**
 * Created by lejoss on 16/12/15.
 */
// entry file for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import ListApp from './listExample.js'
import Calculator from './simpleCalc.js'

ReactDOM.render(<Calculator/>, document.getElementById('content'))
ReactDOM.render(<ListApp/>, document.getElementById('list-app'))