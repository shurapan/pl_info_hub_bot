const fetch = require("node-fetch");

// export function getCurrentWeatherWithCoordinates() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.4501&lon=30.5234&exclude=current,minutely,hourly&appid=ffccaa299fc80096650a613b938c64b2&units=metric&lang=ua')
        .then((response) => {
            let data = response.json();

            return data
        })
        .then((data) => {
            console.log(data);
        });
// }