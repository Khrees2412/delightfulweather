import React, { Fragment } from 'react'
import '../App.css'

export default function Weather({ data, value }) {
    return (
        <Fragment>
            <div className="location box">
                <div className="details">
                    <h3>Location Data</h3>
                    <div>
                        Name: <span>{data.name}</span>
                    </div>

                    <div>
                        {' '}
                        Region: <span>{data.region}</span>
                    </div>

                    <div>
                        {' '}
                        Country: <span>{data.country}</span>
                    </div>

                    <div>
                        {' '}
                        Date & Time: <span>{data.localtime}</span>
                    </div>

                    <div>
                        Wind Degree: <span>{value.wind_degree}</span>
                    </div>

                    <div>
                        Wind Direction: <span>{value.wind_dir}</span>
                    </div>

                    <div>
                        Humidity: <span>{value.humidity}</span>
                    </div>

                    <div>
                        Latitude: <span>{data.lat} </span>
                    </div>
                    <div>
                        {' '}
                        Longitude: <span>{data.lon}</span>
                    </div>
                </div>
                <div className="img-div">
                    <h2>
                        {value.condition.text}&nbsp;{value.temp_c} &#8451;
                    </h2>
                    <img
                        className="img"
                        src={value.condition.icon}
                        alt="weatherImage"
                    />
                </div>
            </div>
        </Fragment>
    )
}
