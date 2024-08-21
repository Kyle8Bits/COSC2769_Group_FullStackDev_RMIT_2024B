import React from 'react'
import '../../css/card.css'

function ObjectCard({name, img}) {
  return (
    <div className='card_container'>
      <div className="card">
          <img src={img} alt="" />
          <h2 className="object_name">{name}</h2>
      </div>
    </div>
  )
}

export default ObjectCard