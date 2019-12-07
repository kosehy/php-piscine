// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   members_only.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 21:30:51 by sko               #+#    #+#             //
//   Updated: 2019/12/06 21:30:53 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
// basic-auth : https://www.npmjs.com/package/basic-auth
// buffer     : https://nodejs.org/api/buffer.html#buffer_new_buffer_buffer
var http = require('http');
var fs   = require('fs');
var auth = require('basic-auth')
var msg = `<html><body>
    Hello Zaz<br />>
    <img src='data:image/png;base64,` +
    encode_base64('../img/42.png') +
    `'>
    </body></html>
    `;
var error_msg = `<html><body>That area is accessible for members only</body></html>html>`;

function onRequest(request, response) {
    if (auth(request) && auth(request).name == 'zaz' && auth(request).pass == 'Ilovemylittleponey') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(msg);
    } else if (auth(request) && auth(request).name == 'zaz' && auth(request).pass == 'jaimelespetitsponeys') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(msg);
    } else {
        response.setHeader('WWW-Authenticate', 'Basic realm="example"');
        response.statusCode = 401;
        response.setHeader('Content-Type', 'Basic realm="Member area"');
        response.end(error_msg);
    }
}
http.createServer(onRequest).listen(8080);
console.log('Server Status: [RUNNING]');
console.log("Server can be found at 'http://127.0.0.1:8080/'");
function encode_base64(file) {
    var text = fs.readFileSync(file);
    return Buffer.from(text).toString('base64');
}