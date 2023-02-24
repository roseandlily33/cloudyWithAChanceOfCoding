//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchList');
let todayCont = document.getElementById('todaysWeather');
let cardA = document.getElementById('cardA')
let cardB = document.getElementById('cardB');
let cardC = document.getElementById('cardC');
let cardD = document.getElementById('cardD');
let cardE = document.getElementById('cardE');
 searchBtn.addEventListener('click', searchForCity);
 //Variables:
 let storedCities = [];
//Takes the searched city and uses geo
function searchForCity(e){
    e.preventDefault();
    let searchedCity = document.getElementById('city-selected').value;
    console.log(searchedCity);
//Gets the geographical thing:
    var geoAPI = 'https://api.openweathermap.org/geo/1.0/direct?q='+ searchedCity +'&appid=4ab93242dec1348d0b0205c9c67aca26';
   
    fetch(geoAPI)
    .then(function(response){
        if(response.ok){
        console.log('GEOAPI'+ response)
         return  response.json();}
    })
    .then(function(data){
        console.log('GEOAPI' + data);
        getWeather(data);
    })
    //City is stored in the array of search results in localStorage:
    if(searchedCity && !storedCities.includes(searchedCity)){
        storedCities.push(searchedCity);
        localStorage.setItem('storedCities', JSON.stringify(storedCities));
        showSearched();
    } 
}
//Gets the weather api:
function getWeather(data){
    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log('lan'+ lat + 'lon' + lon);
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon=`+lon+ `&units=metric&appid=4ab93242dec1348d0b0205c9c67aca26`;

fetch(apiUrl)
  .then(function(response){
     if(response.ok){
        console.log(response);
        return response.json();
    } else {alert('Error' + response.status)}})
  .then(function(data){
    console.log('APIDATA:'+ data);
    todaysWeather(data);
    fiveDayWeather(data);
    })
}

//Function that loads the content for today
function todaysWeather(data){
    todayCont.innerHTML = '';
    let cityEl = document.createElement('h1');
    cityEl.textContent = data.city.name + '  '+ dayjs().format('MMM DD, YYYY');
    let iconEl = document.createElement('img');
    iconEl.src = 'https://openweathermap.org/img/wn/'+(data.list[0].weather[0].icon)+'.png';
    let tempEl = document.createElement('h2');
    //Math.floor - to make it a whole number
    tempEl.textContent = 'Temperature: ' + Math.floor(data.list[0].main.temp) + ' °C';
    let windEl = document.createElement('h2');
    windEl.textContent = 'Wind Speed: ' + Math.floor(data.list[0].wind.speed * 3.6) +' km/h';
    let humidityEl = document.createElement('h2');
    humidityEl.textContent = 'Humidity: ' + data.list[0].main.humidity + ' %';
    todayCont.append(cityEl, iconEl, tempEl, windEl, humidityEl);
}
function fiveDayWeather(data){
    //Fixes the problem that the next info was just going underneath the old
    cardA.innerHTML = '';
    cardB.innerHTML = '';
    cardC.innerHTML = '';
    cardD.innerHTML = '';
    cardE.innerHTML = '';
    console.log(data);
    let dateA = document.createElement('h5');
    dateA.textContent = data.list[6].dt_txt;
    let iconA = document.createElement('img');
    iconA.src = 'https://openweathermap.org/img/wn/'+(data.list[6].weather[0].icon)+'.png';
    let tempA = document.createElement('h5');
    tempA.textContent = 'Temperature '+ Math.floor(data.list[6].main.temp) + ' °C';
    let humA = document.createElement('h5');
    humA.textContent = 'Humidity:' + Math.floor(data.list[6].main.humidity) + ' %';
    let windA = document.createElement('h5');
    windA.textContent = 'Wind: ' + Math.floor(data.list[6].wind.speed) + ' km/h';
    cardA.append(dateA, iconA, tempA, humA, windA);

    let dateB= document.createElement('h5');
    dateB.textContent = data.list[14].dt_txt;
    let iconB = document.createElement('img');
    iconB.src = 'https://openweathermap.org/img/wn/'+(data.list[14].weather[0].icon)+'.png';
    let tempB = document.createElement('h5');
    tempB.textContent = 'Temperature: ' + Math.floor(data.list[14].main.temp) + ' °C';
    let humB = document.createElement('h5');
    humB.textContent = 'Humidity: ' + Math.floor(data.list[14].main.humidity) + ' %';
    let windB = document.createElement('h5');
    windB.textContent = 'Wind: ' + Math.floor(data.list[14].wind.speed) + ' km/h';
    cardB.append(dateB, iconB, tempB, humB, windB);
    

    let dateC = document.createElement('h5');
    dateC.textContent = data.list[22].dt_txt;
    let iconC = document.createElement('img');
    iconC.src = 'https://openweathermap.org/img/wn/'+(data.list[22].weather[0].icon)+'.png';
    let tempC = document.createElement('h5');
    tempC.textContent = 'Temperature: ' + Math.floor(data.list[22].main.temp) + ' °C';
    let humC = document.createElement('h5');
    humC.textContent = 'Humidity: ' + Math.floor(data.list[22].main.humidity) + ' %';
    let windC = document.createElement('h5');
    windC.textContent = 'Wind: ' + Math.floor(data.list[22].wind.speed) + ' km/h';
    cardC.append(dateC, iconC, tempC, humC, windC);

    let dateD = document.createElement('h5');
    dateD.textContent = data.list[30].dt_txt;
    let iconD = document.createElement('img');
    iconD.src = 'https://openweathermap.org/img/wn/'+(data.list[30].weather[0].icon)+'.png';
    let tempD = document.createElement('h5');
    tempD.textContent = 'Temperature: ' + Math.floor(data.list[30].main.temp) + ' °C';
    let humD = document.createElement('h5');
    humD.textContent = 'Humidity: ' + Math.floor(data.list[30].main.humidity) + ' %';
    let windD = document.createElement('h5');
    windD.textContent = 'Wind: ' + Math.floor(data.list[30].wind.speed) + ' km/h';
    cardD.append(dateD, iconD, tempD, humD, windD);
    
    let dateE = document.createElement('h5');
    dateE.textContent = data.list[38].dt_txt;
    let iconE = document.createElement('img');
    iconE.src = 'https://openweathermap.org/img/wn/'+(data.list[38].weather[0].icon)+'.png';
    let tempE = document.createElement('h5');
    tempE.textContent = 'Temperature: ' + Math.floor(data.list[38].main.temp) + ' °C';
    let humE = document.createElement('h5');
    humE.textContent = 'Humidity: ' + Math.floor(data.list[38].main.humidity) + ' %';
    let windE = document.createElement('h5');
    windE.textContent = 'Wind: ' + Math.floor(data.list[38].wind.speed) + ' km/h';
    cardE.append(dateE, iconE, tempE, humE, windE);
}
//stores results in a panel:
function showSearched(){
    searchCont.innerHTML = '';
    //get the projects from localStorage:
    let storedCities = JSON.parse(localStorage.getItem('storedCities'));
    //loop through and append to container:
    for(let i = 0; i < storedCities.length; i++){
        let showCity = storedCities[i];
        let li = document.createElement('li');
        li.textContent = showCity;
        li.addClass = 'searchedFor';
        searchCont.append(li);
    }
};
 //When searched city is clicked it searches for it again
 searchCont.addEventListener('click', function(e){
    e.preventDefault();
    let clicked = e.target;
    if(clicked.matches('li')){
        console.log(searchForCity(e));
        searchForCity(e);
    } else {
        return;
    }
    
});
showSearched();