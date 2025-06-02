// Lab 15 Assignment
// Charles Haiwen & Austin Allen
// 1 June 2025

// event listener
$("#activate").click(function () {
  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://cataas.com/cat",
    // The data to send (will be converted to a query string)
    data: {
      // here is where any data required by the api 
      //   goes (check the api docs)
      // id: 123,
      // api_key: "blahblahblah",
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function (data) {
      // do stuff
      console.log(data);
      var imgURL = data.url;
      $("#output").html("<img src='" + imgURL + "'>");
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
    }
  })
});