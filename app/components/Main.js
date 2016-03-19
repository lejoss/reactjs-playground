 /**
 * Created by lejoss on 3/13/16.
 */

import React from 'react';
import '../main.css';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Main = React.createClass({
     render() {
         return (
             <div className="main-container">
                 <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>
                     {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                 </ReactCSSTransitionGroup>

             </div>
         )
 }
});

export default Main;