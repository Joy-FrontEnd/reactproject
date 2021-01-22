import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

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
        <span>{Math.round(props.data.temperature)}°C</span>
     

       <div className="row">
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
       <div className="col-6">
        <ul>
          <li>Wind: {props.data.wind}Km/h</li>
        </ul>
      </div>

 </div>
    </div>
  
  );
}
