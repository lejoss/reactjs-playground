/**
 * Created by lejoss on 3/14/16.
 */

import axios from 'axios';

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = "?client_id=" + id + "&client_secret=" + sec;

const getUserInfo = (username) => {
    return axios.get('https://api.github.com/users/' + username + param);
};

const getRepos = (username) => {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
};

const getTotalStars = (repos) => {
    return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)
};

const getPlayersData = (player) => {
    return getRepos(player.login)
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
};

const calculateScores = (players) => {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
};

export function getPlayersInfo(players) {
    // fetch some data from github
    return axios.all(players.map((username) => getUserInfo(username)))
        .then((info) => info.map((user) => user.data))
        .catch((err) => console.warn('error in getPlayersInfo: ', err))
}
export function battle(players) {
    // this returns a promise
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
        .then(calculateScores)
        .catch((err) => console.warn('error in battle: ', err))
}
