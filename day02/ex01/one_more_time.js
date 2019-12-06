// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   one_more_time.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/05 21:34:51 by sko               #+#    #+#             //
//   Updated: 2019/12/05 21:34:55 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// count the second from 1970 January 1 to certain input time format.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://grammarist.com/french/french-days-and-months/
// http://www.robertprice.co.uk/robblog/javascript_date_time_and_node_js-shtml/

function convertMois(mois)
{
    switch(mois)
    {
        case "janvier":
            return (1);
        case "fevrier":
            return (2);
        case "mars":
            return (3);
        case "avril":
            return (4);
        case "mai":
            return (5);
        case "juin":
            return (6);
        case "juillet":
            return (7);
        case "aoat":
            return (8);
        case "septembre":
            return (9);
        case "octobre":
            return (10);
        case "novembre":
            return (11);
        case "decembre":
            return (12);
    }
}

function convertJournee(journee)
{
    switch(journee)
    {
        case "lundi":
            return (1);
        case "mardi":
            return (2);
        case "mercredi":
            return (3);
        case "jeudi":
            return (4);
        case "vendredi":
            return (5);
        case "samedi":
            return (6);
        case "dimanche":
            return (7);
    }
}
var input = process.argv[2];
if(input !== undefined) {
    var param = new RegExp('((lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)) ([0-9]{2}) (janvier|fvrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})');

    var lowerCase = input.toLowerCase();
    if (lowerCase.match(param)) {
        dateArr = lowerCase.split(' ');
        dateArr[2] = convertMois(dateArr[2]);
        dateArr[0] = convertJournee(dateArr[0]);
        // utc get the universal time from given input
        correntTime = new Date(Date.UTC(dateArr[3], dateArr[2] - 1, dateArr[1], dateArr[4].substring(0, 2), dateArr[4].substring(3, 5), dateArr[4].substring(6, 8)));
        // reduce one hours from universal time to get paris time.
        outputTime = new Date(correntTime.valueOf() - 60 * 60000);
        console.log(outputTime.getTime() / 1000);
    } else
        console.log("Wrong Format");
}