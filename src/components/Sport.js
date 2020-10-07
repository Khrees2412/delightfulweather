import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sport() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('London')
    const [url, setUrl] = useState(
        'https://api.weatherapi.com/v1/sports.json?key=e25888b22b87474fac4193103200709&q=london'
    )
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)

                const result = await axios(url)
                // console.log(result.data.football);
                const myData = result.data.football
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
            <header className="navbar">
                <div>Weather For Me</div>
                <Link to="/">Home</Link>
            </header>
            <div className="body">
                <h2 className="title">Check latest matches in your city</h2>
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
                                `https://api.weatherapi.com/v1/sports.json?key=e25888b22b87474fac4193103200709&q=${query}`
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
                    <br /> Check your network connection{' '}
                </div>
            )}
            {isLoading && <div className="loading">Loading ...</div>}
            <div>
                {data.map((initItem) =>
                    initItem.map((item, index) => (
                        <div key={index} className="sport-box">
                            <div>
                                Match: <span>{item.match}</span>
                            </div>
                            <br />
                            <div>
                                Time starts: <span>{item.start}</span>
                            </div>
                            <br />
                            <div>
                                Tournament: <span>{item.tournament}</span>
                            </div>
                            <br />
                            <div>
                                Stadium: <span>{item.stadium}</span>
                            </div>
                            <br />
                            <div>
                                Country: <span>{item.country}</span>
                            </div>
                            <br />
                            <div>
                                <span></span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Fragment>
    )
}
