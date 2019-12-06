// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   another_world.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: sko <marvin@42.fr>                         +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/05 21:34:33 by sko               #+#    #+#             //
//   Updated: 2019/12/05 21:34:38 by sko              ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Same funcion like epur_str in basic exam
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://www.w3schools.com/js/js_conventions.asp

// /ab+c/i;
// new RegExp(/ab+c/, 'i'); // literal notation
// new RegExp('ab+c', 'i'); // constructor

// var re = new RegExp('pattern', 'flags');

var replaceLiteral = /\s+/g;
var replaceConstructor = new RegExp('\\s+', 'g');
var space = ' ';
function epurStrWithLiteralNotation(string)
{
    console.log(string.trim().replace(replaceLiteral, space));
}

function epurStrWithConstructor(string)
{
    console.log(string.trim().replace(replaceConstructor, space));
}

if (process.argv[2])
    // epurStrWithLiteralNotation(process.argv[2]);
    epurStrWithConstructor(process.argv[2]);
