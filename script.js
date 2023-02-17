//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchCont');
let todayCont = document.getElementById('todaysWeather');
let fiveDayConts = document.getElementById('bottomCard')
let storedCities = [];
let citySel = document.getElementById('city-selected')


//icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//Weather API:
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon`+lon+ `&appid=4ab93242dec1348d0b0205c9c67aca26`;
//var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=4ab93242dec1348d0b0205c9c67aca26`;

 citySel.addEventListener('submit', function(){
    console.log(apiUrl);
 })
fetch(apiUrl)
.then(function(response){
     if(response.ok){
        console.log(response);
         return response.json();
        //.then(function(data){
           // displayRepos(data,user);
       // })
    } //else {alert('Error' + response.status)}
})
.then(function(data){
    console.log(data);
})

function getGeo(){
    var geoAPI = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
    fetch(geoAPI)
    .then(function(response){
        console.log('GEOAPI'+response)
        return response.json();
    })
    .then(function(data){

    })
}
//Store the results in localStorage

//Click on the search button to start loading the content
//searchBtn.addEventListener('click', storeCity);
//Stores the search and puts it in the box:
//function storeCity(e){

   // e.preventDefault();
    //store what city was selected:
    //var city = citySel.value.trim();

    //if(city){
        //getUserRepos?(city);
        //Clear the form input
       // citySel.textContent = '';

        //push it to the array
       // storedCities.push(city);
    //} else { alert('Please enter a valiv city name')}
//}


//function searchForCity(){

    

//}
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

//Function that loads the content
function todaysWeather(){
    let today = daily[0];
    console.log(today);
    todayCont.innerHTML = '';
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




