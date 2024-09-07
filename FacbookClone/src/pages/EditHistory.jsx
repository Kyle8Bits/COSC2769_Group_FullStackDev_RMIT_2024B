import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPost } from '../redux/slice/editPostSlice';
import Post from '../components/shared/Post';
import '../css/historyVersion.css'
import Header from '../components/shared/Header';

function EditHistory() {

  const postId = useParams();
  const [version, setVersion] = useState([]);
  const currentUser = useSelector(state => state.profile);
  const [current, setCurrentPost] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVersion = async () => {
      const resultAction = await dispatch(getCurrentPost(postId));

      if(getCurrentPost.fulfilled.match(resultAction)){
        setVersion(resultAction.payload.editHistory);
        setCurrentPost(resultAction.payload);
      }
    }

    fetchVersion();
  })

  const displayHistory = version.map((item, index) => {
    return (
      <Post
        key={index}
        postId={current.id}
        author_avatar={currentUser.avatar}
        author_username={"``32"}
        author_name={currentUser.fullName}
        photos={item.images}
        caption={item.content}
        date={item.date}
        isEdited={false}
        showingHistory={true}
      />
    )
  })

  return (
    <div>
      <Header />
      <div id="return_from_history">
      History versions of this post
      <i class="ri-timer-2-line"></i>
      </div>
      <div id="history_edited_post" >
      {displayHistory}
      </div>
    </div>
  )
}

export default EditHistory
