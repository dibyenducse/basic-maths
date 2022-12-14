//Pyramid Triangel

let len = 7;
let star = "*";
let space = "";

for(i=0; i<len; i++){
  console.log(star.repeat(i))
}

//Return the Next Number from the Integer Passed
function addition(num) {
	let sum = num+(+1)
  return sum;
}
console.log(addition(-3))

//Find the Perimeter of a Rectangle

function findPerimeter(length, width) {
	let perimeter = 2*(length+width);
  return perimeter;
}
console.log(findPerimeter(2,9))

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
	 if(a+b<100){
    return true;
   }
   return false;
}
console.log(lessThan100(83,34))

//Buggy Code (Part 5)

function printArray(a){
  let newArray =[];
  for(let i=0; i<=a;i++){
    newArray.push(i)
  }
  return newArray;
}

console.log(printArray(6))

//The Farm Problem
/*The farmer has counted his animals and he gives you a subtotal 
for each species. You have to implement a function that returns the 
total number of legs of all the animals.*/

function animals(chickens, cows, pigs) {
  var chickensLeg= 2;
  var cowsLeg=4;
  var pigsLeg=4;

	let sum=((chickens*chickensLeg)+(cows*cowsLeg)+(pigs*pigsLeg));
  return sum;
}
console.log(animals(2,3,5))

//Are the Numbers Equal?
/* Create a function that returns true when num1 is equal to num2; 
otherwise return false.*/
function isSameNum(num1, num2) {
	if(num1==num2){
    return true;
  }
  return false;
}
console.log(isSameNum(2,5))

//Two Makes Ten
/*Create a function that takes two arguments. Both arguments are integers, a and b. 
Return true if one of them is 10 or if their sum is 10. */

function makesTen(a,b){
  if(a==10 || b==10|| a+b==10){
    return true;
  }
  return false;
}
console.log(makesTen(2,5))

//Recursion: Length of a String
/* Write a function that returns the length of a string. 
Make your function recursive.*/

function length(str){
  let sLength = str.length;
  return sLength;
}
console.log(length(""));

//Drop The First Element of An Array
/*According to the lodash documentation, _.drop creates a slice of an 
array with n elements dropped from the beginning.
Your challenge is to write your own version using vanilla JavaScript.*/

function drop(arr, end) {

   let strt= 0;
   let brray =arr.splice(strt,end)
   return arr;
}

console.log(drop([1,2,3],2))