/**
 * Created by lejoss on 3/13/16.
 */



const USER_DATA = {
    name: 'Alejandro Baez Arcila',
    username: 'lejoss',
    image: 'https://avatars3.githubusercontent.com/u/11046621?v=3&s=460'
};

import React from 'react';
import ReactDOM from 'react-dom';


const ProfilePic = React.createClass({
    render() {
        return <img src={this.props.imageUrl} alt="" style={{height: 100, width: 100}} />
    }
});

const Link = React.createClass({
    changeURL() {
        window.location.replace(this.props.href)
    },

    render() {
        return (
            <span style={{color: 'blue', cursor: 'pointer'}} onclick={this.changeURL}>
                {this.props.children}
            </span>
        )
    }
});

const ProfileLink = React.createClass({
    render() {
        return (
            <div>
                <Link href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </Link>
            </div>
        )
    }
});

const ProfileName = React.createClass({
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
});

const Avatar = React.createClass({
    render() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
})

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);