///IMPORTANT NOTE: this code is similar to the one in my project because we also used 
///openweather api and fetching information from it was one of my contributions to the project.

var button = document.querySelector('#searchbutton');

var input = document.querySelector('#cityname');

var historyelement;

/////CURRENT 
var citymain = document.querySelector("#citynametag");
var temperaturemain = document.getElementById('temperaturetag');
var windmain = document.getElementById('windtag');
var uvindexmain = document.getElementById('uvindextag');
var humiditymain = document.getElementById('humiditytag');
var iconmain = document.getElementById('icontag');
var latvalue = 0;
var lonvalue = 0;


//CARD DAY 0

var officialdate0 = document.getElementById('date0');
var icon0 = document.getElementById('icon0');
var temp0 = document.getElementById('temp0');
var wind0 = document.getElementById('wind0');
var humidity0 = document.getElementById('humidity0');

//CARD DAY 1

var officialdate1 = document.getElementById('date1');
var icon1 = document.getElementById('icon1');
var temp1 = document.getElementById('temp1');
var wind1 = document.getElementById('wind1');
var humidity1 = document.getElementById('humidity1');

//CARD DAY 2

var officialdate2 = document.getElementById('date2');
var icon2 = document.getElementById('icon2');
var temp2 = document.getElementById('temp2');
var wind2 = document.getElementById('wind2');
var humidity2 = document.getElementById('humidity2');

//CARD DAY 3
var officialdate3 = document.getElementById('date3');
var icon3 = document.getElementById('icon3');
var temp3 = document.getElementById('temp3');
var wind3 = document.getElementById('wind3');
var humidity3 = document.getElementById('humidity3');

//CARD DAY 4
var officialdate4 = document.getElementById('date4');
var icon4 = document.getElementById('icon4');
var temp4 = document.getElementById('temp4');
var wind4 = document.getElementById('wind4');
var humidity4 = document.getElementById('humidity4');

///historybank

var historybank = document.getElementById('historybank')




var date1;
var dateday1;
var date2;
var dateday2;
var date3;
var dateday3;
var date4;
var dateday4;
var date0;
var dateday0;
var datecurrent;
var datedaycurrent;





////

