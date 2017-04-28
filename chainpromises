const fs = require('fs');
var rp = require('request-promise');
const Promise = require("bluebird");
Promise.promisifyAll(rp);

const user = 'BoxerMc';
var pages = 0;


var promise1 = rp('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=' + user + '&format=json');
var promise2 = rp('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=' + user + '&page=5&format=json');


promise1.then(function(data) {
    str = JSON.parse(data);
    pages = str.recenttracks["@attr"].totalPages;
    var arr = [];
    for (let i = 0; i < pages; i++) {
        arr.push(rp('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=' + user + '&page=' + (i + 1) + '&format=json'))
    }

    arr[0].then(function(data) {

            if (arr[1]) {
                return arr[1];
            }
        }).then(function(data) {

            if (arr[2]) {
                return arr[2];
            }
        })
        //chain all the promises in the arr


});
