/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Lab 9 Assignment
<<<<<<< Updated upstream
   Author: Charles Haiwen & Austin Allen
   Date: 10 May 2025
*/

// add button to each section
$(".button-press").append("<button class='button-challenge'>Make Special</button>");

// add a click listener to the button
$(".button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $(this).parent().toggleClass("special");
=======
   Author: Charles Haiwen
   Date: 5 May 2025
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
>>>>>>> Stashed changes
});