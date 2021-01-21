import React, { useState } from 'react';
import './Weather.css';

import WeatherData from './WeatherData';
import axios from "axios";

export default function Weather(props){
  const [city, setCity] = useState(props.defaultCity);
  const[result, setResult] = useState(false);
  const[weather, setWeather] = useState({});

function showResponse(response){
  console.log(response.data)
  setWeather({ 
  temperature: response.data.main.temp,
  city: response.data.name,
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  clouds: response.data.clouds,
  date: new Date(response.data.dt * 1000),
  });
  setResult(true);
}
function searchCity(){
  const apiKey = "60d3c4153587ef1a61f06dc782608ead";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showResponse);

}

function updateSubmit(event){
  event.preventDefault()
  searchCity()
}

function updateCity(event){
setCity(event.target.value)
}



 if (result) {

  return <div className="weather">      
    <form onSubmit={updateSubmit}>
      <div className="row">
        <div className = "col-9">
      <input type="search" placeholder="Type a City" className="form-control" autoFocus="on" onChange ={updateCity}/> 
      </div>
      <div className = "col-3"> 
      <input type= "submit" value="Search" className="btn btn-primary w-100" />
      </div>
      </div>
    </form>
    <WeatherData data={weather} />
    </div>
 }else{
   searchCity()
     return "Results Loading"

 }
 
}