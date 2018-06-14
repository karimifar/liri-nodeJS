require("dotenv").config();
var fs = require("fs");
var request = require("request")
var keys = require("./keys.js");
var Twitter = require("twitter")
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2]

function getTweets(){
    client.get('statuses/user_timeline',{user_id: "Karimifar19"}, function(error, tweets, response) {
        if(error) throw error;
        for (var i=0; i <tweets.length; i++){
            console.log("\nTweeted at: "+ tweets[i].created_at)
            console.log(tweets[i].text + "\n-----")
        }
        });
}

if (command === "my-tweets"){
    getTweets() 
}

if (command === "spotify-this-song"){
    var musicName = process.argv[3]
    for (var i=4; i<process.argv.length; i++){
        musicName += " " + process.argv[i];
    }

    spotify.search({ type: 'track', query: musicName, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("---\nYou searched for: " + data.tracks.items[0].name); 
      console.log("This song is by: " + data.tracks.items[0].artists[0].name); 
      console.log("From album: " + data.tracks.items[0].album.name); 
      console.log("Listen to a preview here: " + data.tracks.items[0].preview_url + "\n---"); 
      });


}

if (command === "movie-this"){
    var movieName = process.argv[3]
    for (var i=4; i<process.argv.length; i++){
        movieName += " " + process.argv[i];
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error,response,body){
        if(!error && response.statusCode === 200){
            console.log("---\nYou searched for: "+JSON.parse(body).Title)
            console.log("Realeased on: "+JSON.parse(body).Released)
            console.log("imdb Rating: "+ JSON.parse(body).imdbRating)
            console.log("Rotten tomatos: " + JSON.parse(body).Ratings[1].Value)
            console.log("Country(ies): " + JSON.parse(body).Country)
            console.log("Language(s): " + JSON.parse(body).Language)
            console.log("Actors: "+ JSON.parse(body).Actors)
            console.log("Plot: "+JSON.parse(body).Plot + "\n---")
        }
    })
}

if (command === "do-what-it-says"){


    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
    
        // Break down all the numbers inside
        data = data.split(",");
        console.log(data[0])

        if(data[0]=== "my-tweets"){
            getTweets()
        }

        else if(data[0]==="spotify-this-song"){
            var musicName = data[1]

            spotify.search({ type: 'track', query: musicName, limit: 1 }, function(err, data) {
                if (err) {
                return console.log('Error occurred: ' + err);
                }
            
            console.log("---\nYou searched for: " + data.tracks.items[0].name); 
            console.log("This song is by: " + data.tracks.items[0].artists[0].name); 
            console.log("From album: " + data.tracks.items[0].album.name); 
            console.log("Listen to a preview here: " + data.tracks.items[0].preview_url + "\n---"); 
            });
        }

        else if(data[0] === "movie-this"){
            var movieName = data[1]        
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        
            request(queryUrl, function(error,response,body){
                if(!error && response.statusCode === 200){
                    console.log("---\nYou searched for: "+JSON.parse(body).Title)
                    console.log("Realeased on: "+JSON.parse(body).Released)
                    console.log("imdb Rating: "+ JSON.parse(body).imdbRating)
                    console.log("Rotten tomatos: " + JSON.parse(body).Ratings[1].Value)
                    console.log("Country(ies): " + JSON.parse(body).Country)
                    console.log("Language(s): " + JSON.parse(body).Language)
                    console.log("Actors: "+ JSON.parse(body).Actors)
                    console.log("Plot: "+JSON.parse(body).Plot + "\n---")
                }
            })
        } else{
            console.log("Your text command is not found! use one of the acceptable commands")
        }

      });
    

}

