const apiKey = "167eb15305036c5927073f6010c040ca";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".input_value");
const searchBtn = document.querySelector(".search_btn");
const weather = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather_icon");
const error = document.querySelector(".error");
const message = document.querySelector(".message");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  // city name validation

  if (inputValue.value == "") {
    weather.style.display = "none";
    error.style.display = "block";
  } else if (response.status == 404) {
    weather.style.display = "none";
    error.style.display = "block";
  } else {
    error.style.display = "none";
    weather.style.display = "block";
  }
  // update weather value
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city_name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + "km/h";

  // weather config message and image
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
    message.innerHTML = "The weather is Clouds ";
  } else if (data.weather[0].main == "rain") {
    weatherIcon.src = "images/rain.png";
    message.innerHTML = "The weather is Rainy ";
  } else if (data.weather[0].main == "snow") {
    weatherIcon.src = "images/snow.png";
    message.innerHTML = "The weather is Snow ";
  } else if (data.weather[0].main == "mist") {
    weatherIcon.src = "images/snow.png";
    message.innerHTML = "The weather is Mist ";
  } else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "images/snow.png";
    message.innerHTML = "The weather is Drizzle ";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(inputValue.value);
});
