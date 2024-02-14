import React from 'react'
import Style from '../styles/card.module.css'

const Card = ({value, title,unit}) => {
  return (
    <div className={Style.main}>
      <h6>{title}</h6>
      <div>
        <h2>{value}</h2>
        <h4>{unit}</h4>
      </div>
    </div>
  )
}

export default Card
