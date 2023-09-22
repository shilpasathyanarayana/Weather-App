const apiKey = "b1a87b4802856f65eecd224047f3e2e6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //q stands for query and it is standerd
// for all the api that provide search functionality

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=edmonton&appid=b1a87b4802856f65eecd224047f3e2e6

    var data = await response.json();  //this data will have all the information about the weather for all the city

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;  //here in the place of name we need to add the name apperes in the console for the city name

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; //main.temp is the path name where we can find temperature value in the console

        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; //wind informATION IS from speed which is inside wind in the console

        // updating images according to weather condition

        // if(data.weather[0].main =="Clouds"){
        //     weatherIcon.src =data.weather[0].main+".png";
        // }

        // else if(data.weather[0].main =="Clear"){
        //     weatherIcon.src ="clear.png";
        // }

        // else if(data.weather[0].main =="Rain"){
        //     weatherIcon.src ="rain.png";
        // }

        // else if(data.weather[0].main =="Drizzle"){
        //     weatherIcon.src ="drizzle.png";
        // }

        // else if(data.weather[0].main =="Mist"){
        //     weatherIcon.src ="mist.png";
        // }
        weatherIcon.src = data.weather[0].main.toLowerCase() + ".png";

        document.querySelector(".weather").style.display = "block";
        // if we enter the city name then the weather details will be shown otherwise display will be none

        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
