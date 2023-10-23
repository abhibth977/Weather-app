
let apiKey = "2b068769bd7c90cc3b4f54b1de8712ec";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search-icon");
let weatherIcon = document.querySelector(".weather-icon");

async function weather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    let slider = document.querySelector(".slider-container");

    if(searchBox.value == ""){
        alert("Please enter a city name. ")
        slider.style.display = "block";
    }

    if(response.status == 404){
        alert("Please enter valid City Name.");
        slider.style.display = "block";
    } else{
        slider.style.display = "block";
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".country").innerHTML = data.sys.country;
     document.querySelector(".humidity-gen").innerHTML = data.main.humidity +"%";
     document.querySelector(".wind-gen").innerHTML = data.wind.speed + " km/h";

     // Store the temperature data
     celsiusTemperature = data.main.temp;

     // Update the temperature display with the initially selected unit (Celsius)
     updateTemperatureDisplay("Celsius");

     if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="img/clouds.png"
     } else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png"
     } else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
     } else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
     } else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
     } else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "img/haze.png";
     } else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png";
     }

    }

     
}

searchBtn.addEventListener("click", ()=>{
    weather(searchBox.value);
})



const switchButton = document.getElementById('switchButton');

switchButton.addEventListener('change', () => {
    const slider = document.querySelector('.slider');
    if (switchButton.checked) {
        slider.style.backgroundColor = '#000';
        updateTemperatureDisplay("Fahrenheit");
        // Handle ON state
    } else {
        slider.style.backgroundColor = '#000';
        updateTemperatureDisplay("Celsius");
        // Handle OFF state
    }
});

let temperatureElement = document.querySelector(".temp");

// Celsius and Fahrenheit temperature values
let celsiusTemperature;

// Function to update the temperature display
function updateTemperatureDisplay(unit) {
    if (unit === "Celsius") {
        temperatureElement.textContent = celsiusTemperature + "°C";
    } else if (unit === "Fahrenheit") {
        // Convert Celsius to Fahrenheit
        let fahrenheitValue = (celsiusTemperature * 9/5) + 32;
        temperatureElement.textContent = fahrenheitValue.toFixed(2) + "°F";
    }
};




// Get the current date and time in the desired format
    function getCurrentDateTime() {
      
        const now = new Date();
        
        // Options for formatting the date and time
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            // second: 'numeric',
        };
        
        // Format the date and time as a string
        const dateTimeString = now.toLocaleDateString('en-US', options);
        
        // Update the HTML element with the current date and time
        const dateTimeElement = document.getElementById("currentDateTime");
        if (dateTimeElement) {
                dateTimeElement.textContent =  dateTimeString;
        }
    }
        
// Update the current date and time initially
    getCurrentDateTime();
        
// Update the current date and time every second (1000 milliseconds)
    setInterval(getCurrentDateTime, 1000);






