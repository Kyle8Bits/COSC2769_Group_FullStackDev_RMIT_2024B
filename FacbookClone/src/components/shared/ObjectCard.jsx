import React from 'react'
import '../../css/card.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFriendship } from '../../redux/slice/friendSlice';
import { useNavigate } from 'react-router-dom';


function ObjectCard({name, img, usernameCard, isSearchingBar}) {
  const username = useSelector((state) => state.profile.username); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(username, " Card ", usernameCard);
  const handleDeletefriend= ()=>{
    dispatch(deleteFriendship({requester:{username},recipient: {usernameCard}}));

  }

  const handleCardClick = () => {
    // This should be called on an event, such as a click
    navigate(`/@${usernameCard}`);
    console.log('Go to this person', usernameCard)
};

  return (
    <div onClick={handleCardClick} className='card_container'>
      <div className="card">
          <img src={`http://localhost:1414${img}`} />
          <h2 className="object_name">{name}</h2>
  

      </div>

      {isSearchingBar?<></>:
      <div className="addfriend" onClick={handleDeletefriend}>
            <i className="ri-user-minus-fill"/>
      </div>
      }
      
    </div>
  )
}

export default ObjectCard