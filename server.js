var http = require("http");
var url = require("url"),
path = require("path");
 
function start(route) {
  function onRequest(request, response) {
  
    var pathname = url.parse(request.url).pathname
    var fullPath = path.join(process.cwd(), pathname);  
    
    console.log("Request for: " + pathname + " received with full path: " + fullPath);
    
    route(pathname, request, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;