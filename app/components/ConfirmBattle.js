/**
 * Created by lejoss on 3/14/16.
 */

import React from 'react';
import styles from '../styles/index';
import { ReactRouter, Link } from 'react-router';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';

const PropTypes = React.PropTypes;


const ConfirmBattle = (props) => {
    return props.isLoading === true
        ? <p>LOADING</p>
        : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </div>
};

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;