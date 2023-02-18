//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchCont');
let todayCont = document.getElementById('todaysWeather');
let fiveDayConts = document.getElementById('bottomCard')
let citySel = document.getElementById('city-selected')

//Event Listeners:
citySel.addEventListener('submit', function(){
   // console.log(apiUrl);
 });
 searchBtn.addEventListener('click', storeCity);
 //Variables:
 let storedCities = [];

//icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;


//Gets the weather api:
function getWeather(){

    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon`+lon+ `&appid=4ab93242dec1348d0b0205c9c67aca26`;
    //var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=4ab93242dec1348d0b0205c9c67aca26`;

fetch(apiUrl)
  .then(function(response){
     if(response.ok){
        console.log(response);
         return response.json();
    } else {alert('Error' + response.status)}})
  .then(function(data){
    console.log('APIDATA:'+ data);
       // displayRepos(data,user);
       //Can do something with the data returne
    })
}
//Gets the geographical thing:
function getGeo(){
    var geoAPI = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
    fetch(geoAPI)
    .then(function(response){
        if(response.ok){
        console.log('GEOAPI'+response)
        return response.json();}
    })
    .then(function(data){
        console.log('GEOAPI' + data);
        //do something with the geo data

    })
}
//Run when the submit button is pressed:
function storeCity(e){
      e.preventDefault();
      var citySearched = citySel.value.trim();

    if(citySearched){
       citySel.textContent = '';
       storedCities.push(citySearched);
    } else { alert('Please enter a valid city name')}
}
//function previousSearchCity(e){
    //Target the selected city in the list to display it on the screen
    //var oldCity = e.target//.getAttribute('data-whatever);
   // if(oldCity){
     //   repoContainerEl.textContent = '';
   // }

//}

function fiveDayWeather(data){
// let fiveDays = daily[1]
  for(var i = 1; i < 6; i++){
 
   //let card = document.getElementByClassName('card');   
   let tempEl = document.createElement('h2');
   tempEl.classList = 'temperature';
   tempEl.textContent = data[i].main.temp;

   let humidityEl = document.createElement('h2');
   humidityEl.classList = 'humidity';
   humidityEl.textContent = data[i].main.humidity;

   let windEl = document.createElement('h2');
   windEl.classList = 'wind';
   windEl.textContent = data[i].wind.speed;

   //card.appendChild(tempEl, humidityEl, windEl);
   //repoContainerEl.appendChild(card);
//fiveDayConts.append()
}}

//Function that loads the content for today
function todaysWeather(data){
    let today = daily[0];
    console.log(today);
    todayCont.innerHTML = '';
    //dx_txt =date and time text
    let cityEl = document.createElement('h1');
    let dateEl = document.createElement('h2')
    let iconEl = document.createElement('img');
    let tempEl = document.createElement('h2');
    let windEl = document.createElement('h2');
    let humidityEl = document.createElement('h2');

    todayCont.append(cityEl,dateEl, iconEl, tempEl, windEl, humidityEl);

}
//stores results in a panel:
function showSearched(){
    let searchedCities = JSON.parse(localStorage.getItem('savedCities'));
    if(searchedCities !== null){
        for(let i = 0; i < storedCities.length; i++){
            let newListItem = document.createElement('li');
            let cityName = storedCities[i];
            newListItem.textContent(cityName);
         searchCont.append(newListItem);
        }

    } else {
        return;
    } 
};




