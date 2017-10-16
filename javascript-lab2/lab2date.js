//Q1
function is_date(a) {
    return (a) instanceof Date;
}

document.write(is_date("October 13, 2014 11:13:00"));
document.write('<br>');
document.write(is_date(new Date(86400000)));
document.write('<br>');
document.write(is_date(new Date(99,5,24,11,33,30,0)));
document.write('<br>');
document.write(is_date([1,2,4,0]));
document.write('<br>');

//Q2

function curday(a) {
    var today = new Date();
    return today.getMonth() + a + today.getDate() + a + today.getFullYear();
    
}
document.write(curday("/"));
document.write('<br>');
document.write(curday("-"));
document.write('<br>');
//Q3

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
    
}
document.write(getDaysInMonth(1, 2012));
document.write('<br>');
document.write(getDaysInMonth(2, 2012));
document.write('<br>');
document.write(getDaysInMonth(9, 2012));
document.write('<br>');
document.write(getDaysInMonth(12, 2012));
document.write('<br>');
//Q4

function month_name(month) {
    var monthlist = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
    return monthlist[month.getMonth()];
}
document.write(month_name(new Date("10/11/2009")));
document.write('<br>');
document.write(month_name(new Date("11/13/2014")));
document.write('<br>');
//Q5

function compare_date(date1, date2) {
    if (date1.getTime() < date2.getTime()) {
        return "date1 < date2";
    }
    else if (date1.getTime() > date2.getTime()) {
        return "date1 > date2";
    }
    else {
        return "date1 = date2";
    }
    
    
    
}
document.write(compare_date(new Date("11/14/2013 00:00"), new Date("11,14,2013 00:00")));
document.write('<br>');
document.write(compare_date(new Date("11/14/2013 00:01"), new Date("11,14,2013 00:00")));
document.write('<br>');
document.write(compare_date(new Date("11/14/2013 00:00"), new Date("11,14,2013 00:01")));
document.write('<br>');
//Q6

function add_minutes(date, minutes) {
    
    return new Date(date.getTime() + minutes * 60000);
}
document.write(add_minutes(new Date(2014,10,2), 30).toString());
document.write('<br>');
//Q7

function date_diff_indays(date1,date2) {
var a = new Date(date1);
var b = new Date(date2);
var timeDiff = b.getTime() - a.getTime();
var diffDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
return diffDays;
}
document.write(date_diff_indays("04/02/2014", "11/04/2014"));
document.write('<br>');
document.write(date_diff_indays("12/02/2014", "11/04/2014"));
document.write('<br>');

//Q8
function lastday(year,month) {
    return new Date(year, month + 1 , 0).getDate();
}
document.write(lastday(2014,0));
document.write('<br>');
document.write(lastday(2014,1));
document.write('<br>');
document.write(lastday(2014,11));
document.write('<br>');
//Q9
function timeConvert(minutes) {
    var hour = Math.floor(minutes / 60);
    var mins = minutes % 60;
    return ("200 minutes = " + hour + " hour(s) and " + mins + " minute(s)");
}
document.write(timeConvert(200));
document.write('<br>');
//Q10

function age(birth) {
    var now = new Date().getTime();
    var agediff = now - birth.getTime();
    var ageDate = new Date(agediff);
    return Math.abs(ageDate.getFullYear() - 1970);
}

/*
function age(birth) {
    var now = new Date().getFullYear();
    var agediff = now - birth.getFullYear();
    return agediff;
}
*/
document.write(age(new Date(1982,11,4)));
document.write('<br>');
document.write(age(new Date(1962,1,1)));
document.write('<br>');