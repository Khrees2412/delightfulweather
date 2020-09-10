import React, { Fragment } from "react";
import "../App.css"

export default function Weather ({data,value}){
return(
  <Fragment>
    <div className="location box">
      <div>
      <h3>Location Data</h3>
      <div>Name:  <span>{data.name}</span></div>
      
    <br/>
    <div> Region: <span>{data.region}</span></div>
      
    <br/>
    <div> Country: <span>{data.country}</span></div>
   
    <br/>
    <div> Date & Time: <span>{data.localtime}</span></div>
    <br/>
    <div>Wind Degree: <span>{value.wind_degree}</span></div>
    <br/>
    <div>Wind Direction: <span>{value.wind_dir}</span></div>
    <br/>
    <div>Humidity: <span>{value.humidity}</span></div>
        <br/>
      <div>Latitude: <span>{data.lat} </span>
      Longitude: <span>{data.lon}</span>
      </div>
      
</div>
<div className="img-div">
<h2>{value.condition.text}{""}{value.temp_c}</h2>
      <img className="img" src={value.condition.icon} alt="weatherImage" />
    </div>
    </div>
   
  </Fragment>
)
}