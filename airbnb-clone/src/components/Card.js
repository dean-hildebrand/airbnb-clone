import React from 'react'
import '../css/card.css'


function Card({ source, title, description, price }) {
  return (
    <div className="card">
    <img src={source} alt=""/>
    </div>
  )
}

export default Card
