/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Lab 12 Assignment
   Author: Charles Haiwen & Austin Allen
   Date: 20 May 2025
*/

// initialize variable
var outputStr = "";
var outputImg = "";

var outputArr1 = ["Corrino", "Harkonnen", "Richese", "Halleck", "Metulli"];
var outputArr2 = ["house_corrino_2021.webp", "house_harkonnen_2021.webp", "house_richese.webp", "house_halleck.webp", "house_metulli.webp"];

// hash function
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function sortingHat(inputStr) {
  var number = hashCode(inputStr) % outputArr1.length;
  
  outputImg = "<img class='house-image' src='img/" + outputArr2[number] + "'>";

  return "You have been assigned to House " + outputArr1[number] + " of the Landsraad.";
}

/* first iteration - works but unncessary

function sortingHat(inputStr) {
  if (inputStr.length % 4 == 0) {
    outputStr = "You have been assigned to House Corrino of the Landsraad.";
    outputImg = "<img class='house-image' src='img/house_corrino_2021.webp'>";
  }
  else if (inputStr.length % 4 == 1) {
    outputStr = "You have been assigned to House Harkonnen of the Landsraad.";
    outputImg = "<img class='house-image' src='img/house_harkonnen_2021.webp'>";
  }
  else if (inputStr.length % 4 == 2) {
    outputStr = "You have been assigned to House Richese of the Landsraad.";
    outputImg = "<img class='house-image' src='img/house_richese.webp'>";
  }
  else {
    outputStr = "You have been assigned to House Halleck of the Landsraad.";
    outputImg = "<img class='house-image' src='img/house_halleck.webp'>";
  }

  return outputStr;
}

*/

// click listener for button
$("#button").click(function(){
  // get value of input field
  var name = $("#input").val();

  // run function with input
  var house = sortingHat(name);

  // output the result
  $("#output").html('<p>' + house + '</p><br>' + outputImg);
});