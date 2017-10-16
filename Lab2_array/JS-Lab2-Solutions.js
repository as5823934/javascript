// Question 1
function rotate(collection) {

  var first = collection.shift();
  collection.push(first);
  
  return collection;
}

var myArray1 = [1, 2, 3];
var newArray = rotate(myArray1);

console.log(newArray.toString());


// Question 2
function reverseOrder(collection) {
  return collection.reverse();  
}

var myArray2 = [1,2,3];
console.log(reverseOrder(myArray2));


//Question 3
function has23(collection){
	return collection.includes(2) || collection.includes(3);    
}

var myArray3 = [2, 5];
console.log(has23(myArray3));


//Question 4
function fix23(collection){
    for(let index = 0; index < collection.length - 1; index++) {
        if(collection[index] == 2 && collection[index+1] == 3) {
            collection[index+1] = 0
        }
    }
    return collection;
  
}

var myArray4 = [1, 2, 3];
console.log(fix23(myArray4).toString());
myArray4 = [2, 3, 5];
console.log(fix23(myArray4).toString());
myArray4 = [1, 2, 1];
console.log(fix23(myArray4).toString());


//Question 5
function maxTriple(collection) {
    var size = collection.length;
    var first, last, middle, max;
            
    if(size > 0 && (size % 2 != 0)){        
        first = collection[0];
        last = collection[size - 1];
        middle = collection[Math.floor(size / 2)];

        return Math.max(first, last, middle);
    }
}

var myArray5 = [1,2,3];
console.log(maxTriple(myArray5));
myArray5 = [1,5,3];
console.log(maxTriple(myArray5));
myArray5 = [5,2,3,7,9,8,1];
console.log(maxTriple(myArray5));


//Question 6
function swapEnds(collection) {    
    var first = collection.shift();
    var last  = collection.pop();
    
    collection.unshift(last);
    collection.push(first);
    
    return collection;
}

var myArray6 = [1, 2, 3, 4];
console.log(swapEnds(myArray6).toString());
myArray6 = [1, 2, 3];
console.log(swapEnds(myArray6).toString());
myArray6 = [8, 6, 7, 9, 5];
console.log(swapEnds(myArray6).toString());


//Question 7
function unlucky1(collection) {    
    var last = collection.length - 2;
  
    if((collection[0] = 1 && collection[1] == 3) || 
       (collection[1] = 1 && collection[2] == 3) || 
       (collection[last] = 1 && collection[last + 1] == 3) ) {
      
      return true;
    }   
  
    return false;
}

var myArray7 = [1, 3, 4, 5];
console.log(unlucky1(myArray7), true);
myArray7 = [2, 1, 3, 4, 5];
console.log(unlucky1(myArray7), true);
myArray7 = [1, 1, 1];
console.log(unlucky1(myArray7), false);
myArray7 = [1, 2, 1, 3, 5];
console.log(unlucky1(myArray7), false);


//Question 8
function front11(collection1, collection2){
	// Empty array
    var newCollection = [];
    
	if(collection1.length > 0){
		newCollection.push(collection1[0]);
	}
    
	if(collection2.length > 0){
		newCollection.push(collection2[0]);
	}
    
	return newCollection;
}

console.log(front11([1, 2, 3], [7, 9, 8]), [1, 7]);
console.log(front11([1], [2]), [1, 2]);
console.log(front11([1, 7], []), [1]);


//Question 9
function isEverywhere(collection, number) {
    var size = collection.length - 1; 

    for(let index = 0; index < size; index++) {
        if(collection[index] != number && collection[index+1] != number){
            return false;
        }
    }  

    return true;
}
console.log('1: ' + isEverywhere([1,2,1,3],1));
console.log('2: ' + isEverywhere([1,2,1,3],2));
console.log('3: ' + isEverywhere([1, 2, 1, 3, 1], 1)); 
console.log('4: ' + isEverywhere([1, 2, 4, 3, 1], 1)); 
console.log('5: ' + isEverywhere([1, 2, 4, 1, 3], 1)); 
console.log('6: ' + isEverywhere([1, 2, 1, 1, 3], 1)); 
console.log('7: ' + isEverywhere([1, 2, 1, 5, 1], 1));
console.log('8: ' + isEverywhere([1, 2, 1, 3, 4], 1));


//Question 10
function tenRun(collection) {
	var tenMode = -1;
    
	for(let index = 0; index < collection.length; index++) {
		if(collection[index] % 10 == 0) {
			tenMode = collection[index];
        }
		else if(tenMode != -1) {
			collection[index] = tenMode;
        }
	}
    
	return collection;    
}
console.log(tenRun([2, 10, 3, 4, 20, 5]));
console.log(tenRun([10, 1, 20, 2]));
console.log(tenRun([10, 1, 9, 20])); 


//Question 11
function twoTwo(collection) {
	var count = 0;
    
	for(let index = 0; index < collection.length; index++) {
		if(collection[index] == 2){
			count++;
        }
		else {
			if(count == 1){
				return false;
            }
			else{
				count = 0;
            }
		}
	}
    
	return (count != 1);
}
console.log(twoTwo([4, 2, 2, 3]));
console.log(twoTwo([2, 2, 4]));
console.log(twoTwo([2, 2, 4, 2]));


//Question 12
function shiftLeft(collection){
    var first = collection.shift();
    collection.push(first); 

    return collection;
}
console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1]));


//Question 13
function evenOdd(collection){
	var newCollection = [];
    
	for(let index = 0; index < collection.length; index++) {
        var element = collection[index];
        
		if((element % 2) == 0){
            // Add at the beginning
			newCollection.unshift(element);
		}else{
            // Add at the end
			newCollection.push(element);			
		}
	}
	return newCollection;
}
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));
console.log(evenOdd([3, 3, 2]));
console.log(evenOdd([2, 2, 2]));


//Question 14
function fizzBuzz(start, end){
	var collection = [];
    
	for(let index = start; index < end; index++){
        
		if((index % 3) == 0) {
			collection.push('Fizz');
		} else if((index % 5) == 0) {
			collection.push('Buzz');
		} else {
            // Add as a string  
			collection.push(''+ index);
		}
	}
	return collection;
}
console.log(fizzBuzz(1, 6));
console.log(fizzBuzz(1, 8));
console.log(fizzBuzz(1, 11));


//Question 15
function countClumps(collection) {    
    var clumps = 0;
    var isClump = false;
    var size = collection.length - 1; 
    
    for(let index = 0; index < size; index++){
        if(isClump){
            if(collection[index] != collection[index+1]){
                isClump = false;
            }
        }
        else if(collection[index] == collection[index+1]){
            isClump = true;
            clumps++;
        }
    }
    
    return clumps;    
}
console.log(countClumps([1, 2, 2, 3, 4, 4]), 2);
console.log(countClumps([1, 1, 2, 1, 1]), 2);
console.log(countClumps([1, 1, 1, 1, 1]), 1);