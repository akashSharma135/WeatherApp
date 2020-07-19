class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-description');
        this.temprature_string = document.getElementById('w-temprature_string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feels_like = document.getElementById('w-feels_like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.feels_like.textContent = `Feels-Like: ${weather.main.feels_like} C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} MPH`;
        this.temprature_string.textContent = `${weather.main.temp} C`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    }
}