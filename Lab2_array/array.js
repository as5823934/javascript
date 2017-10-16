//Q1

function rotateLeft3(arr) {
    var arr1 = arr.shift();
    arr.push(arr1);
    return arr;
    
    /* var new_arr = [arr[1], arr[2], arr[0]];
    return new_arr; */
}
document.write(rotateLeft3([1,2,3]));
document.write('<br>');
document.write(rotateLeft3([5,11,9]));
document.write('<br>');
document.write(rotateLeft3([7,0,0]));
document.write('<br>');

//Q2

function reverse3(arr) {
    return arr.reverse();
}
document.write(reverse3([1,2,3]));
document.write('<br>');
document.write(reverse3([5,11,9]));
document.write('<br>');
document.write(reverse3([7,0,0]));
document.write('<br>');

//Q3

function has23(arr) {
    for ( var i = 0; i < arr.length; i++)
        {
            if (arr[i] == 2 || arr[i] == 3)
                {
                    return true;
                }
        }
    return false;
}

document.write(has23([2,5]));
document.write('<br>');
document.write(has23([4,3]));
document.write('<br>');
document.write(has23([4,5]));
document.write('<br>');

//Q4 

function fix23(arr) {
    
    for (var i = 0; i < arr.length; i++)
        {
            if ( arr[i]==2 && arr[i+1]==3)
                {
                    arr[i+1]=0;   
                }
        }
    return arr;
}

    
document.write(fix23([1,2,3]));
document.write('<br>');
document.write(fix23([2,3,5]));
document.write('<br>');
document.write(fix23([1,2,1]));
document.write('<br>');

//Q5
/*
function maxTriple(arr) {
    var first = arr[0];
    var mid = arr[1];
    var last = arr[2];
    
    if ((first > mid) && (first > last)) {
        return first;
    }
    else if ((mid > first) && (mid > last)) {
        return mid;
    }
    else {
        return last;
    }
}
*/

function maxTriple(arr) {
    var arrsort = arr.sort()
    return arrsort[arrsort.length-1];
}

document.write(maxTriple([1,2,3,]));
document.write('<br>');
document.write(maxTriple([1,5,3]));
document.write('<br>');
document.write(maxTriple([5,2,3]));
document.write('<br>');

//Q6

function swapEnds(arr) {
    var first = arr.shift();
    var last = arr.pop();
    return [last, arr, first];
}
document.write(swapEnds([1,2,3,4]));
document.write('<br>');
document.write(swapEnds([1,2,3]));
document.write('<br>');
document.write(swapEnds([8,6,7,9,5]));
document.write('<br>');

//Q7

function unlucky1(arr) {
    if ((arr.length == 0) || (arr.length == 1)) {
        return false;
        }
        else if 
                 ((arr[0] == 1 && arr[1] == 3) ||
                 (arr[1] == 1 && arr[2] == 3) ||
                 (arr[arr.length -1] == 3 && 
                  arr[arr.length -2] ==1)) {
        return true;
        }
        else {
            return false;
        }
    
}
document.write(unlucky1([1,3,4,5]));
document.write('<br>');
document.write(unlucky1([2,1,3,4,5]));
document.write('<br>');
document.write(unlucky1([1,1,1]));
document.write('<br>');

//Q8

function front11(a,b) {
    
    if (b[0] == "") {
        return a[0];
    }
    else if (a[0] == "") {
        return b[0];
    }
    else {
        return [a[0], b[0]];
    }
        
    
}
document.write(front11([1,2,3], [7,8,9]));
document.write('<br>');
document.write(front11([1], [2]));
document.write('<br>');
document.write(front11([1,7], []));
document.write('<br>');

//Q9

function isEverywhere(a,b) {
    
    
    for (var i = 0; i < a.length-1; i++) {
        if (a[i] != b && a[i+1] != b) 
              return false;     
        }
            return true;
    }

document.write(isEverywhere([1,2,1,3], 1));
document.write('<br>');
document.write(isEverywhere([1,2,1,3], 2));
document.write('<br>');
document.write(isEverywhere([1,2,1,3,4], 1));
document.write('<br>');

