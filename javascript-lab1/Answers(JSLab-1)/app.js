///////////////////////////
// LAB JavaScript String //
///////////////////////////

// Q1.
// parameters : when defining a function
// arguments : when calling a function (values)
function makeAbba(a, b) {
	return a + b + b + a;
}
document.write('<h1>Question1</h1>');
document.write(makeAbba("Hi", "Bye")); // "HiByeByeHi"
document.write('<br>');
document.write(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
document.write('<br>');
document.write(makeAbba("What", "Up")); // "WhatUpUpWhat"
document.write('<br>');
document.write('<br>');


// Q2.
function endsLy(str) {
	return str.slice(-2) == "ly";
}

document.write('<h1>Question2</h1>');
document.write(endsLy("oddly"))
document.write('<br>');
document.write(endsLy("y"))
document.write('<br>');
document.write(endsLy("oddy"))
document.write('<br>');
document.write('<br>');


// Q3. 
function firstHalf(str) {
	return str.substring(0, str.length / 2);
}

document.write('<h1>Question3</h1>');
document.write(firstHalf("WooHoo"));
document.write('<br>');
document.write(firstHalf("HelloThere"));
document.write('<br>');
document.write(firstHalf("abcdef"));
document.write('<br>');
document.write('<br>');


// Q4. 
function right2(str) {
	return str.slice(-2) + str.substring(0, str.length - 2);
}

document.write('<h1>Question4</h1>');
document.write(right2("Hello"));
document.write('<br>');
document.write(right2("java"));
document.write('<br>');
document.write(right2("Hi"));
document.write('<br>');
document.write('<br>');


// Q5. 
function conCat(str1, str2) {
	return str1.charAt(str1.length-1) == str2.charAt(0) ? str1.substring(0, str1.length - 1) + str2 : str1 + str2; 
}

document.write('<h1>Question5</h1>');
document.write(conCat("abc", "cat"));
document.write('<br>');
document.write(conCat("dog", "cat"));
document.write('<br>');
document.write(conCat("abc", ""));
document.write('<br>');
document.write('<br>');


// Q6. 
function frontAgain(str) {
	return str.substring(0, 2) == str.slice(-2);
}

document.write('<h1>Question6</h1>');
document.write(frontAgain("edited"));
document.write('<br>');
document.write(frontAgain("edit"));
document.write('<br>');
document.write(frontAgain("ed"));
document.write('<br>');
document.write('<br>');


// Q7. 
function deFront(str) {
	if (str.substring(0,2) == 'ab') {
		return str;
	} else if (str.charAt(0) == 'a') {
		return 'a' + str.substring(2);
	} else if (str.charAt(1) == 'b') {
		return 'b' + str.substring(2);
	} else {
		return str.substring(2);
	}
}

/*
function deFront2(str) {
	if (str.substring(0,2) == 'ab') {
		return str;
	} else {
		return (str.charAt(0) == 'a') ? ('a' + str.substring(2)) : ((str.charAt(1) == 'b') ? 'b' + str.substring(2): str.substring(2));
	}
}
*/
document.write('<h1>Question7</h1>');
document.write(deFront("Hello"));
document.write('<br>');
document.write(deFront("java"));
document.write('<br>');
document.write(deFront("away"));
document.write('<br>');
document.write('<br>');


// Q8. 
function withoutX2(str) {
	if (str.substring(0, 2) == 'xx') {
		return str.substring(2);
	} else if (str.charAt(0) == 'x') {
		return str.substring(1);
	} else if (str.charAt(1) == 'x') {
		return str.charAt(0) + str.substring(2);
	}
}

document.write('<h1>Question8</h1>');
document.write(withoutX2("xHi"));
document.write('<br>');
document.write(withoutX2("Hxi"));
document.write('<br>');
document.write(withoutX2("Hi"));
document.write('<br>');
document.write('<br>');


// Q9. 
function lastChars(a, b) {

	if (a.length == 0 && b.length != 0) {
		return "@" + b.charAt(b.length-1);		
	} else if (a.length != 0 && b.length == 0) {
		return a.charAt(0) + "@";
	} else if (a.length == 0 && b.length == 0) {
		return "@@"
	} else {
		return a.charAt(0) + b.charAt(b.length-1);	
	}	
}

document.write('<h1>Question9</h1>');
document.write(lastChars("last", "chars"));
document.write('<br>');
document.write(lastChars("yo", "java"));
document.write('<br>');
document.write(lastChars("hi", ""));
document.write('<br>');
document.write('<br>');


// Q10.
// let middleTwo = (str) => { 
// 	return str.substr(str.length / 2 - 1, 2);
// }

function middleTwo(str) {
	var start = str.length / 2 - 1;

	return str.slice(start, start + 2);
}

document.write('<h1>Question10</h1>');
document.write(middleTwo("string"));
document.write('<br>');
document.write(middleTwo("code"));
document.write('<br>');
document.write(middleTwo("Practice"));
document.write('<br>');










