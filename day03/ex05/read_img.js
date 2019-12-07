// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   read_img.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 21:21:01 by sko               #+#    #+#             //
//   Updated: 2019/12/06 21:21:04 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Create a page named read_img.js which return to the browser the file
// 42.png with the right Content-Type.
// how to open local image in nodejs?
// https://stackoverflow.com/questions/9540978/nodejs-how-to-read-and-output-jpg-image

var http = require('http');
var fs   = require('fs');

function onRequest(request, response) {
    var image = fs.readFileSync('./img/42.png');
    response.writeHead(200, { "Content-Type": "image/png" });
    response.end(image, 'binary');
}
http.createServer(onRequest).listen(8080);
console.log('Server Status: [RUNNING]');
console.log("Server can be found at 'http://127.0.0.1:8080/'");