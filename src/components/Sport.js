import React,{useState,useEffect,Fragment} from "react"
import axios from "axios"
import Navbar from "./Navbar"


export default function Sport() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [url, setUrl] = useState(
      "https://api.weatherapi.com/v1/sports.json?key=e25888b22b87474fac4193103200709&q=lagos"
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
   
    useEffect(() => {
      const fetchData = async () => {
        try{
        setIsLoading(true);
   
        const result = await axios(url);
        console.log(result.data);
        const myData = result.data;
        setData([myData]);
        setIsLoading(false);}
        catch(err){
          setError(err)
          setIsLoading(null)
        }
      };
   
      fetchData();
    }, [url]);
   
    return (
      <Fragment>
        <Navbar />
        <h2 className="title">Check the Sport data for any city</h2>
        <div className="container">
          <label>Enter any City</label>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
       
        <button
          type="button"
          onClick={() => setUrl(`https://api.weatherapi.com/v1/sports.json?key=e25888b22b87474fac4193103200709&q=${query}`)}
        >
          Search
        </button>
        </div>
   {error && <div className="error"> Failed to load!
     <br/> Check your network connection </div>}
     {isLoading && <div className="loading">Loading ...</div> }
          <div className="sport-box">
            {  
            data.map((item,index) => (
            <h3 key={index}>{item.football.stadium}</h3>
             
            ))}
          </div>
        
       <div>
       Powered by <a href="https://www.weatherapi.com/"
        title="Free Weather API">WeatherAPI.com</a>
        <br/>
        <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' 
        alt="Weather Data By WeatherAPI.com" border="0"/>
       </div>
      </Fragment>
    );
  }