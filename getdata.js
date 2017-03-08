
  var querystring=require('querystring');
  var http=require('http');
  var fs = require('fs');


   http.get('http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&api_key=60e256b3eda3fe54934d79339614411f&user=BoxerMc&format=json', function(res){
        var str = '';
        console.log('Response is '+res.statusCode);
        var fstream = fs.createWriteStream('cool.txt');
        res.on('data', function (chunk) {
               fstream.write(chunk);
         });

/*      res.on('end', function () {
             console.log(str);
        });*/
  });
