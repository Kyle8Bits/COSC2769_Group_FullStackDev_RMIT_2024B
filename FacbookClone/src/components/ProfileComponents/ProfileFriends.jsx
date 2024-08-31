import React, {useEffect} from 'react'
import ObjectCard from '../shared/ObjectCard'
import { fetchFriend } from '../../redux/slice/friendSlice';

import { useDispatch, useSelector } from 'react-redux';
import Unknown from '../../image/logo.png'

function ProfileFriends() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriend());
  }, [dispatch]);

  const friends = useSelector(state => state.friends.friend);


  const friendList = friends.map((friend, index) => (
    <ObjectCard 
      key={friend._id} 
      usernameCard={friend.username}
      name={friend.fullName} 
      img= {friend.avatar || Unknown}
    />

  ))
  return (
    <div className='friend_list_container'>
      <div className="friendlist">

        {friendList}

      </div>
    </div>
  )
}

export default ProfileFriends
