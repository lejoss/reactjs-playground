/**
 * Created by lejoss on 3/16/16.
 */

import React from 'react';
import {transparentBg} from '../styles';

const MainContainer = ({children}) => {
  return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
          {children}
      </div>
  )
};

export default MainContainer;