//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

// this code is only invoked on the path /bmiCalculator
app.get("/f2c", function(req, res){
  res.sendFile(__dirname + "/f2cCalc.html");
});

// invoked on the submit button
app.post("/f2c", function(req, res){

//converts the string input in the form to an integer
  var tempF = parseInt(req.body.tempF);

// does the computation of f2c
  var tempC = ((tempF - 32) * 5/9);

//display the result in Centigrade with zero decimal places
res.send(tempF + " Fahrenheit is " + tempC.toFixed(0) + " in Centigrade");

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
