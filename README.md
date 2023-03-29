# WeatherProject

A simple weather app that displays the temperature and weather description for a given city. The app uses the OpenWeatherMap API to fetch weather data and displays the results on a webpage. The app is built with Node.js and Express.js.

## Installation

1. Clone the repository to your local machine.
        ``` https://github.com/VadymFES/WeatherProject.git ```
2. Install the required dependencies by running the following command in the project directory:
        ``` npm install ```
3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up for a free account.
4. Replace ```your_api_key_here``` in ```app.js``` with your API key.
        ``` const apiKey = "your_api_key_here" ```
 
 ## Usage
 
1. Start the server by running the following command in the project directory:
2. Open a web browser and go to ``` http://localhost:3000 ``` to access the weather app.
3. Enter a city name in the input field and click ``` "GO" ``` to get the current temperature and weather description for that city.

## Technologies Used

This project uses the following technologies:

* Node.js
* Express.js
* Body-parser
* OpenWeatherMap API
