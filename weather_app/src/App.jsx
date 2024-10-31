import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import { useWeather } from './context/Weather'

function App() {
  const weather=useWeather();
  console.log(weather);
  return (
    <>
    <h1>Weather App</h1>
    <Input/>
    <Button value="Search" onClick={(weather.fetchData)} />
    <Card/>
    {/* <Button value="Refresh"/> */}
    </>
  )
}

export default App
