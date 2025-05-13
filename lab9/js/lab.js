/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Lab 9 Assignment
   Author: Charles Haiwen & Austin Allen
   Date: 10 May 2025
*/

// add button to each section
$(".button-press").append("<button class='button-challenge'>Make Special</button>");

// add a click listener to the button
$(".button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $(this).parent().toggleClass("special");
});