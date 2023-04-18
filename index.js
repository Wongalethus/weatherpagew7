function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.main.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.winde.speed);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";
let city = "Cape Town";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics}`;

axios.get(apiUrl).then(displayTemperature);

let url = "https://jsonplaceholder.typicode.com/comments";

axios.get(url).then(displayTemperature);
