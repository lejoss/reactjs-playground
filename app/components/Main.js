 /**
 * Created by lejoss on 3/13/16.
 */

import React from 'react';

const Main = React.createClass({
     render() {
         return (
             <div className="main-container">
                 Hello from Main!
                 {this.props.children}
             </div>
         )
 }
});

export default Main;