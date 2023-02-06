import React from 'react'
import { Button } from 'react-bootstrap';

export const WeatherButton = ({cities, setCity, city}) => {
    console.log(cities);
  return (
    <div>
        {
            city == "" ? <Button variant="info"
            onClick={()=>setCity("")}
        >
            Current Location</Button> : <Button variant="outline-info"
            onClick={()=>setCity("")}
        >
            Current Location</Button>
        }
        
        {cities.map((item, index) => (
             item == city ? <Button variant="info"
             key={index}
             onClick={()=>setCity(item)}
             >
            {item.toUpperCase()}</Button> : <Button variant="outline-info"
             key={index}
             onClick={()=>setCity(item)}
             >
            {item.toUpperCase()}</Button>
        ))}
    </div>
  )
}
