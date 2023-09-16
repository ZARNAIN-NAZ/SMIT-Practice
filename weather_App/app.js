let getWeather = function(){

let cityName = document.querySelector("#cityName").value;
let API_KEY = '4757a065b000a311c75b1c890bc4bbee';
axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY }`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector('#result').innerHTML='weather data successfully retrieve:)'

  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector('#result').innerHTML='error in getting weather data!'
  })
  

}



// 4757a065b000a311c75b1c890bc4bbee


