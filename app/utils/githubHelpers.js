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

const helpers = {
    getPlayersInfo: (players) => {
        // fetch some data from github
        return axios.all(players.map((username) => {
            return getUserInfo(username)
        })).then((info) => {
            return info.map((user) => {
                return user.data;
            })
        }).catch((err) => {
            console.warn('error', err);
        })
    }
};

export default helpers