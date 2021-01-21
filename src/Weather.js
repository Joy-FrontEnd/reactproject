import React, { useState } from 'react';
import './Weather.css';
import FormattedDate from './FormattedDate';
import axios from "axios"


export default function Weather(props){
  const[result, setResult] = useState(false);
  const[weather, setWeather] = useState({});

function showResponse(response){
  console.log(response.data)
  setResult(true);
  setWeather({ 
  temperature: response.data.main.temp,
  city: response.data.name,
  description: response.data.weather[0].description,
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  clouds: response.data.clouds,
  date: new Date(response.data.dt * 1000),
  });
}
 if (result) {

  return <div className="weather">      
    <form>
      <div className="row">
        <div className = "col-9">
      <input type="search" placeholder="Type a City" className="form-control" autoFocus="on"/> 
      </div>
      <div className = "col-3"> 
      <input type= "submit" value="Search" className="btn btn-primary w-100" />
      </div>
      </div>
    </form>
    <h1>{weather.city}</h1>
    <ul>
      <li>
        <FormattedDate date ={weather.date}/>
        
        </li>
      <li className="text-capitalize">{weather.description}</li>
    </ul>
     <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"></img>
        <span>{Math.round(weather.temperature)}°C</span>
     

       <div className="row">
      <div className="col-6">
        <ul>
          <li>Humidity: {weather.humidity}%</li>
        </ul>
      </div>
       <div className="col-6">
        <ul>
          <li>Wind: {weather.wind}Km/h</li>
        </ul>
      </div>

 </div>
    </div>

   
 }else{
  const apiKey = "60d3c4153587ef1a61f06dc782608ead";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showResponse);

  return "Results Loading"

 }
 
}