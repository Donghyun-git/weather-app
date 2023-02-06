import {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherBox } from "./component/WeatherBox";
import { WeatherButton } from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";



function App() {
  const [weather, setWeather]=useState(null);
  const [city, setCity]=useState('');
  const [loading, setLoading]=useState(false);
  const [apiError, setApiError]=useState('');
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];

  const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position)=> {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon);
      });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7cb426e54de5b35f83636f87c2fbbda&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity= async ()=>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7cb426e54de5b35f83636f87c2fbbda&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  } catch (error) {
    setApiError(error.message);
    setLoading(false);
  }
    
  }

  useEffect(()=>{
    city == "" ? getCurrentLocation() : getWeatherByCity();
  }, [city])

  return (
    <div>
      {loading ? <div className="container"><ClipLoader
        color="#f8f8f8"
        loading={loading}
        size={150}
      /></div> : <div className="container">
      <WeatherBox weather={weather}/>
      <div className="ButtonArea">
        <WeatherButton cities={cities} setCity={setCity} city={city}/>
      </div>
    </div>}
      
      
    </div>
  );
}

export default App;
