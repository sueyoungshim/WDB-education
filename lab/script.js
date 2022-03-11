let weather = {
    apiKey: "c454b2382434315b235079fda748bb34",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { country } = data.sys;
        console.log(name, icon, description, temp);
        // display data
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText = temp + " °F";
        
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button")
.addEventListener("click", () => {
    weather.search();
});

document.querySelector(".search-button")
.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
    weather.search();
});

weather.fetchWeather("Berkeley");