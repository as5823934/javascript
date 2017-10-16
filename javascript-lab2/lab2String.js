//Q1

function abbrev_name(name) {
    var aftername = name.split(" ");
    return (aftername[0] + " " + aftername[1].charAt(0));
}
document.write(abbrev_name("Robin Singh"));
document.write('<br>');

//Q2

function string_parameterize(str) {
    var afterstr = str.toLowerCase().split(" ");
    return (afterstr[0] + "-" + afterstr[1] + "-" + afterstr[2] + "-" + afterstr[3]);
}
document.write(string_parameterize("Robin Singh from USA."));
document.write('<br>');

//Q3

function capitalize(str) {
    return str.toUpperCase().charAt(0) + str.slice(1);
}
document.write(capitalize("js string exercises"));
document.write('<br>');

//Q4

function capitalize_Words(str)
{
 str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
return letter.toUpperCase();
});
return str;
}
document.write(capitalize_Words("js string exercises"));
document.write('<br>');

//Q5

function is_string(input) {
    return (typeof input === "string");
}
document.write(is_string("JavaScript"));
document.write(is_string([1,2,,4,0]));
document.write('<br>');

//Q6

function repeat(a,b){
    if (b >= 0) {
        return a.repeat(b);
    }
    else {
        return a;
    }
}


document.write(repeat("Ha!"));
document.write('<br>');
document.write(repeat(("Ha!"),2));
document.write('<br>');
document.write(repeat(("Ha!"),3));
document.write('<br>');


//Q7
/*
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       var subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
*/
function count(a,b){
    var c = a.toLowerCase();
    return  c.split(b).length-1;
}
    
document.write(count("The quick brown fox jumps over the lazy dog", 'the'));
document.write('<br>');
document.write(count("The quick brown fox jumps over the lazy dog", 'fox'));
document.write('<br>');
                     