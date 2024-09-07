import React from 'react'
import { useSelector } from 'react-redux'
import {fetchPostOfUser} from '../../redux/slice/profileSlice'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfilePhotos() {
  const dispatch = useDispatch();

  const {username} = useParams();

  const passin = username.replace('@', '');

  const {posts} = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchPostOfUser({username: passin}));
  },[] )


  const images = posts.slice().reverse().map(post => {
    return(
    post.post.images.map(image => {
      console.log(image)
      return(
        <img className="an_image_profile" src={`http://localhost:1414${image}`} alt=''/>
      )
    })
    )
  })
  return (
    <div className="img_profile_ctn">
       <div className='images_profile_ctn'>
       {images}
      </div>
    </div>

  ) 
}

export default ProfilePhotos
