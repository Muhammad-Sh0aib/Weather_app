import React from 'react'
import WeatherCard from './WeatherCard'
import Card from './Card'
import Style from '../styles/display.module.css'

const Display = ({data}) => {
  
  return (
    <div className={Style.main}>
      <WeatherCard data={data}/>
      <Card value={data.current.wind_mph} title={"Wind Status"} unit={"mph"}/>
      <Card value={data.current.humidity} title={"Humidity"} unit={"%"}/>
      <Card value={data.current.vis_miles} title={"Visibility"} unit={"miles"}/>
      <Card value={data.current.pressure_mb} title={"Air Pressure"} unit={"mb"}/>
    </div>
  )
}

export default Display
