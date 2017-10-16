//Q1.

function reverseString(str) {
 
    return str.split("").reverse().join("");

}
document.write(reverseString("Hello"));
document.write('<br>');
document.write(reverseString("Howdy"));
document.write('<br>');

//Q2.
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num-1);
}
document.write(factorialize(5));
document.write('<br>');
document.write(factorialize(10));
document.write('<br>');
document.write(factorialize(20));
document.write('<br>');
document.write(factorialize(0));
document.write('<br>');

//Q3.
function palindrome(str) {
    var strCheck = str.replace(/[\W_]/g, '').toLowerCase();
    var strReverse = str.replace(/[\W_]/g,'').toLowerCase().split('').reverse().join('');
    if ( strReverse === strCheck)
        {
            return true;
        }
    else 
    {
        return false;
    }
}
document.write(palindrome("eye"));
document.write('<br>');
document.write(palindrome("_eye"));
document.write('<br>');
document.write(palindrome("not a plaindrome"));
document.write('<br>');
document.write(palindrome("A man, a plan, a canal, Panama"));
document.write('<br>');
document.write(palindrome("never odd or even"));
document.write('<br>');
document.write(palindrome("nope"));
document.write('<br>');
document.write(palindrome("My age is 0, 0 si ega ym."));
document.write('<br>');


//Q4.
function findLongestWord(str) {
   var arr = str.split(" ");
   var maxLength = 0;
  
  for (var i = 0; i < arr.length; i++) {
     if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

 return maxLength;
}
document.write(findLongestWord("The quick brown fox jumped over the lazy dog"));
document.write('<br>');
document.write(findLongestWord("May the force be with you"));
document.write('<br>');
document.write(findLongestWord("Google do a barrel roll"))
document.write('<br>');


//Q5.
function titleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}
document.write(titleCase("I'm a little tea pot"));
document.write(titleCase("I'm a little tea pot"));
document.write('<br>');
document.write(titleCase("sHoRt AnD sToUt"));
document.write('<br>');
document.write(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
document.write('<br>');

//Q6.
function largestOfFour(arr) {
 var result = [];
 for (var i = 0 ; i < arr.length; i++)
     {
         var largestN = arr[i][0];
         for (var sb = 1; sb < arr[i].length; sb++)
             {
                 if (arr[i][sb] > largestN)
                     {
                         largestN = arr[i][sb];
                     }
             }
         result[i] = largestN;
     }
    return result;
}
document.write(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
document.write('<br>');
document.write(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
document.write('<br>');
document.write(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
document.write('<br>');
//Q7.
function confirmEnding(str, target) {
  return str.substring(str.length-target.length)==target;
}
document.write(confirmEnding("Bastian", "n"));
document.write('<br>');
document.write(confirmEnding("Connor", "n"));
document.write('<br>');
document.write(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
document.write('<br>');
document.write(confirmEnding("He has to give me a new name", "name"))
document.write('<br>');