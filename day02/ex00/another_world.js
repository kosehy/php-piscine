// Same funcion like epur_str in basic exam
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// /ab+c/i;
// new RegExp(/ab+c/, 'i'); // literal notation
// new RegExp('ab+c', 'i'); // constructor

// var re = new RegExp('pattern', 'flags');

var replace_literal = /\s+/g;
var replace_constructor = new RegExp('\\s+', 'g');
var space = ' ';
function epur_str_with_literal_notation(string)
{
    console.log(string.trim().replace(replace_literal, space));
}

function epur_str_with_constructor(string)
{
    console.log(string.trim().replace(replace_constructor, space));
}

if (process.argv[2])
    // epur_str_with_literal_notation(process.argv[2]);
    epur_str_with_constructor(process.argv[2]);