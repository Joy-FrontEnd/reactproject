import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import WeatherUnit from './WeatherUnit'

export default function WeatherData(props){
  return (<div> 
    <h1>{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date ={props.data.date}/>
        
        </li>
      <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="float-left"> 
    <WeatherIcon iconCode={props.data.icon}/>
     </div>
      <div className="weather-unit"> 
     <WeatherUnit celsius={props.data.temperature}/>
        
     </div>

       <div className="row">
      <div className="col">
        <ul>
          <li>Humidity:{props.data.humidity}%</li>
        </ul>
      </div>
       <div className="col">
        <ul>
          <li>Wind:{props.data.wind}Km/h</li>
        </ul>
      </div>

 </div>
    </div>
  
  );
}
