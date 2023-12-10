const temp = document.getElementById("temp");
const place = document.getElementById("place");

const MY_API_KEY = "394f5ba2dcddc55caa39d3c34433c7aa";

const onGeoOk = (position) => {
    const latitude = position.coords.latitude;    
    const longitude = position.coords.longitude;  
    console.log(latitude);
    console.log(longitude);
    
    getWeather(latitude, longitude);
};

const getWeather = (lat, lng) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${MY_API_KEY}&units=metric`;
    
    fetch(weatherApi)
    .then((res) => {
        return res.json(); 
     }).then((data) => {
      const nowTemp = data.main.temp;  
      const nowPlace = data.name;      
      console.log(nowPlace);
      temp.innerText = nowTemp;   
      place.innerText = nowPlace;   
    })
    
   }


const onGeoErr = () => {
    alert('you cant get your location')
};
 
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr)