# LIRI Bot
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

** How to install: **

Install Node.js and npm in your laptop.
In your terminal, clone the application.
After download, in your terminal, run "npm install" in the application folder that has package.json.
Create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

# Spotify API keys
```
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```
# Twitter API keys
```
TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```

** How to use LIRI **
* my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.


* spotify-this-song [name of the song here]

----------------
Artist: The Beatles
Song's name: Hey Jude - Remastered 2015
Preview url: null
Album: 1 (Remastered)


* node liri.js movie-this [name of the movie here]

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
This will output the following information to your terminal/bash window:


Title: Frozen
Year: 2013
IMDB Rating: 7.5
Rotten Tomatoes Rating: 90%
Country: USA
Language: English, Norwegian
Plot: When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.
Actors: Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad

* do-what-it-says
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.



Built With
* Javascript
* twitter, node-spotify-api, request, DotEnv and colors packages
* Contributing
Please contact Em at em.karimifar@gmail.com for details on our code of conduct, and the process for submitting pull requests to us.

Authors
Em Karimifar/
