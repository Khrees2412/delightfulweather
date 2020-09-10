import React, { Fragment } from "react";
import "../App.css"

export default function Weather ({data,value}){
return(
  <Fragment>
    <div className="location box">
      <div>
      <h3>Location Data</h3>
      <div>Name:  {data.name}</div>
      
    <br/>
    <div> Region: {data.region}</div>
      
    <br/>
    <div> Country: {data.country}</div>
   
    <br/>
    <div>  Date & Time: {data.localtime}</div>
  
        <br/>
      <div>Latitude: {data.lat} longitude: {data.lon}
      </div>
      
</div>
<div className="img-div">
      <h2>{value.text}</h2>
      <img className="img" src={value.condition.icon} alt="weatherImage" />
    </div>
    </div>
   
  </Fragment>
)
}