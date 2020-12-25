import React from 'react';
import '../CSS/weather.css';

document.addEventListener('DOMContentLoaded', () =>{
const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const api ={
  key: api_key,
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
if(searchbox){
    searchbox.addEventListener("keypress", setQuery);
}

function setQuery(evt){
  if(evt.keyCode === 13){
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.current .hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
  let x = document.querySelector(".current .hi-low");
  x.style.opacity = 1;
}

function dateBuilder(d){
  let months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}

})

function Weather(){
  return(
    <>
      <header>
        <input type="text" autocomplete="off" class="search-box" placeholder="Search for a city..."></input>
      </header>
      <main>
          <section class="location">
            <div class="city"> Enter a city!</div>
            <div class="date"></div>
          </section>
          <div class="current">
            <div class="temp"></div>
            <div class="weather"></div>
            <div class="hi-low">0°C / 0°C</div>
          </div>
      </main>
    </>
  );
}

export default Weather;
