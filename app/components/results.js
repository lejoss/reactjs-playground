/**
 * Created by lejoss on 3/15/16.
 */

import React, { PropTypes } from 'react';
import {space} from '../styles'
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from '../components/MainContainer';
import { Link } from 'react-router';
import Loading from './Loading';

//const puke = (obj) => {
//    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
//};

const StartOver = () => {
    return (
        <div className="col-sm-12" style={space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
        </div>
    )
};

const Results = ({ isLoading, scores, playersInfo }) => {

    if(isLoading === true) {
        return (
            <Loading text='waiting' />
        )
    }

    if (scores[0] === scores[1]) {
        return (
             <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
             </MainContainer>
        )
    }

    const winningIndex = scores[0] > scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
};

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;