import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {
    const weather=useWeather();
  return (
    <div>
        <input 
        placeholder='enter city name'
        value={weather.searchCity} 
        onChange={(e)=>weather.setSearchCity(e.target.value)} 
        className='input-field'
        />
    </div>
  )
}

export default Input