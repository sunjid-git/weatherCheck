// getting all the element
const showCity = document.getElementById('show-city');
const showTemperature = document.getElementById('show-temperature');
const showWeatherType = document.getElementById('show-weather-type');
const weatherIcon = document.getElementById('show-weather-icon');


// api call
const getWeatherData = city => {

    const api = '8453b8e8242b0824175cc9d29b6f9fbe';
    const site = `https://api.openweathermap.org/data/2.5/weather`;
    
    const url = `${site}?q=${city}&units=metric&appid=${api}`;
    fetch(url)
    .then(res => res.json())
    .then(data => updatingStatus(data))
}    

// searching city on Button click 
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity);

})    

// ui updating
const updatingStatus = data =>{
    showCity.innerText = data.name || 'Wrong City Name';
    showTemperature.innerText = data.main.temp;
    showWeatherType.innerText = data.weather[0].description;
    weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    
}













