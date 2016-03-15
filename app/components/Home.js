/**
 * Created by lejoss on 3/13/16.
 */

import React from 'react';
import { Link } from 'react-router';
import transparentBg from '../styles';

// Stateless Functional Components
const Home = () => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={transparentBg.transparentBg}>
            <h1>Github Battle</h1>
            <p className="lead">Some fancy motto</p>
            <Link to="/playerOne" >
                <button type="button" className="btn btn-lg btn-success">Get Started</button>
            </Link>
        </div>
    )
};


export default Home;