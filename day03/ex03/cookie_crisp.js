// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   cookie_crisp.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/06 20:22:27 by sko               #+#    #+#             //
//   Updated: 2019/12/06 20:22:30 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
// need cookies nodejs library
// cookies : https://www.npmjs.com/package/cookies
const http = require('http');
const Cookies = require('cookies');
const params_parser = require('urlparser');

function onRequest(request, response) {
    try {
        var parsed_params = params_parser.parse(request.url).query.params;
    } catch (error) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Invalid!!');
    }

    try {
        var cookie_file = new Cookies(request, response);

        if (parsed_params['action'] == 'get')
        {
            lastVisit = cookie_file.get(parsed_params['name']);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(lastVisit);
        }

        else if (parsed_params['action'] == 'set')
        {
            cookie_file.set(parsed_params['name'], parsed_params['value'], { maxAge: 600000 });
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end();
        }

        else if (parsed_params['action'] == 'del')
        {
            cookie_file.set(parsed_params['name'], null);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end();
        }
        else {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end();
        }
    }

    catch (error) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end();
    }
}

http.createServer(onRequest).listen(8080, function () {
    console.log('Server Status: [RUNNING]');
    console.log("Server can be found at 'http://127.0.0.1:8080/'");
});