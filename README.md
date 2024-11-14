
# Weather Application

A weather app that provides real-time weather data for a city or from the user's location, including temperature, humidity, wind speed, and more.

## Features

- Displays current weather based on the user's location or searched city.
- Fetches data using OpenWeather API.
- Displays detailed weather information including temperature, wind speed, and humidity.
- Supports geolocation to fetch weather for the user's current location.
- Dynamic and responsive UI.

## Technologies Used

- **HTML5** - Structure and content.
- **CSS3** - Styling and layout.
- **JavaScript** - Logic, API interaction, and UI control.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KunduVineet/WeatherApplication.git
   ```
2. Navigate to the project directory:
   ```bash
   cd WeatherApplication
   ```
3. Open `index.html` in your browser.

## Usage

1. Open the app in your browser.
2. Use the tabs to switch between "Your Weather" and "Search Weather".
3. Click "Grant Access" to allow the app to use your location.
4. Enter a city name in the search bar and click the search button to get weather data.

## API

The app uses the OpenWeather API to fetch weather data. Ensure to replace the API key (`7c353b6d1ba274ad4d9bb99043ddfbcd`) with your own key for production use.

## File Structure

```
/index.html      # Main HTML file
/styles.css      # Styling for the app
/index.js        # JavaScript logic for weather fetching and UI management
/Location.svg    # Location icon for geolocation access
/Search.svg      # Search icon for initiating search
/Loading.svg     # Loading animation
/Wind.svg        # Wind icon
/Humidity.svg    # Humidity icon
/Clouds.svg      # Cloud icon
```

## License

This project is licensed under the MIT License.
