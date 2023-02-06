import React from 'react'

export const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
  return (
    <div className="weather-box">
        <h1>{weather?.name.toUpperCase()}</h1>
        <h2> {weather?.main.temp}도/ {Math.floor(weather?.main.temp* 9/5+32)}F</h2>
        <h3> {weather?.weather[0].description.toUpperCase()}</h3>
    </div>
  )
}