function informationfunction() {

    

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {


        NameValue = data['name'];
        latvalue = data['coord']['lat'];
        lonvalue = data['coord']['lon'];
        var DateValue = data ['dt']
        var realDateValue = (new Date (DateValue*1000)).toLocaleDateString('es-MX');
       console.log(realDateValue)
        citymain.innerHTML = NameValue + " " + realDateValue

        //////creating history element////
        historyelement = document.createElement('button');
        historyelement.innerHTML = NameValue
        historyelement.setAttribute("class","btn btn-block btn-info bg-primary");
        historyelement.setAttribute("id", "historybutton")
        historybank.appendChild(historyelement);

          
    })
    
    console.log("Test in fetch (secondary level)");


    fetch ('https://api.openweathermap.org/data/2.5/onecall?lat='+latvalue+'&lon='+lonvalue+'&exclude=hourly,minutely,alerts&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {
        
        /////////CURRENTCARD
    var thecurrenttemp = data.current.temp
    var thecurrenthumidity = data.current.humidity
    var thecurrentwind = data.current.wind_speed
    var thecurrentuvi =  data['daily'][0]['uvi']
    iconmain.innerHTML = ""
    
     temperaturemain.innerHTML ="Temperature: "+  thecurrenttemp + " °C"
     windmain.innerHTML = "Wind Speed: " + thecurrentwind + " m/s"
     uvindexmain.innerHTML = "UV Index: "+ thecurrentuvi
     humiditymain.innerHTML = "Humidity " + thecurrenthumidity + "%"
     var officialiconcurrent = data['current']['weather'][0]['icon'];

        var imgcurrent = document.createElement('img');
        imgcurrent.setAttribute('src', "http://openweathermap.org/img/wn/" + officialiconcurrent + ".png")
        
        console.log("this is the icon0" + officialiconcurrent)

        iconmain.appendChild(imgcurrent);
        




        //////////CARD0
        console.log (data.daily[1].dt)
        var dateday0 = data.daily[1].dt
        var date0 = (new Date (dateday0*1000)).toLocaleDateString('es-MX');
        console.log (date0)
        officialdate0.innerHTML = date0
        icon0.innerHTML = ''
      
        var officialtemp0 = data['daily'][1]['temp']['day']
        var officialwind0 = data['daily'][1]['wind_speed']
        var officialhumidity0 = data['daily'][1]['humidity']
        var officialicon0 = data['daily'][1]['weather'][0]['icon'];

        var img0 = document.createElement('img');
        img0.setAttribute('src', "http://openweathermap.org/img/wn/" + officialicon0 + ".png")
        
        console.log("this is the icon0" + officialicon0)


        
        
        icon0.appendChild(img0)
        temp0.innerHTML ="Temperature: "+  officialtemp0 + " °C"
        wind0.innerHTML = "Wind Speed: " +  officialwind0 + " m/s"
        humidity0.innerHTML = "Humidity: " +  officialhumidity0 + " %"

        //////////CARD1
        console.log (data.daily[2].dt)
        var dateday1 = data.daily[2].dt
        var date1 = (new Date (dateday1*1000)).toLocaleDateString('es-MX');
        console.log (date1)
        officialdate1.innerHTML = date1
        icon1.innerHTML = ''

        var officialtemp1 = data['daily'][2]['temp']['day']
        var officialwind1 = data['daily'][2]['wind_speed']
        var officialhumidity1 = data['daily'][2]['humidity']
        var officialicon1 = data['daily'][2]['weather'][0]['icon'];
        
        var img1 = document.createElement('img');
        img1.setAttribute('src', "http://openweathermap.org/img/wn/" + officialicon1 + ".png")
        
        console.log("this is the icon0" + officialicon1)


        
        
        icon1.appendChild(img1)
        temp1.innerHTML = "Temperature: " + officialtemp1 + " °C"
        wind1.innerHTML = "Wind Speed: " + officialwind1 + " m/s"
        humidity1.innerHTML = "Humidity: " + officialhumidity1 + " %"


        //////////CARD2
        console.log (data.daily[3].dt)
        var dateday2 = data.daily[3].dt
        var date2 = (new Date (dateday2*1000)).toLocaleDateString('es-MX');
        console.log (date2)
        officialdate2.innerHTML = date2
        icon2.innerHTML = ''

        var officialtemp2 = data['daily'][3]['temp']['day']
        var officialwind2 = data['daily'][3]['wind_speed']
        var officialhumidity2 = data['daily'][3]['humidity']
        var officialicon2 = data['daily'][3]['weather'][0]['icon'];
        
        var img2 = document.createElement('img');
        img2.setAttribute('src', "http://openweathermap.org/img/wn/" + officialicon2 + ".png")
        
        console.log("this is the icon0" + officialicon2)


        
        
        icon2.appendChild(img2)
        temp2.innerHTML =  "Temperature: " + officialtemp2 + " °C"
        wind2.innerHTML =  "Wind Speed: " + officialwind2 + " m/s"
        humidity2.innerHTML =  "Humidity: " + officialhumidity2 + " %"

        //////////CARD3
        console.log (data.daily[4].dt)
        var dateday3 = data.daily[4].dt
        var date3 = (new Date (dateday3*1000)).toLocaleDateString('es-MX');
        console.log (date3)
        officialdate3.innerHTML = date3
        icon3.innerHTML = ''

        var officialtemp3 = data['daily'][4]['temp']['day']
        var officialwind3 = data['daily'][4]['wind_speed']
        var officialhumidity3 = data['daily'][4]['humidity']
        var officialicon3 = data['daily'][4]['weather'][0]['icon'];
        
        var img3 = document.createElement('img');
        img3.setAttribute('src', "http://openweathermap.org/img/wn/" + officialicon3 + ".png")
        
        console.log("this is the icon0" + officialicon3)


        
        
        icon3.appendChild(img3)
        temp3.innerHTML =  "Temperature: " +  officialtemp3 + " °C"
        wind3.innerHTML = "Wind Speed: " + officialwind3 + " m/s"
        humidity3.innerHTML =   "Humidity: " + officialhumidity3 + " %"

        //////////CARD4
       

        console.log (data.daily[5].dt)
        var dateday4 = data.daily[5].dt
        var date4 = (new Date (dateday4*1000)).toLocaleDateString('es-MX');
        console.log (date4)
        officialdate4.innerHTML = date4
        icon4.innerHTML = ''

        var officialtemp4 = data['daily'][5]['temp']['day']
        var officialwind4 = data['daily'][5]['wind_speed']
        var officialhumidity4 = data['daily'][5]['humidity']
        var officialicon4 = data['daily'][5]['weather'][0]['icon'];
       
        var img4 = document.createElement('img');
        img4.setAttribute('src', "http://openweathermap.org/img/wn/" + officialicon4 + ".png")
        
        console.log("this is the icon0" + officialicon4)


        
        
        icon4.appendChild(img4)
        temp4.innerHTML =  "Temperature: " + officialtemp4 + " °C"
        wind4.innerHTML = "Wind Speed: " +  officialwind4 + " m/s"
        humidity4.innerHTML =    "Humidity: " + officialhumidity4 + " %"

        if(thecurrentuvi <= 2)   {
            uvindexmain.classList.add("favorable");
        } 
   
        if( ( thecurrentuvi >=3)&&(thecurrentuvi<=9 )  ) {
            uvindexmain.classList.add("moderate");
        }
        
        if(thecurrentuvi > 10){
            uvindexmain.classList.add("severe");
        }







        



          
    })
    
     

   
} 

// Button: runs main fetch function. 

button.addEventListener('click', informationfunction);




///////////////////Section in case you click one of the history buttons



function historyname (){
    console.log("you clicked the button")
   



}

historyelement.addEventListener('click', historyname);