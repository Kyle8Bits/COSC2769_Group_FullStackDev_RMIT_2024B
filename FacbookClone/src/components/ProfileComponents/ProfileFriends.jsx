import React from 'react'
import ObjectCard from '../shared/ObjectCard'

import friend1 from '../../image/friend1.png'
import friend2 from '../../image/friend2.png'
import friend3 from '../../image/friend3.png'
import friend4 from '../../image/friend4.png'
import Unknown from '../../image/logo.png'


function ProfileFriends() {
  return (
    <div className='friend_list_container'>
      <div className="friendlist">
        <ObjectCard name="Jeff Bezos" img={friend1}/>
        <ObjectCard name="Mark Zuckerberg" img={friend2}/>
        <ObjectCard name="Cristiano Ronaldo" img={friend3}/>
        <ObjectCard name="Loniel Messi" img={friend4}/>
        <ObjectCard name="CrabNest User" img={Unknown}/>
        <ObjectCard name="CrabNest User" img={Unknown}/>
        <ObjectCard name="CrabNest User" img={Unknown}/>
        <ObjectCard name="CrabNest User" img={Unknown}/>

      </div>
    </div>
  )
}

export default ProfileFriends
