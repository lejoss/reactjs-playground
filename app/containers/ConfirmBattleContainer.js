/**
 * Created by lejoss on 3/14/16.
 */

import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
    // in order to be able to do routing inside a component
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState() {
      return {
          isLoading: true,
          playersInfo: []
      }
    },
    componentDidMount() {
        const query = this.props.location.query;
        // fetch info from github then update state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            })
    },
    handleInitiateBattle() {
         this.context.router.push({
             pathname: '/results',
             state: {
                 playersInfo: this.state.playersInfo
             }
         })
    },
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle} />
          )
    }
});

module.exports = ConfirmBattleContainer;