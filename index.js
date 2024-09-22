const userTab = document.querySelector("[ data-userWeather]");
const searchTab = document.querySelector("[ data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessConatiner = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-SearchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initially variables need
let currentTab = userTab;
const WeatherAPI = "7c353b6d1ba274ad4d9bb99043ddfbcd";
currentTab.classList.add("current-tab");

function switchTab(clickedTab) {
  apiErrorContainer.classList.remove("active");

  if (clickedTab !== currentTab) {
    currentTab.classList.remove("current-tab"); //remove all the properties of current tab.
    currentTab = clickedTab; //add properties of current tab
    currentTab.classList.add("current-tab");

    if (!searchForm.classList.contains("active")) {
      //kya search form wala container is invisible, if yes then make it viisible. 
      userInfoContainer.classList.remove("active");
      grantAccessConatiner.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");
      getFromSessionStorage();
    }

    console.log("Current Tab", currentTab);
  }
}

userTab.addEventListener("click", ()=>{
  switchTab(userTab);
});

searchTab.addEventListener("click", ()=>{
  switchTab(searchTab);
});





















console.log("hii");


function renderWeatherInfo(data) {
  // Create new paragraph element to display weather

  let newPara = document.createElement("p");

  // Make sure the weather data is available and display temperature
  if (data?.main?.temp) {
    newPara.textContent = `${data.main.temp.toFixed(2)}°C`;
  } else {
    newPara.textContent = "Unable to retrieve temperature data";
  }

  document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let city = "goa";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherAPI}&units=metric`
    );

    // Correctly parse the response
    const data = await response.json();
    console.log("Weather data:", data);

    renderWeatherInfo(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Call the function to test
showWeather();

async function getCustomWeatherDetails() {
  try {
    let latitude = 17.3333;
    let longitude = 18.3333;

    let result = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WeatherAPI}&units=metric`);

    let data = await result.json();

    console.log(data);
  } catch (error) {
    console.log("Error found", error);
  }
  
}



function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else{
    console.log("No geolocation");
  }
}

function showPosition(position){
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}
