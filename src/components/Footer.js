import React,{ Fragment } from "react";
import "../App.css"

export default function Footer(){
    return(
        <Fragment>
            <footer>
            <div className="ack">
    <p> Powered by <a href="https://www.weatherapi.com/"
      title="Free Weather API">WeatherAPI.com</a></p>
      <br/>
      <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' 
      alt="Weather Data By WeatherAPI.com" border="0"/>
     </div>
                Developed by <a href="https://khrees.netlify.app">
                    Christian Ndu
                </a> &trade;
                <p>All Rights Reserved &copy; 2020</p>
            </footer>
        </Fragment>

    )
}