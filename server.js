// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;
// List of Responses
var goodResponses = ["You are truly a magnificent wildebeest","You are a 100 out of 10","You can get iiiiiit"];
var badResponses = ["Eff you and the carpet you rode in on","You should be ashamed of yourself and your family.","Life must be hard for you since you can't look into a mirror without it breaking, huh?"];
var good = goodResponses[Math.floor(Math.random()*goodResponses.length)];
var bad = badResponses[Math.floor(Math.random()*badResponses.length)];
// Create a generic function to handle requests and responses
function handleRequestServer1(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end(good);
}
function handleRequestServer2(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end(bad);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequestServer1);
var server2 = http.createServer(handleRequestServer2);
// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});
server2.listen(PORT2, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});

