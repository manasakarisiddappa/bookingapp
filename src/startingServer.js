const http = require("http");
const port = 8080;

// Create a server object:
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/about") {
    res.write("about");
    res.end();
  }

  if (req.url === "/contact") {
    res.write("contact");
    res.end();
  }

  if (req.url === "/details") {
    res.write("details");
    res.end();
  }
});

// Set up our server so it will listen on the port
server.listen(port, function (error) {
  // Checking any error occur while listening on port
  if (error) {
    console.log("Something went wrong", error);
  }
  // Else sent message of listening
  else {
    console.log("Server is listening on port" + port);
  }
});
