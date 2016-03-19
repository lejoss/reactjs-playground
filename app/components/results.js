/**
 * Created by lejoss on 3/15/16.
 */

import React from 'React';
import styles from '../styles'
import UserDetailsWrapper from './UserDetailsWrapper';
import UserDetails from './UserDetails';
import MainContainer from '../components/MainContainer';
import { ReactRouter, Link } from 'react-router';
import Loading from './Loading';
const PropTypes = React.PropTypes;


//const puke = (obj) => {
//    return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
//};

const StartOver = () => {
    return (
        <div className="col-sm-12" style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
        </div>
    )
};

const Results = (props) => {

    if(props.isLoading === true) {
        return (
            <Loading text='waiting' />
        )
    }

    if (props.scores[0] === props.scores[1]) {
        return (
             <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
             </MainContainer>
        )
    }

    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
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