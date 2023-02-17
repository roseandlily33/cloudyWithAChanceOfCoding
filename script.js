//Document selectors:
let searchBtn = document.getElementById('search-btn');
let citySel = document.getElementById('city-selected');
let storedCities = [];
//icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//Weather API:
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${citySel}&appid=481a34aaa4773c2f5214835ab96af44d';

fetch(apiUrl)
.then(function(response){
     if(response.status === 200){
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


//Fetch and Parse the data:



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


//for(var i = 0; i < data.length; i++){
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
   //repoContainerEl.appendChild(card);}

//Function that loads the content


//stores results in a panel




