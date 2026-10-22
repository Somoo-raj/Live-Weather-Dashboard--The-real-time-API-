# Live Weather Dashboard 🌤️

A modern, responsive, and real-time weather application built with **Vanilla JavaScript**. It fetches live temperature, humidity, wind speed, and weather descriptions for any city worldwide without requiring any secret API keys or user sign-ups.

This project was built to master multi-step asynchronous API fetching (`fetch`, `async/await`), JSON data parsing, robust error handling (`try/catch`), and dynamic DOM manipulation.

---

## 🌟 Features

- **No API Key Required**: Powered by the **Open-Meteo API**, eliminating the need for hardcoded secret keys, making it 100% public GitHub safe.
- **Smart 2-Step Geocoding**: Automatically converts user-entered city names into exact geographic coordinates (Latitude and Longitude) before querying live weather data.
- **Real-Time Weather Metrics**: Displays accurate temperature, relative humidity, wind speed, and contextual weather descriptions with icons.
- **Dynamic UI State**: Hides/shows the weather card dynamically using CSS classes and DOM manipulation based on user input and API responses.
- **Robust Error Handling**: Gracefully manages invalid city inputs, spelling mistakes, or network dropouts using `try/catch` blocks.
- **Responsive Dark UI**: Clean, modern dark mode design styled with custom CSS flexbox and container layouts.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure.
- **CSS3**: Custom styling, layout design, and smooth visibility states.
- **JavaScript (ES6+)**: Asynchronous programming (`async/await`, `fetch` API, object mapping, event listeners).
- **APIs**:
  - [Open-Meteo Geocoding API](https://open-meteo.com/) (For city coordinate lookup)
  - [Open-Meteo Weather Forecast API](https://open-meteo.com/) (For real-time meteorological data)

---

## 📁 Project Structure

```text
weather-dashboard/
│
├── index.html       # Main HTML structure & UI layout
├── style.css        # Dashboard styling, grid layout, and hidden states
└── script.js        # Core 2-step API logic, data mapping, and DOM rendering


🚀 Getting Started & Installation
To run this project locally on your machine, follow these simple steps:
Clone or Download this repository to your local machine.
Open the project folder in your favorite code editor (like Visual Studio Code).
Open the index.html file directly in your web browser (or use the Live Server extension in VS Code for an optimal local development experience).
💡 How It Works
The user inputs a city name (e.g., Delhi, London, Tokyo) into the search bar and clicks Check Weather.
Step 1: An asynchronous request is sent to the Open-Meteo Geocoding API to retrieve the latitude and longitude of the specified city.
Step 2: Using those coordinates, a second request is sent to the Open-Meteo Forecast API to fetch current weather conditions.
The application parses the JSON response, maps the numerical weather code to a readable description, and updates the DOM dynamically.
🔮 Future Enhancements
[ ] Add a 7-day weather forecast breakdown using daily data arrays.
[ ] Implement recent search history using browser LocalStorage.
[ ] Add dynamic background animations or theme changes based on weather conditions (e.g., rainy vs sunny).
```
