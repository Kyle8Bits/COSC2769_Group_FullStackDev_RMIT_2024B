import React from 'react'
import '../../css/findingdropbar.css'

import ObjectCard from './ObjectCard'

function FindingDropBar({ cards }) {
  console.log(cards)

  const displayCard = cards.map(card =>{

    return(
      <ObjectCard name={card.fullname} img={card.avatar} usernameCard={card.username} isSearchingBar={true}/>
    )
  })
  return (
    <div className='finding_window'>
        {cards.length > 0 ? (
            <>
            {displayCard}
            </>
      ) : <></>}
    </div>
  )
}

export default FindingDropBar