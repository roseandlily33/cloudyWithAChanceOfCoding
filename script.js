//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchList');
let todayCont = document.getElementById('todaysWeather');
let fiveDayConts = document.getElementById('bottomCard')

 searchBtn.addEventListener('click', searchForCity);
 //Variables:
 let storedCities = [];

//icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//Gets the weather api:
function getWeather(){
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon`+lon+ `&appid=4ab93242dec1348d0b0205c9c67aca26`;

fetch(apiUrl)
  .then(function(response){
     if(response.ok){
        console.log(response);
         response.json();
    } else {alert('Error' + response.status)}})
  .then(function(data){
    console.log('APIDATA:'+ data);
    })
}
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
        return response.json();}
    })
    .then(function(data){
        console.log('GEOAPI' + data);
        todaysWeather(data);
        //fiveDayWeather(data);
        //do something with the geo data
    })
    //Make sure city is valid to be pushed into array and stored:
    if(searchedCity){
        storedCities.push(searchedCity);
        localStorage.setItem('storedCities', JSON.stringify(storedCities));
        showSearched();
    }
    return;
    console.log(storedCities);
}

function fiveDayWeather(data){
// let fiveDays = daily[1]
  for(var i = 1; i < fiveDayConts; i++){
 
  // let card = document.getElementByClassName('card');  
   let iconCard = document.createElement('img');
   iconCard.classList = 'img';
   //iconCard.textContent = ;
  
   let tempCard = document.createElement('h2');
   tempCard.classList = 'temperature';
   tempCard.textContent = 'Temperature:' + data[i].main.temp;

   let humidityCard = document.createElement('h2');
   humidityCard.classList = 'humidity';
   humidityCard.textContent = 'Humidity:' + data[i].main.humidity;

   let windCard = document.createElement('h2');
   windCard.classList = 'wind';
   windCard.textContent = 'Wind:' + data[i].wind.speed;

    card.appendChild(iconCard, tempCard, humidityCard, windCard);
   //repoContainerEl.appendChild(card);
    fiveDayConts.append(card);
}}

//Function that loads the content for today
function todaysWeather(data){
    todayCont.innerHTML = '';
    //dx_txt =date and time text
    let cityEl = document.createElement('h1');
    //cityEl.textContent = 'City:' + data.city;
    let dateEl = document.createElement('h2');
    //dateEl.textContent = 'Date:' + data
    let iconEl = document.createElement('img');
   // iconEl.src = `http://openweathermap.org/img/wn/$(data[0].weather[0].icon).png`;
    let tempEl = document.createElement('h2');
   // tempEl.textContent = 'Temperature:' + data.list[0].main.temp;
    let windEl = document.createElement('h2');
    //windEl.textContent = 'Wind Speed:' + data.list[0].wind.speed;
    let humidityEl = document.createElement('h2');
    //humidityEl.textContent = 'Humidity:' + data.list[0].main.humidity;

    todayCont.append(cityEl, dateEl, iconEl, tempEl, windEl, humidityEl);

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
        searchCont.append(li);
    }
};
showSearched();







