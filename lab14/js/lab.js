// Lab 6 Assignment
// Charles Haiwen & 
// 26 April 2025

// initiatize variables
var myTransport = ["Nissan skyline", "Santa Cruz Metro"];

//create object
myMainRide = {
  make: "Nissan",
  model: "Skyline",
  color: "red",
  year: 1995,
  age: function() {
    return 2025 - year;
  }
}

//output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");