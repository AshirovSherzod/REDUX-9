import React from 'react'
import './cards.scss'

const CardItem = ({ title, image, channel }) => {
  return (
    <div>
      <div className="cards-item__img">
        <img src={image} alt="" />
      </div>
      <div className="cards-item__desc">
        <div className="cards-item__desc-img">
          <img src={image} alt="" />
        </div>
        <div className="cards-item__desc-desc">
          <h4>{title}</h4>
          <p>{channel}</p>
        </div>
      </div>
    </div>
  )
}

export default CardItem