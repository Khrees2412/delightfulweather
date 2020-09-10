import React,{Fragment}  from "react";
//import {Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"


export default function Navbar(){
    return(
      <Fragment>
<nav className="navbar">
  <h1>Weather For Me</h1>
  <Link to="/sports">Sports Info</Link>
 
</nav>
      </Fragment>
    )
}
/*
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      
    `https://api.weatherapi.com/v1/current.json?key=e25888b22b87474fac4193103200709&q=${query}`
    </Nav>
    
  </Navbar.Collapse>


  import React, {useState,useEffect,Fragment  } from "react";
import axios from "axios"
import {Form,Button,FormControl} from "react-bootstrap"


export default function Weather(){

    const [result, setResult] = useState({weather:[]});
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState("")
   
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios(url)
        setResult(res.data);
        console.log(res.data)
      };
   
      fetchData();
      
    }, [url]);
   
    return (
      <Fragment>
          <div className="main">
         <h3> Click the search button to process </h3>
        
          <Form inline>
      <FormControl 
                   type="text"  
                   value={query}
                   onChange={event => setQuery(event.target.value)} 
                   placeholder="Enter name of city" 
                   className="mr-sm-2" />
      <Button  
                   onClick={() =>
                   setUrl( `https://api.weatherapi.com/v1/current.json?key=e25888b22b87474fac4193103200709&q=${query}`)}
                   variant="outline-success">
                   Search
      </Button>
      </Form>
    <br/>
        <div className="">
    {result.weather.map(
      (item, index) => <p key={index}>{item.location.name}</p> )}
        </div>
        </div>
        </Fragment>
        

    )
}

  */