import React from 'react'
import '../../css/card.css'

function ObjectCard({name, img}) {
  return (
    <div className='card_container'>
      <div className="card">
          <img src={`data:image/jpg;base64,${img}`} />
          <h2 className="object_name">{name}</h2>
          <div className="addfriend"><i class="ri-add-circle-line"></i></div>
      </div>
    </div>
  )
}

export default ObjectCard