import React from 'react'

function DisplayWeather(props) {
  console.log(props);
 const {data}=props
 const iconUrl=  `http://openweathermap.org/img/wn/${data.cod!=='404'?data.weather[0].icon:null}.png`
 
//console.log(iconUrl);  
 return (
    
    <div className='displayWeather'>
      {data.cod!=='404'? 
     < React.Fragment> <div className="mainCard">
            <div className="cardTitle">
                {data.name} {data.sys.country} Weather
            </div>
            <span className='subTitle'> As of {new Date().toLocaleTimeString()}</span>
            <h1>{Math.floor(data.main.temp-273.15)}
            <sup>o</sup></h1>
        <span className="weather-main">{data.weather[0].main}</span>
      <img src={iconUrl} className='weather-icon' alt="" />
      <table>
        <tr>
            <td>
                High/Low
            </td>
            <td><span>
                {Math.floor(data.main.temp_max-273.15)}/{Math.floor(data.main.temp_min-273.15)} 
                </span><sup>o</sup></td>
                <td>
                Wind
            </td>
            <td><span>
               {Math.floor((data.wind.speed*18)/5)} </span>Km/hr</td>
        </tr>
        <tr>
            <td>
               Humidity
            </td>
            <td><span>
                {data.main.humidity}
                </span>%</td>
                <td>
                Wind Direction
            </td>
            <td><span>
               {data.wind.deg} </span><sup>o</sup></td>
        </tr>
        <tr>
            <td>
                Pressure
            </td>
            <td><span>
               {data.main.pressure} </span>hPa</td>
               <td>
                Sunrise
            </td>
            <td><span>
               {new Date(data.sys.sunrise*1000).toLocaleTimeString()} </span></td>
        </tr>
        <tr>
            <td>
                Visibility
            </td>
            <td><span>
                {data.visibility/1000} km
               </span></td>
               <td>
                Sunset
            </td>
            <td><span>
            {new Date(data.sys.sunset*1000).toLocaleTimeString()} </span></td>
        </tr>
      </table>
        </div></React.Fragment>:
      
       <div>{data.message}</div>
       
       }
    </div>
  )
  
}

export default DisplayWeather