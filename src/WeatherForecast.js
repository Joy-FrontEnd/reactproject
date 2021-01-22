import React, { useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css';
import WeatherForecastDisplay from './WeatherForecastDisplay';


export default function WeatherForecast(props){
  const[result, setResult] = useState(false);
  const[forecast, setForecast] = useState(null)
function showForecastResponse(response){
  setForecast(response.data)
  setResult(true);
  console.log(response.data)

}
if (result) {
  return( 
  <div className="WeatherForecast row"> 
    <WeatherForecastDisplay data={forecast.list[0]}/> 
    <WeatherForecastDisplay data={forecast.list[1]}/> 
    <WeatherForecastDisplay data={forecast.list[2]}/> 
    <WeatherForecastDisplay data={forecast.list[3]}/>   
  </div>
  )
}else{
let apiKey = "60d3c4153587ef1a61f06dc782608ead";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(showForecastResponse);
return null;
}



}