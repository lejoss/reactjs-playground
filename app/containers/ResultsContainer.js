/**
 * Created by lejoss on 3/15/16.
 */

import React from 'React';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';

const ResultsContainer =  React.createClass({
    getInitialState() {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount() {
        //array of players
        //console.log(this.props.location.state.playersInfo);

        battle(this.props.location.state.playersInfo)
            .then((scores) => {
                this.setState({
                    isLoading: false,
                    scores: scores
                })
            })
    },
    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                playersInfo={this.props.location.state.playersInfo}
                scores={this.state.scores} />
        )
    }
});



export default ResultsContainer;