//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchList');
let todayCont = document.getElementById('todaysWeather');
//let fiveDayCont = document.getElementById('fiveDaysCont');
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
    var geoAPI = 'http://api.openweathermap.org/geo/1.0/direct?q='+ searchedCity +'&appid=4ab93242dec1348d0b0205c9c67aca26';
   
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
    if(searchedCity){
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
    iconEl.src = 'http://openweathermap.org/img/wn/'+(data.list[0].weather[0].icon)+'.png';
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
    console.log(data);
    //cardA.textContent = 
    //let iconA = document.createElement('img');
    cardA.textContent = 'http://openweathermap.org/img/wn/'+(data.list[7].weather[0].icon)+'.png';
    //let tempA = document.createElement('h3');
    cardA.textContent = 'Temperature '+ Math.floor(data.list[7].main.temp) + ' °C';
    cardA.textContent = 'Humidity:' + Math.floor(data.list[7].main.humidity) + ' %';
    cardA.textContent = 'Wind: ' + Math.floor(data.list[7].wind.speed) + ' km/h';
   //cardA.append(iconA);
    //cardB.textContent = 
    cardB.textContent = 'http://openweathermap.org/img/wn/'+(data.list[15].weather[0].icon)+'.png';
    cardB.textContent = 'Temperature: ' + Math.floor(data.list[15].main.temp) + ' °C';
    cardB.textContent = 'Humidity: ' + Math.floor(data.list[15].main.humidity) + ' %';
    cardB.textContent = 'Wind: ' + Math.floor(data.list[15].wind.speed) + ' km/h';
    
    //cardC.textContent = 
    cardC.textContent = 'http://openweathermap.org/img/wn/'+(data.list[23].weather[0].icon)+'.png';
    cardC.textContent = 'Temperature: ' + Math.floor(data.list[23].main.temp) + ' °C';
    cardC.textContent = 'Humidity: ' + Math.floor(data.list[23].main.humidity) + ' %';
    cardC.textContent = 'Wind: ' + Math.floor(data.list[23].wind.speed) + ' km/h';

   //cardD.textContent = 
    cardD.textContent = 'http://openweathermap.org/img/wn/'+(data.list[31].weather[0].icon)+'.png';
    cardD.textContent = 'Temperature: ' + Math.floor(data.list[31].main.temp) + ' °C';
    cardD.textContent = 'Humidity: ' + Math.floor(data.list[31].main.humidity) + ' %';
    cardD.textContent = 'Wind: ' + Math.floor(data.list[31].wind.speed) + ' km/h';
    
    //cardE.textContent = 
    cardE.textContent = 'http://openweathermap.org/img/wn/'+(data.list[39].weather[0].icon)+'.png';
    cardE.textContent = 'Temperature: ' + Math.floor(data.list[39].main.temp) + ' °C';
    cardE.textContent = 'Humidity: ' + Math.floor(data.list[39].main.humidity) + ' %';
    cardE.textContent = 'Wind: ' + Math.floor(data.list[39].wind.speed) + ' km/h';
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
showSearched();







