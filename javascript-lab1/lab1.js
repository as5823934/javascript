//document.write("Hello");

// Q1.
function makeAbba(a, b) {
	
   return (a + b + b + a) + "<br>";
   
}

document.write(makeAbba("Hi", "Bye"));
document.write(makeAbba("Yo", "Alice"));
document.write(makeAbba("What", "Up"));


// Q2.
function endsLy(a) {
    
	if (a.slice(-2) == "ly") {
        return true + "<br>";
    }
    else {
        return false + "<br>";
    }
    
}
// return a.slice(-2) == "ly";

document.write(endsLy("oddly")); 
document.write(endsLy("y")); 
document.write(endsLy("oddy"));

//Q3.

function firstHalf(a){
    if (a.length % 2 == 0) {
    return a.slice(0, a.length / 2) + "<br>";
   }
}
document.write(firstHalf("WooHoo"));
document.write(firstHalf("HelloThere"));
document.write(firstHalf("abcdef"));

//Q4.

function right2(a) {
    if (a.length >= 2) {
    return a.slice(-2) + a.slice(0,-2) + "<br>";
    }
}
document.write(right2("Hello"));
document.write(right2("Java"));
document.write(right2("Hi"));


//Q5.
function conCat(a,b) {
    if (a.slice(-1) == b.charAt(0)) {
    return a + b.slice(1) + "<br>";
    }
    return a + b + "<br>";
}
document.write(conCat("abc","cat"));
document.write(conCat("dog","cat"));
document.write(conCat("abc",""));


//Q6.

function frontAgain(a){
    if (a.slice(0,2) == a.slice(-2)) {
        return true + "<br>";
    }
    else {
        return false + "<br>";
    }
}
document.write(frontAgain("edited"));
document.write(frontAgain("edit"));
document.write(frontAgain("ed"));

//Q7.

function deFont(a) {
    
    if (a.slice(0,2) == "ab") {
        return "a" + "<br>";
    }
    else if (a.charAt(0) == "a") {
        return "a" + a.slice(2) + "<br>";
    }
    else if (a.charAt(1) == "b") {
        return  + a.slice(2) + "<br>";
    }
    else {
        return a.slice(2) + "<br>";
    }
   
}
document.write(deFont("Hello"));
document.write(deFont("java"));
document.write(deFont("away"));

//Q8

function withoutX2(a){
    if (a.slice(0,1)=="x" && a.slice(1,2)=="x"){
        return a.slice(2) + "<br>";
    } 
    else if (a.slice(0,1)=="x" && a.slice(1,2)!="x"){
        return a.slice(1) + "<br>";
    } 
    else if (a.slice(0,1)!="x" && a.slice(1,2)=="x"){
        return a.slice(0,1) + a.slice(2) + "<br>";    
    } 
    else {
        return a + "<br>";
    }    
}
document.write(withoutX2("xHi"));
document.write(withoutX2("Hxi"));
document.write(withoutX2("Hi"));

//Q9

function lastChar(a,b) {
    if (a.length == 0) {
        return "@" + b + "<br>";
    }
    else if (b.length == 0) {
        return a + "@" + "<br>";
    }
    else if (a.length == 0 && b.length == 0) {
        return "@@";
    }
    else {
        return a.slice(0,1) + b.slice(-1) + "<br>";
    }
}
document.write(lastChar("last","char"));
document.write(lastChar("yo","java"));
document.write(lastChar("hi",""));


//Q10

function middleTwo(a){
    if (a.length % 2 == 0) {
        return a.slice(a.length / 2 - 1, a.length / 2 + 1) + "<br>";
    }
    
}
document.write(middleTwo("string"));
document.write(middleTwo("code"));
document.write(middleTwo("Practice"));