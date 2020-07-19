// Initialize Storage class
const storage = new Storage();

// Get Location from local storage
const weatherLocation = storage.getLocationData();

// Initialize Weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI class
const ui = new UI();

// Call getWeather method onload
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    storage.setLocationData(city, state);
    
    getWeather();

    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
    .then(data => {
        ui.paint(data);
        console.log(data);
    })
    .catch(err => console.log('Error'));
}

