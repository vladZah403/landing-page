//Получаем прогноз в массив data
fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.45&lon=34.9833&appid=3a4fd0c6c98e54f048cee6795700f961').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
       
    });


    fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.55&lon=10&appid=3a4fd0c6c98e54f048cee6795700f961').then(function (resp) {return resp.json() }).then(function (data) {
    document.querySelector('.weather__city2').textContent = data.name;
    document.querySelector('.weather__forecast2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather__desc2').textContent = data.weather[0]['description'];
    document.querySelector('.weather__icon2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        
    });


    fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.7143&lon=-74.006&appid=3a4fd0c6c98e54f048cee6795700f961').then(function (resp) {return resp.json() }).then(function (data) {
    document.querySelector('.weather__city3').textContent = data.name;
    document.querySelector('.weather__forecast3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather__desc3').textContent = data.weather[0]['description'];
    document.querySelector('.weather__icon3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        
    });

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.0883&lon=14.4208&appid=3a4fd0c6c98e54f048cee6795700f961').then(function (resp) {return resp.json() }).then(function (data) {
    document.querySelector('.weather__city4').textContent = data.name;
    document.querySelector('.weather__forecast4').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather__desc4').textContent = data.weather[0]['description'];
    document.querySelector('.weather__icon4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        
    });