// Importing Necessary Libraries
const express = require ("express"); // To create the server 
const https = require("https"); // To make API requests with the HTTPS protocol 
const bodyParser = require ("body-parser") // To parse post request body 

const app = express(); // Create an instance of express 

// Serve static files from the "public" directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true})); // Support URL-encoded bodies when parsing post requests 



// Defines route-handler to handle GET request for root (/) route  
app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html"); // Send html template file back to client for displaying 

});

// Defines route-handler to handle POST request for root (/) route 
app.post("/", function(req, res){
    
    // Extract City name entered by the user from request body received 
    const query = req.body.cityName; 
    
    const apiKey = "13449e82a2aeb10b22d3a62d2a00bd49"; // Unique API Key obtained after sign up with api-provider 
    const unit = "metric"; // Set units of measurement for temperature to be Celsius 
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey; // API Endpoint to get Weather Details  

    // Make HTTPS Request to API Endpoint 
    https.get(url, function(response){
        console.log(response.statusCode); // Log Status Code returned by API
  
        // Listen for incoming data in the form of JSON response from API
        response.on("data", function(data){
            const weatherData = JSON.parse(data); // Parse JSON data to object 
            const temp = weatherData.main.temp; // Get Temperature data from JSON object 
            const weatherDescription = weatherData.weather[0].description; // Get a description of the weather from JSON object 
            const icon = weatherData.weather[0].icon; // Get Icon code based on openweathermap documentation 
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"; // Construct Icon image URL based on openweathermap documentation 
            
            // Send response body with HTML data to client 
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src=" + imageURL + ">");
            
        })
    })

});

// Start listening to incoming requests on port 3000
app.listen(3000, function() {
    console.log("Server is running on port 3000.")});
