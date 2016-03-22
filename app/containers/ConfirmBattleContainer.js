/**
 * Created by lejoss on 3/14/16.
 */

import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers'

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
    async componentDidMount() {
        // fetch info from github then update state
        const { query } = this.props.location;

        // using async/await
        try {
            const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        } catch (err) {
            console.warn('Error in ConfirmationBattleContainer', err);
        }

        // using .then
        //getPlayersInfo([query.playerOne, query.playerTwo])
        //    .then((players) => {
        //        this.setState({
        //            isLoading: false,
        //            playersInfo: [players[0], players[1]]
        //        })
        //    })
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

export default ConfirmBattleContainer;