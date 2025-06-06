// Lab 16 Assignment
// Charles Haiwen & Austin Allen
// 5 June 2025

// initialize variable
var maxNum;
var newURL;

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
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
        //console.log(data);
        maxNum = data.num;
        //console.log(maxNum);
        newURL = "https://corsproxy.io/?https://xkcd.com/" + Math.floor(Math.random() * maxNum) + "/info.0.json";

        $.ajax({
            // The URL for the request (from the api docs)
            url: newURL,
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
                //console.log(data);
                var titleText = data.title;
                var imageURL = data.img;
                var imageAlt = data.alt;
                $("#output").html("<h3>" + titleText + "</h3>");
                $("#output").append("<img src='" + imageURL + "'>");
                $("#output").append("<p>" + imageAlt + "</p>");
            },
            // What we do if the api call fails
            error: function (jqXHR, textStatus, errorThrown) {
                // do stuff
                console.log("Error:", textStatus, errorThrown);
            }
        })
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})