import React from 'react'
import '../../css/findingdropbar.css'

import ObjectCard from './ObjectCard'

function FindingDropBar({ cards }) {
  return (
    <div className='finding_window'>
        {cards.length > 0 ? (
            <>
            <ObjectCard name={cards.username} img={cards.avatar} usernameCard={null}/>
            </>
      ) : (
        <p>No users found</p>
      )}
    </div>
  )
}

export default FindingDropBar