function rotateLeft3(arr) {
	return [arr[1], arr[2], arr[0]];
}

console.log(rotateLeft3([1,2,3]));

function reverse3(arr) {
	return arr.reverse();
}

console.log(reverse3([1,2,3]));

function has23(arr) {
	return arr[0] == 2 || arr[0] == 3 || arr[1] == 2 || arr[1] == 3;
}

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));


function fix23(arr) {
	let myarr = arr;
	if (myarr[0] == 2 && myarr[1] == 3) {
		myarr[1] = 0;
	} else if (myarr[1] == 2 && myarr[2] == 3) {
		myarr[2] = 0;
	}
	return myarr;
}

console.log(fix23([1, 2, 3]));

function maxTriple(arr) {
	return [arr[0], arr[parseInt(arr.length/2)], arr[arr.length - 1]].sort()[arr.length-1];
}

console.log(maxTriple([7,5,3]));


function swapEnds(arr) {
	let temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;
	return arr;
}

console.log(swapEnds([1,2,3,4]));


function unlucky1(arr) {
	return ((arr[0] == 1 && arr[1] == 3) || (arr[1] == 1 && arr[2] == 3)) || (arr[arr.length-2] == 1 && arr[arr.length-1] == 3);
}


console.log(unlucky1([2, 1, 3, 4, 5]));

function front11(arr1, arr2) {
	if (arr1.length == 0 && arr2.length == 0){
		return [];
	} else if (arr1.length == 0 && arr2.length != 0){
		return [arr2[0]];
	} else if (arr1.length != 0 && arr2.length == 0){
		return [arr1[0]];
	} else {
		return [arr1[0], arr2[0]];
	}
}

console.log(front11([1,2,3],[7,9,8]));
console.log(front11([1],[2]));
console.log(front11([1,7],[]));


function isEverywhere(arr, num) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] != num && arr[i+1] != num) {
			return false;
		}
	}
	return true;
}

console.log(isEverywhere([1,2,1,3],1));
console.log(isEverywhere([1,2,1,3],2));
console.log(isEverywhere([1,2,1,3,4],1));


function tenRun(arr) {
	let newArr = [];
	let i = 0;
	while (i < arr.length){
		if (arr[i] % 10 != 0) {
			newArr.push(arr[i]);
			i++;
		} else {
			let m = arr[i];
			newArr.push(m);
			i++;
			while (arr[i] % 10 != 0 && i < arr.length) {
				newArr.push(m);
				i++;
			}
		}
	}
	return newArr;
	
}

console.log(tenRun([2,10,3,4,20,5]));
console.log(tenRun([10,1,20,2]));
console.log(tenRun([10,1,9,20]));


function twoTwo(arr) {
	if (arr.length == 1 && arr[0] == 2) {
		return false;
	}
	if (arr.length >= 2 && (arr[0] == 2 && arr[1] != 2)) {
		return false;
	}

	for(let i = 1; i < arr.length - 1; i++) {
		if (arr[i] == 2 && arr[i+1] != 2 && arr[i-1] != 2) {
			return false;
		}
	}
	return true;
}

console.log(twoTwo([4,2,2,3]));
console.log(twoTwo([2,2,3]));
console.log("debug: " + twoTwo([2,2,4,2,2]));


function shiftLeft(arr) {
	arr.push(arr.shift())
	return arr;
}

console.log(shiftLeft([6,2,5,3]));
console.log(shiftLeft([1,2]));
console.log(shiftLeft([1]));


function evenOdd(arr) {
	let even = [];
	let odd = [];
	for(let i = 0; i < arr.length; i++){
		if (arr[i] % 2 == 0){
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
	return even.concat(odd);
}

console.log(evenOdd([1,0,1,0,0,1,1]));
console.log(evenOdd([3,3,2]));
console.log(evenOdd([2,2,2]));


function fizzBuzz(start, end) {
	let arr = [];
	for(let i = start; i < end; i++) {
		if (i % 15 == 0) {
			arr.push("FizzBuzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else {
			arr.push(String(i));
		}
	}
	return arr;
}

console.log(fizzBuzz(1, 6));
console.log(fizzBuzz(1, 8));
console.log(fizzBuzz(1, 11));


function countClumps(arr) {
	let clumps = 0;
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i+1]) {
			if (i == 0) {
				clumps = 1;
			} else if (arr[i-1] != arr[i]){
				clumps++;	
			} 
		}
	}
	return clumps;
}

console.log(countClumps([1,2,2,3,4,4]));
console.log(countClumps([1,1,2,1,1]));
console.log(countClumps([1,1,1,1,1]));



