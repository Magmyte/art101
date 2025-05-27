// Lab 13 Assignment
// Charles Haiwen & Austin Allen
// 26 May 2025

// initialize variables
var factor1, factor2, factor3, factor4, maxNum, phrase1, phrase2, phrase3, phrase4, outputStr;
factor1 = 3;
factor2 = 4;
factor3 = 5;
factor4 = 7;

maxNum = 99;

phrase1 = "Fizz";
phrase2 = "Buzz";
phrase3 = "Boom";
phrase4 = "Bang";

$("#button").click(function () {

    factor1 = parseInt($("#inputNum1").val());
    factor2 = parseInt($("#inputNum2").val());
    factor3 = parseInt($("#inputNum3").val());
    factor4 = parseInt($("#inputNum4").val());

    phrase1 = $("#inputText1").val();
    phrase2 = $("#inputText2").val();
    phrase3 = $("#inputText3").val();
    phrase4 = $("#inputText4").val();

    maxNum = parseInt($("#inputNumMax").val()) + 1;

    outputStr = "";

    for (var i = 0; i < maxNum; i++) {
        outputStr += i;
        var firstPass = true;
        if (i % factor1 == 0 && factor1 > 0) {
            if (firstPass == true) {
                outputStr += " - ";
                firstPass = false;
            }
            outputStr += phrase1;
        }
        if (i % factor2 == 0 && factor2 > 0) {
            if (firstPass == true) {
                outputStr += " - ";
                firstPass = false;
            }
            outputStr += phrase2;
        }
        if (i % factor3 == 0 && factor3 > 0) {
            if (firstPass == true) {
                outputStr += " - ";
                firstPass = false;
            }
            outputStr += phrase3;
        }
        if (i % factor4 == 0 && factor4 > 0) {
            if (firstPass == true) {
                outputStr += " - ";
                firstPass = false;
            }
            outputStr += phrase4;
        }
        if (firstPass == false) {
            outputStr += "!";
        }
        outputStr += "<br>";
    }

    $("#output").html(outputStr);

});