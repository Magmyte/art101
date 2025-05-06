// Lab 8 Assignment
// Charles Haiwen & Austin Allen
// 30 April 2025

// initiatize variables
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The basic array: ", arr);

// define square function - returns the input squared
function sqr(inputVar) {
  return inputVar * inputVar;
}

// test the squaring function
var result1 = arr.map(sqr);

// should return an array: (10) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log("The array with square numbers: ", result1);

// test the addition function, adding one to each element of the array
var result2 = arr.map(function(inputVar) {
  inputVar++;
  return inputVar;
})

// should return an array: (10) [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log("The array with every number added to 1: ", result2);

// use jQuery to select the element by its ID and set the HTML content
var finalResult = "The basic array: ";
finalResult = finalResult.concat(arr).concat("<br>The array with square numbers: ").concat(result1).concat("<br>The array with every number added to 1: ").concat(result2).concat("</br>");

$("#output").html(finalResult);