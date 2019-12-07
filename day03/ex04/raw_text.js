// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   raw_text.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 21:14:50 by sko               #+#    #+#             //
//   Updated: 2019/12/06 21:14:52 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// show the same thing on the screen if you look at its source code
// with curl or its html rendered in Chrome

var http     = require('http');

function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end('<html><body>Hello</body></html>');
}
http.createServer(onRequest).listen(8080);
console.log('Server Status: [RUNNING]');
console.log("Server can be found at 'http://127.0.0.1:8080/'");