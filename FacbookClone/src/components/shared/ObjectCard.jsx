import React from 'react'
import '../../css/card.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFriendship } from '../../redux/slice/friendSlice';


function ObjectCard({name, img, usernameFriend}) {
   const username = useSelector((state) => state.profile.username); 
  const dispatch = useDispatch();

  const handleDeletefriend= ()=>{
    dispatch(deleteFriendship({requester:{username},recipient: {usernameFriend}}));

  }

  return (
    <div className='card_container'>
      <div className="card">
          <img src={img} />
          <h2 className="object_name">{name}</h2>


          <div className="addfriend" onClick={handleDeletefriend}>
            <i className="ri-user-minus-fill"/>
          </div>
  

      </div>
    </div>
  )
}

export default ObjectCard