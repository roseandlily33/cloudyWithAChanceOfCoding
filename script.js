//Document selectors:
let searchBtn = document.getElementById('search-btn');
let searchCont = document.getElementById('searchCont');
let todayCont = document.getElementById('todaysWeather');
let fiveDayConts = document.getElementById('bottomCard')
let storedCities = [];
let citySel = document.getElementById('city-selected')


//icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
//Geo:
//let geo = `http://api.openweathermap.org/geo/1.0/reverse?lat=`+ lat +`&lon` + lon + `&limit={limit}&appid=481a34aaa4773c2f5214835ab96af44d`;
//Weather API:
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon`+lon+ `&appid=481a34aaa4773c2f5214835ab96af44d`;

 citySel.addEventListener('click', function(){
    console.log(apiUrl);
 })
fetch(apiUrl)
.then(function(response){
     if(response.ok){
        console.log(response);
        response.json();
        //.then(function(data){
           // displayRepos(data,user);
       // })
    } //else {alert('Error' + response.status)}
})
.then(function(data){
    console.log(data);
})
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

function fiveDayWeather(){
  //  let fiveDays = daily[1]
  for(var i = 1; i < 6; i++){
    //The city for the main card
   
   //let card = document.getElementByClassName('card');
   //Need to do the date for the main one only:

   //What Temperature it is:
   //let tempEl = document.createElement('h2');
   //tempEl.classList = 'temperature';
   //tempEl.textContent = data[i].  ;
   //Sets the humidity:
   //let humidityEl = document.createElement('h2');
   //humidityEl.classList = 'humidity';
   //humidityEl.textContent = data[i].  ;
   ////What the wind speed is:
   //let windEl = document.createElement('h2');
   //windEl.classList = 'wind';
   //windEl.textContent = data[i].   ;

   //card.appendChild(tempEl, humidityEl, windEl);
   //repoContainerEl.appendChild(card);
fiveDayConts.append()
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




