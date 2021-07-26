let weather = {
    apiKey: "43589df45778b5178f575dcb44458988",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid="
         + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
        },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
    }        
 };
        
