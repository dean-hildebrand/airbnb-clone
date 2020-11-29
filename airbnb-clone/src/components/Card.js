import React from 'react'
import '../css/card.css'


function Card({ source, title, description, price }) {
  return (
    <div className="card">
    <img src={source} alt="" />
    <div className="card__info">
    <h2></h2>
    <h4></h4>
    </div>
    </div>
  )
}

export default Card
