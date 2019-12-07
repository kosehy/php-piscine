// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   app.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 14:37:06 by sko               #+#    #+#             //
//   Updated: 2019/12/06 14:37:08 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
// need nodejs-info nodejs library
// http: https://www.npmjs.com/package/http
// nodeInfo: https://www.npmjs.com/package/nodeinfo
// library for accessing or displaying NodeJS/NPN/System information
// kind of like phpinfo()
// Node.js HTTP Module : https://www.w3schools.com/nodejs/nodejs_http.asp

var http     = require('http');
var nodeInfo = require('nodejs-info');

function onRequest(request, response) {
    // write the header of response
    // if the status code is 200, all is OK
    // if 404, then the page is not found
    // after response.writeHead, response.end should be followed
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(nodeInfo(request));
}
// listen the 8080 port
http.createServer(onRequest).listen(8080);

// when succesfully connected to server, keep show the below server status and port information
console.log('Server Status: [RUNNING]');
console.log("Server listening at '127.0.0.1' on port '8080'.");