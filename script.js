///IMPORTANT NOTE: this code is similar to the one in my project because we also used 
///openweather api and fetching information from it was one of my contributions to the project.

var button = document.querySelector('#searchbutton');
var temperatureValue;
var humidityValue;
var input = document.querySelector('#cityname');

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {
        
        temperatureValue = data['main']['temp'];
        humidityValue = data ['main']['humidity'];
        DescriptionValue = data['weather'][0]['description'];
        NameValue = data['name'];
        console.log("(fetch primary level)Temperature (ºC): " + temperatureValue);
        console.log("(fetch primary level))Description: " + DescriptionValue);
        console.log("(fetch primary level)Humidity (%): " + humidityValue); 
        console.log("(fetch primary level)Name: " + NameValue);

          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
     

   
} 

// Button: runs main fetch function. 

button.addEventListener('click', informationfunction);



//fetch ('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e')
//.then(response => response.json())
//.then(data => {
    
//    temperatureValue = data['main']['temp'];
//    humidityValue = data ['main']['humidity'];
//    DescriptionValue = data['weather'][0]['description'];
//    NameValue = data['name'];
//    console.log("(fetch primary level)Temperature (ºC): " + temperatureValue);
//    console.log("(fetch primary level))Description: " + DescriptionValue);
//    console.log("(fetch primary level)Humidity (%): " + humidityValue); 
//    console.log("(fetch primary level)Name: " + NameValue);
