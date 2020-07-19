class Weather {
    constructor(city, state) {
        this.api_key = 'b41dc1c7f6aa5e8b6a7167384da5ecbb';
        this.city = city;
        this.state = state;
    }

    // Get weather
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}&units=metric`);

        const result = await response.json();
        return result;
    }

    // Change Location
    changeLocation(city, state) {
        this.city = city;
        this.state =state;
    }
}