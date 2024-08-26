import React from 'react'
import { useSelector } from 'react-redux'
import ObjectCard from '../shared/ObjectCard'
import '../../css/adminnavigate.css'


import user1 from '../../image/friend1.png'
import user2 from '../../image/friend2.png'
import user3 from '../../image/friend3.png'
import user4 from '../../image/friend4.png'
import Unknown from '../../image/logo.png'

function ProfileAbout() {


  return (
    <div  className='admin_suspend_container'>

            <div className="suspend_search_bar">
                <div className="input_box">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder='Search User' />
                </div>
            </div>


        <div className='suspend_list_container'>
            <div className="userlist">
                <ObjectCard name="Jeff Bezos" img={user1}/>
                <ObjectCard name="Mark Zuckerberg" img={user2}/>
                <ObjectCard name="Cristiano Ronaldo" img={user3}/>
                <ObjectCard name="Loniel Messi" img={user4}/>
                <ObjectCard name="CrabNest User" img={Unknown}/>
                <ObjectCard name="CrabNest User" img={Unknown}/>
                <ObjectCard name="CrabNest User" img={Unknown}/>
                <ObjectCard name="CrabNest User" img={Unknown}/>

            </div>
        </div>
    </div>
  )
}

export default ProfileAbout