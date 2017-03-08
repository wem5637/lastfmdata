var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
var bl = require('bl');
var pages = 0;
var results = [];
var count = 0;


var user = 'BoxerMc';
http.get('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=' + user + '&format=json', function(res) {
    var str = '';
    console.log('Response is ' + res.statusCode);
    
    res.on('data', function(chunk) {
        str += chunk;
    });

    res.on('end', function() {
        str = JSON.parse(str);
        pages = str.recenttracks["@attr"].totalPages;

        function getdata(index) {
            http.get('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=' + user + '&page=' + (i + 1) + '&format=json', function(res) {
                res.pipe(bl(function(err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    results[index] = data.toString();
                    count++;
                    if (count === pages-1) {
                      fs.writeFile('ok.txt', results);
                    }
                }));
            });
        }
        for (var i = 0; i < pages; i++) {
            getdata(i);
        }

    });
});
