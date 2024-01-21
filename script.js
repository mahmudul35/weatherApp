let searchBox = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let apiKey = "0a85f56c79c3d33b239c7cea5fc35798";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function cheakWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "rain.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
btn.addEventListener("click", () => {
  cheakWeather(searchBox.value);
});
