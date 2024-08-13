function displayTemperature(response) {
  let currentTemperature = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  currentTemperature.innerHTML = temperature;
  let cityInput = document.querySelector("#current-city");
  cityInput.innerHTML = response.data.city;
}

function displayCity(event) {
  event.preventDefault();
  let search = document.querySelector("#search-input");
  let city = search.value;
  let apiKey = "of08ta1f90c49d4b081b6aa347d98489";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
