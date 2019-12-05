// count the second from 1970 January 1 to certain input time format.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://grammarist.com/french/french-days-and-months/

function convertMois(mois)
{
    mois.toUpperCase();
    switch(mois)
    {
        case "Janvier":
            return (1);
        case "Fevrier":
            return (2);
        case "Mars":
            return (3);
        case "Avril":
            return (4);
        case "Mai":
            return (5);
        case "Juin":
            return (6);
        case "Juillet":
            return (7);
        case "Aoat":
            return (8);
        case "Septembre":
            return (9);
        case "Octobre":
            return (10);
        case "Novembre":
            return (12);
        case "Decembre":
            return (12);
    }
}

function convertJournee(journee)
{
    journee.toUpperCase();
    switch(journee)
    {
        case ""
    }
}