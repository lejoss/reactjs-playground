/**
 * Created by lejoss on 3/14/16.
 */

import React, { PropTypes } from 'react';
import {space} from '../styles';
import { Link } from 'react-router';
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from '../components/MainContainer';
import Loading from './Loading';



const ConfirmBattle = (props) => {
    return props.isLoading === true
        ? <Loading />
        : <MainContainer>
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
                <div className='col-sm-12' style={space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12' style={space}>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </MainContainer>
};

ConfirmBattle.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
};

export default ConfirmBattle;