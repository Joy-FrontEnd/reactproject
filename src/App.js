import React from 'react'
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <div className="container"> 
     
      <Weather defaultCity ="Nairobi"/>
       
      <footer> 
      This project was coded by Joy Muthoni and it's {" "}
      <a href="https://github.com/Joy-FrontEnd/reactproject" target="_blank" rel="noreferrer">Open-source on Github</a>
      </footer>
     </div>
 </div>
  );
}

export default App;
