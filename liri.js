require("dotenv").config();

var command = process.argv;

if (command[2] == "concert-this") {

  const axios = require('axios');

  const moment = require('moment')

  var concertRequest = command.slice(3).join(' ');

  var apiCall = "https://rest.bandsintown.com/artists/" + concertRequest + "/events?app_id=codingbootcamp"

  var date = moment("response.data[0].datetime").format('LLL')

  // Make a request for a user with a given ID
  axios.get(apiCall)
    .then(function (response) {
      // handle success
      console.log(response.data[0].lineup);
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.city);
      console.log(response.data[0].venue.region);
      console.log(date);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
} else if (command[2] == "spotify-this-song") {

  var keys = require("./key.js");
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);

  var scopes = ['user-read-private', 'user-read-email'],
    redirectUri = 'https://example.com/callback?code=AQCsN-Q_UG6hBFfk5Lh30cS7waM3ci8yHbTTgMJIQww9m1hMx9IADSWlSX_1pHPTTP88spD5YAIqXd53DxGmXf-1NHWD-I6XhCe6ac7hnRPNNweA---pgN01n6gz9oELWxrBlQyYoT6nOJhddvQlKU1saQZw4Tv06C7gNjPHeeyjjkNQXFQVxI7dQonrNlcu7aPSuzHIw35QuFAcG12Da7jtIyxpf6OQF3KXAH2as-lfe8QOqE4WOA&state=34fFs29kd09',
    clientId = '443b623eb81448609e1acaec5384c616',
    state = 'some-state-of-my-choice';

  // Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
  var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
  });

  // Create the authorization URL
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  // https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
  console.log(authorizeURL);

  spotify
    .search({ type: 'track', query: 'Stay' })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
} else if (command[2] == "movie-this") {
  const axios = require('axios');

  var movieRequest = command.slice(3).join(' ');

  var apiCalls = "https://www.omdbapi.com/?t=" + movieRequest + "&apikey=trilogy"

  // Make a request for a user with a given ID
  axios.get(apiCalls)
    .then(function (response) {
      console.log("Movie Title")
      console.log(response.data.Title);
      console.log("Release year")
      console.log(response.data.Year);
      console.log(response.data.Ratings[0].Source);
      console.log(response.data.Ratings[0].Value);
      console.log(response.data.Ratings[1].Source);
      console.log(response.data.Ratings[1].Value);
      console.log("Language")
      console.log(response.data.Language);
      console.log("Plot")
      console.log(response.data.Plot);
      console.log("Actors")
      console.log(response.data.Actors);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
} else if (command[2] == "do-what-it-says") {
  var fs = require('file-system');

  fs.mkdir('1/2/3/4/5', [mode], function (err) { });
  fs.mkdirSync('1/2/3/4/5', [mode]);
  fs.writeFile('path/test.txt', 'aaa', function (err) { })
}