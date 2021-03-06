import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/weather'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sport from './components/Sport'
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/sports" component={Sport} />
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App

function Home() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('Lagos')
    const [url, setUrl] = useState(
        'https://api.weatherapi.com/v1/current.json?key=e25888b22b87474fac4193103200709&q=lagos'
    )
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)

                const result = await axios(url)
                //  console.log(result.data);
                const myData = result.data
                setData([myData])
                setIsLoading(false)
            } catch (err) {
                setError(err)
                setIsLoading(null)
            }
        }

        fetchData()
    }, [url])

    return (
        <Fragment>
            <Navbar />
            <div className="body">
                <h2 className="title">Check the Weather data for any city</h2>
                <div className="form">
                    <label>Enter any City</label>
                    <input
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setUrl(
                                `https://api.weatherapi.com/v1/current.json?key=e25888b22b87474fac4193103200709&q=${query}`
                            )
                        }
                    >
                        Search
                    </button>
                </div>
            </div>
            {error && (
                <div className="error">
                    {' '}
                    Failed to load!
                    <br /> Check your network connection and try again
                </div>
            )}
            {isLoading && <div className="loading">Loading ...</div>}
            <div>
                {data.map((item, index) => (
                    <Weather
                        key={index}
                        data={item.location}
                        value={item.current}
                    />
                ))}
            </div>
        </Fragment>
    )
}
