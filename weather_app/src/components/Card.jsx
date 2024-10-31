import React from 'react'
import { useWeather } from '../context/Weather'


function Card() {
    const weather=useWeather()
  return (
    <div className='card'>
        <img src={weather?.data?.current?.condition?.icon}/>
        <h2>{weather?.data?.current?.condition?.text}</h2>
        <h2>{weather?.data?.current?.temp_c}</h2>
        <h5>{weather?.data?.location?.name}, {weather?.data?.location?.region}</h5>
    </div>
  )
}

export default Card