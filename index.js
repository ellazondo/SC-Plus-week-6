function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");

  let header = document.querySelector("header");
  if (searchInput.value) {
    header.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "e450bc345a80a08ada69fd5c714d871d";
let city = "#searchInput.value";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp-click");
  let description = document.querySelector("#temp-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather.description;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let now = new Date();
let h3 = document.querySelector("h3");

let date = now.getDate();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} ${date} ${month} ${year} `;
