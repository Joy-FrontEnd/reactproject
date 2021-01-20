import React from 'react';
import './Weather.css'


export default function Weather(){
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
    <h1>Nairobi</h1>
    <ul>
      <li>Wednesday 10:00</li>
      <li>Partly Cloudy</li>
    </ul>
     <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"></img>
        <span>27°C</span>
     

       <div className="row">
      <div className="col-4">
        <ul>
          <li>Precipitation: 0%</li>
          
        </ul>
      </div>
      <div className="col-4">
        <ul>
          <li>Humidity: 41%</li>
        </ul>
      </div>
       <div className="col-4">
        <ul>
          <li>Wind: 18km/h</li>
        </ul>
      </div>

 </div>
    </div>



  
}