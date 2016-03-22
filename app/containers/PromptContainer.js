/**
 * Created by lejoss on 3/13/16.
 */

import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
    // dynamic routing uses context
    // cuz you don't want to pass the router down props
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            username: ''
        }
    },
    // e coming from the input
    handleUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    },
    handleSubmitUser(e) {
        e.preventDefault();
        const { username } = this.state;
        this.setState({
            username: ''
        }) ;

        if (this.props.routeParams.playerOne) {
            // go to battle

            // use context for dynamic routing
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: username
                }
            })
        } else {
            // go to /playerTwo
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },
    render() {

        // containers handles the logic
       // PromptContainer is managing state and routing but its not in change
       // of rendering UI thats why we have separated UI Component Prompt as a presentation component

        return (
            <Prompt
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}
            />
        )
    }

});

export default PromptContainer;