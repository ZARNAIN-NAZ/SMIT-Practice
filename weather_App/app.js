window.getWeather = function(){

let cityName = document.querySelector("#cityName").value;
let API_KEY = '4757a065b000a311c75b1c890bc4bbee';
// axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY }`)
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

  .then(function (response) {
    // handle success
    console.log(response.data);
    // document.querySelector('#result').innerHTML=`current temprature of ${response.data.name} is ${response.data.main.temp} °C `
    document.querySelector("#result").innerHTML = `current temprature of ${response.data.name} is ${response.data.main.temp}°C`


  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector('#result').innerHTML='error in getting weather data!'
  })
  

}

// ndsmsmsmsm

// 4757a065b000a311c75b1c890bc4bbee


