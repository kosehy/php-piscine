// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   who.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/05 21:35:42 by sko               #+#    #+#             //
//   Updated: 2019/12/05 21:35:43 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
// spawn : https://nodejs.org/api/child_process.html

// use spawn function to use command line query
var spawn = require('child_process').spawn

var w  = spawn('w', ['-h']);
var month_day = spawn('date');
var str_reg = new RegExp(/\s+/, 'g');
var user;
var user_info;

// get month and day information from date command
month_day.stdout.on('data', function (data) {
    // seperate date month_day using ' '
    // month_date[1] = month info
    // month_date[3] = day info
    month_day = data.toString().split(' ');
    // get user information and login time from w -h  command
    w.stdout.on('data', function (data) {
        // seperate and sort the data using split and sort funciton
        user = data.toString().split('\n').sort();
        for (var i = 0; i < user.length; i++) {
            // remove empty sentence
            if (user[i].length >= 1) {
                // seperate user infomation using str_reg expression and split funciton
                user_info = user[i].toString().split(str_reg);
                // if TTY is not console, add tty string at the front
                if (user_info[1] != 'console')
                    user_info[1] = 'tty' + user_info[1];
                time = user_info[3].split(':');
                // if hour information is between 0 - 9, add 0 at the beginning
                if (Number(time[0]) < 10)
                    time[0] = `0${time[0]}`;
                // show the result same as who
                console.log(`${user_info[0]}      ${user_info[1]}  ${month_day[1]}  ${month_day[3]} ${time[0]}:${time[1]}`);
            }
        }
    });
});