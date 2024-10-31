const baseURL='https://api.weatherapi.com/v1/current.json?key=6fbb68956bae42ac9cb51850243110'


export const getWeatherDataForCity=async(city)=>{
    const response =await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return response.json();
}