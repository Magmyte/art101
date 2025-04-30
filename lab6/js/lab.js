// Lab 6 Assignment
// Charles Haiwen & Nicole Maldonado
// 26 April 2025

// initiatize variables
var myTransport = ["car", "Santa Cruz Metro"];

//create object
myMainRide = {
  make: "Ford",
  model: "fiesta",
  color: "white",
  year: 2015,
  age: function() {
    return 2025 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");