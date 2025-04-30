// Lab 7 Assignment
// Charles Haiwen & Ailish Smith
// 30 April 2025

//initialize the variable
var userName;
userName = window.prompt("Hello. Please tell me your name so I can sort it.");

// function to sort a name alphabetically
function sortUserName(userName) {
  console.log("userName = ", userName);

  //split string to array
  var nameArray = userName.split("");
  console.log("nameArray = ", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);

  //join array back to a string
  var nameSorted = nameArraySort.join("");
  console.log("nameSorted = ", nameSorted)

  return nameSorted;
}

// function to sort a name alphabetically regardless of case
function sortUserName1(userName) {
  var nameSorted = userName.split("").sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).join("");

  return nameSorted;
}

// function to omit spaces
function sortUserName2(userName) {
    var nameSorted = userName.replace(" ","").split("").sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).join("");

  return nameSorted;
}

// function to shuffle the name into an anagram
function sortUserName3(userName) {
  var wordsArray = userName.toLowerCase().split(" ");

  for (var i = 0; i < wordsArray.length; i++) {
    var tempArray = wordsArray[i].split("");

    shuffle(tempArray);

    tempArray[0] = tempArray[0].toUpperCase();

    wordsArray[i] = tempArray.join("");
  }

  var nameSorted = wordsArray[0];

  for (var i = 1; i < wordsArray.length; i++) {
    nameSorted = nameSorted.concat(" ");
    nameSorted = nameSorted.concat(wordsArray[i]);
  }

  return nameSorted;
}

// shuffle function
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

// output
document.writeln("Here's your sorted name: ", sortUserName(userName), "<br>");
document.writeln("And another one: ", sortUserName1(userName), "<br>");
document.writeln("And again: ", sortUserName2(userName), "<br>");
document.writeln("And one more time for good measure: <div id=\"funnyName\">", sortUserName3(userName), "</div></br>");