const weatherBackgrounds = {
  "Clear": "linear-gradient(to bottom, #4DA0FF, #FFFFFF)", 
  "Partly cloudy": "linear-gradient(to bottom, #A1C4FD, #C2E9FB)",
  "Cloudy": "linear-gradient(to bottom, #7D8A96, #B0BEC5)",
  "Overcast": "linear-gradient(to bottom, #636C72, #AAB7B8)", 
  "Mist": "linear-gradient(to bottom, #D3D3D3, #E6E6E6)", 
  "Patchy rain possible": "linear-gradient(to bottom, #5D6874, #8A8F96)", 
  "Rain": "linear-gradient(to bottom, #3C4C55, #6D7C85)", 
  "Thunderstorm": "linear-gradient(to bottom, #2C3E50, #232526)", 
  "Snow": "linear-gradient(to bottom, #DDEEFF, #BFD8EF)", 
  "Fog": "linear-gradient(to bottom, #C4C4C4, #E0E0E0)", 
  "Drizzle": "linear-gradient(to bottom, #6B7B8C, #A1A9B2)", 
  "Haze": "linear-gradient(to bottom, #D9A7C7, #FFFCDC)",  
  "Default": "linear-gradient(to bottom, #667db6, #0082c8)", 
  "Sunny": "linear-gradient(to bottom, #FFD700, #FFB347, #FFCC33)" 

};


const search=document.querySelector("#search-input");
const button=document.querySelector("#button");

button.addEventListener("click", async function(){
    const location=search.value;
    if(location != ""){
        const data= await fetchWeather(location);
        if(data != null){
            update(data);
            search.value="";
        }
    }
})

const heading=document.querySelector("#heading");
const temperature=document.querySelector("#temperature");
const icon=document.querySelector(".emoji");

const condition=document.querySelector("#condition");
const timeEle= document.querySelector("#time");
const DateEle=document.querySelector(".Date");
const country=document.querySelector(".India");
const humi=document.querySelector(".Humidity");
const pressureInfo=document.querySelector(".pressure");
const windMInfo=document.querySelector(".wind-m");
const windKInfo=document.querySelector(".wind-k");
const windDirInfo=document.querySelector(".wind-d");
const latitude=document.querySelector(".lat");
const longitude=document.querySelector(".lon");
const cloud=document.querySelector(".cloud_Dir");
const feelsLike=document.querySelector(".feels");
const uvRay=document.querySelector(".uv");




function update(data){
    const name=data.location.name
    const temp=data.current.temp_c;
    const cond=data.current.condition.text;
    
    const image=data.current.condition.icon;
    const timeData=data.location.localtime;
    const [date,time]=timeData.split(" ");
    const CountryName=data.location.country;
    const HumidityNum=data.current.humidity;
    const newPressure=data.current.pressure_mb;
    const newWindM=data.current.wind_mph;
    const newWindK=data.current.wind_kph;
    const newWindD=data.current.wind_dir;

    const newLat=data.location.lat;
    const newLon=data.location.lon
    const newCloud=data.current.cloud;
    const newFeels=data.current.feelslike_c;
    const newUv=data.current.uv;


    DateEle.textContent=date;
    timeEle.textContent=time;
    



    heading.textContent=name
    temperature.textContent=temp+"°C";
    condition.textContent=cond;
    updateCondition(cond);
    icon.src=image;
    country.textContent=CountryName;
    humi.textContent="Humidity:"+HumidityNum;
    pressureInfo.textContent="pressure_mb:"+newPressure;
    windMInfo.textContent="win_mph:"+newWindM;
    windKInfo.textContent="win_Kph:"+newWindK;
    windDirInfo.textContent="Wind Direction:"+newWindD;
    latitude.textContent="lat:"+newLat;
    longitude.textContent="lon:"+newLon;
    cloud.textContent="Cloud:"+newCloud;
    feelsLike.textContent="Feels like:"+newFeels;
    uvRay.textContent="UV:"+newUv;

}
// To change Color based on condition
function updateCondition(cond) {
  document.body.style.background = weatherBackgrounds[cond] || weatherBackgrounds["Default"];
   document.querySelector(".weather-container").style.background = 
    weatherBackgrounds[cond] || weatherBackgrounds["Default"];

    document.querySelector(".Extra").style.background=weatherBackgrounds[cond]||weatherBackgrounds["Default"];
    document.querySelector(".extraSecond").style.background=weatherBackgrounds[cond]||weatherBackgrounds["Default"];
    
}

// fetchh => to get Data 
 async function fetchWeather(location){
const url=`https://api.weatherapi.com/v1/current.json?key=81233e471ecc407bb5632607250702&q=${location}&aqi=no`

          const response=await fetch(url);
          if(response.status==400){
            alert("Enter Correct Location");
          }
          else if(response.status==200){
            const json=  await response.json();
            return json

          }

          

}