//Q10

function tenRun(arr) {
    
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] % 10 == 0) 
        {
            if (arr[i+1] % 10 != 0)
                arr[i+1] = arr[i]
        }
    }
    return arr;
}
document.write(tenRun([2,5,10,3,4,20,5]));
document.write('<br>');
document.write(tenRun([10,1,20,2]));
document.write('<br>');
document.write(tenRun([10,1,9,20]));
document.write('<br>');

//Q11

function twoTwo(arr) {
    
    for (var i = 1; i < arr.length-1; i++) {
        if (arr[i] == 2) {
            if (arr[i-1] == 2 || arr[i+1] == 2)
                continue;}
            else 
                return false;
    }
    return true;
}
document.write(twoTwo([4,2,2,3]));
document.write('<br>');
document.write(twoTwo([2,2,4]));
document.write('<br>');
document.write(twoTwo([2,2,4,2]));
document.write('<br>');

//Q12

function shiftLeft(arr) {
    if (arr.length >= 2)
    {
        var first = arr[0];
        for (var i = 0; i < arr.length-1; i++) 
            arr[i] = arr[i+1];
        arr[arr.length-1] = first;
    }
    return arr;
}
/*
function shiftLeft(arr) {
    arr.push(arr.shift());
    return arr;
}
*/
document.write(shiftLeft([6,2,5,3]));
document.write('<br>');
document.write(shiftLeft([1,2]));
document.write('<br>');
document.write(shiftLeft([1]));
document.write('<br>');

//Q13
/*
function evenOdd(arr) {
    var even = 0;
    var odd = arr.length-1;
    var array = [arr.length];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            {
                array[even] = arr[i];
                even++;
            }
        else {
            array[odd] = arr[i];
            odd--;
        }
    }
    return array;
}
*/

function evenOdd(arr) {
    for (var i = 0; i < arr.length-1; i++) 
    {
        if (arr[i] % 2 != 0)
        {
            arr.push(arr[i]);
            arr.splice(i,1);
        } 
        else if (arr[i] % 2 == 0)
        {
            arr.unshift(arr[i]);
            arr.splice(i+1,1)
        }
    }
    return arr;
}


document.write(evenOdd([1,0,1,0,0,1,1]));
document.write('<br>');
document.write(evenOdd([3,3,2]));
document.write('<br>');
document.write(evenOdd([2,2,2]));
document.write('<br>');

//Q14

function fizzBuzz(a,b) {
    var len = b - a;
    var array = [len];
    
    for (var i = 1; i < len + 1; i++)
        {
           var c = i + a - 1;
            var fizz = c % 3;
            var buzz = c % 5;
            if (fizz == 0)
                {
                    if (buzz == 0)
                        c = "FizzBuzz";
                    else c = "Fizz";
                }
            else {
                if (buzz == 0)
                    c = "Buzz";
                else c = c.valueOf();
            }
            array[i-1] = c
        }
    return array;
}
document.write(fizzBuzz(1,6));
document.write('<br>');
document.write(fizzBuzz(1,8));
document.write('<br>');
document.write(fizzBuzz(1,11));
document.write('<br>');

//Q15

function countClumps(arr) {
    
    var count = 0;
    for (var i = 0; i < arr.length-1; i++) 
        {
            if (arr[i] == arr[i+1])
                count++;
            while (i < arr.length-1 && arr[i] == arr[i+1])
                i++;
        }
    
            
        
        return count;
        }
    
    
document.write(countClumps([1,2,2,3,4,4]));
document.write('<br>');
document.write(countClumps([1,1,2,1,1]));
document.write('<br>');
document.write(countClumps([1,1,1,1,1]));

var DL=5;
var d=[25.0,9.0,10.0,25.0,15.0];
var mi=0;
var m=d[mi];
for (var i= 1;i<DL;i++){
    if (d[i]<m){
        mi=i;
        m=d[mi];
        console.log(m);
    }
}

console.log("mi=",mi,"m=",m);