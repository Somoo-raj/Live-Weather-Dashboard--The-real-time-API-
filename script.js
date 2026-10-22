const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherDisplay = document.getElementById("weather-display");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

// Helper map to convert weather code into Hindi/English description.
const weatherCodes = {
  0: "Clear sky ☀️",
  1: "Mainly clear 🌤️",
  2: "Partly cloudy ⛅",
  3: "Overcast ☁️",
  45: "Foggy 🌫️",
  48: "Depositing rime fog 🌫️",
  51: "Light drizzle 🌧️",
  61: "Slight rain 🌧️",
  63: "Moderate rain 🌧️",
  65: "Heavy rain 🌧️",
  80: "Slight rain showers 🌦️",
  95: "Thunderstorm ⛈️",
};

// 1. add click event to the searchBtn
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("First write the name of the city!");
    return;
  }
  fetchWeather(city);
});

// 2. Async function that will fetch weather without key in a 2-step process
async function fetchWeather(city) {
  try {
    // UI reset & loading state
    cityName.innerText = "Searching for the weather...";
    weatherDisplay.classList.remove("hidden");

    // step 1: Finding latitude & longitude from city name (geocoding)
    const geoURl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const geoResponse = await fetch(geoURl);
    const geoData = await geoResponse.json();

    // If the city is not found
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found!");
    }

    const location = geoData.results[0];
    const lat = location.latitude;
    const lon = location.longitude;
    const displayName = `${location.name}, ${location.country || ""}`;

    // step 2: Get live weather data from Lat/Lon
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    // Updating data on the UI
    displayWeather(displayName, weatherData.current);
  } catch (error) {
    console.error(error);
    cityName.innerText = "Error!";
    temperature.innerText = "--";
    description.innerText =
      "The city name may be wrong or there may be an internet issue.";
    humidity.innerText = "--%";
    windSpeed.innerText = "-- km/h";
  }
}

// Function to show data on UI
function displayWeather(displayName, currentData) {
  cityName.innerText = displayName;
  temperature.innerText = Math.round(currentData.temperature_2m);

  // Remove text from weather code (Default: "Unknown Weather")
  const weatherDesc =
    weatherCodes[currentData.weather_code] || "Weather Update";
  description.innerText = weatherDesc;

  humidity.innerText = `${currentData.relative_humidity_2m}%`;
  windSpeed.innerText = `${currentData.wind_speed_10m} km/h`;

  // Showing the weather card on the screen (by removing the .hidden class)
  weatherDisplay.classList.remove("hidden");
}
