// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   print_get.js                                       :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 15:01:16 by sko               #+#    #+#             //
//   Updated: 2019/12/06 15:01:18 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
// need ulrparser nodejs library
// ulrparser :  https://www.npmjs.com/package/urlparser
// provides with an url parser that deconstructs an url into a managable
// object and back to a string

var http = require('http');
var parse_url = require('urlparser');

function onRequest(request, response) {
    response.writeHead(200, { "Context-Type": "text/plain" });
    try {
        // parse the params in to managable object and store to key variable
        var params = parse_url.parse(request.url).query.text;
        for (var i in text) {
            // if param is exists, print out the both key and params
            if (params.hasOwnProperty(i))
                response.write(`${i}: ${text[i]}\n`);
        }
        response.end();
    } catch (err) {
        response.end('add variables at the end of link!!');
    }
}

http.createServer(onRequest).listen(8080);

console.log("Server Status: [RUNNING]");
console.log("Server listening at '127.0.0.1' on port '8080'.");