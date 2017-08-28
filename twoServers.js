// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus
// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet
//===============================================================================================

// We require/import the HTTP module
var http = require("http");

//===============================================================================================

// Then define the ports we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//===============================================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestGood(request, response){
    response.end("You are a hard worker!!! " + request.url);
}

function handleRequestBad(request, response){
    response.end("You are lazy!!!" + request.url);
}

//===============================================================================================

// Create our servers
var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

//===============================================================================================

// Starting our servers
serverGood.listen(PORT1, function(){
  // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT1);
    
});


serverBad.listen(PORT2, function() {
      // Callback triggered when server is successfully listening. Hurray!
      console.log("Server listening on: http://localhost:%s", PORT2);
    
});