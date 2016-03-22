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
    async componentDidMount() {

        try {
            const scores = await battle(this.props.location.state.playersInfo);
            this.setState({
                isLoading: false,
                scores
            })
        } catch (err) {
            console.warn('Error in ResultsContainer ', err);
        }
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