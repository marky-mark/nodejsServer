function route(pathname, request, response) {
  console.log("About to route a request for " + pathname);

  if (request.method == 'GET') {  
    if (pathname == '/hello') {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
    } else if (pathname == '/google') {
      response.writeHeader(302, {"Content-Type": "text/plain", "Location" : "http://www.google.com"});
      response.write("Redirecting\n");    
    } else {
      response.writeHeader(404, {"Content-Type": "text/plain"});    
      response.write("404 Not Found\n");    
    }
  } else {
    response.writeHead(500, {"Content-Type": "text/plain"});
    response.write("Apologies! Response method " + request.method + " is NOT supported!");
  }
  
  response.end();
}

exports.route = route;