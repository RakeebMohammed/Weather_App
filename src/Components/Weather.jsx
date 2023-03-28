import React from 'react'
import { useState } from 'react'
import DisplayWeather from './DisplayWeather'
import './Weather.css'
function Weather() {
const apiKey='e0b69f8b2229e4d516d67f9b3d817079'
  const [form,setform]=useState({
      city:'',
      country:""
  })
  const [weatherData, setweatherData] = useState([])
  const [Error, setError] = useState(false)
  const handleChange=(e)=>{
let name=e.target.name
let value =e.target.value

if(name==='City'){
  setform({...form,city:value})
}
if(name==='Country'){
  setform({...form,country:value})
}
console.log(form);
}
let getDetails=async(e)=>{
  e.preventDefault()
  if(form.city==='' ){
    setError(true)
  }
  else{
    setError(false)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apiKey}`)
   
   data=await data.json() 
    
    console.log(data);
    setweatherData({data:data}) 

   } 

  }



  return (
   
    
    <div className='weather'>
    <div className='title'>Weather App</div> 
    <form action="">
      <input type="text" name="City" id="" placeholder='Enter the city' onChange={handleChange} />
      <input type="text" name="Country" id="" placeholder='Enter the country' onChange={handleChange} />
      <button type="submit" onClick={getDetails}>Submit</button>
      {Error ?<h4 style={{color:'red'}}>Enter input</h4> :null}
      </form> 
      {weatherData.data!==undefined? (
      <DisplayWeather data={weatherData.data}/>) 
       :null} 
    </div>

  )
}

export default Weather