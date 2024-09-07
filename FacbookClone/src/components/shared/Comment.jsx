

import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../../css/comment.css'; // Import the CSS file
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, fetchCommentsForPost, editComment} from '../../redux/slice/commentsSlice';

const Comment = ({ commentId, postId ,username ,name, text, time }) => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.profile)
  const [editState, setEditState] = useState(false);
  const [newContent, setNewContent] = useState('');
  const [decideDelete, setDecideDelete] = useState(false);

  const handleDeleteComment =  async ()=>{
    await dispatch(deleteComment({postId, commentId}))
    dispatch(fetchCommentsForPost(postId));
  }


  const handeDeleteAction = () =>{
    setDecideDelete(true);
  }

  const handleEdit = async() =>{
    await dispatch(editComment({commentId, newContent}))

    setNewContent('')
    setEditState(false)
    dispatch(fetchCommentsForPost(postId))
  } 

  const handleNewContentAdd = (e) => {
    setNewContent(e.target.value);
  };

  const handleCancleEdit =()=>{
    setEditState(false)
    setNewContent('')
  }

  
  

  return (
    <div className="comment-container">
      <div className="comment-content">
        <div className="comment-header">
          <span className="username">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>




        {(currentUser.username === username || currentUser.isAdmin)?
          <div className="edit_cmt_div">


            {!editState ?
            <>
               {!decideDelete? 
                <i onClick={handeDeleteAction} class="ri-chat-delete-fill"></i>
                : 
                <div className="decide_action_delete">
                  <h1>Sure want to delete this comment 
                    <i onClick={handleDeleteComment} class="ri-checkbox-circle-fill"></i>
                    <i onClick={()=> setDecideDelete(false)} class="ri-close-circle-fill"></i></h1>
    
                </div>
                }
                {!currentUser.isAdmin && (<i onClick={()=> setEditState(true)} class="ri-edit-2-fill"></i>)}
              </> 
             :
              <div className="edit_content_ctn">
                <textarea  
                type="text" 
                className="new_content"
                value={newContent.newContent}
                onChange={handleNewContentAdd}/>

                <div className="edit_decide">
                  <i onClick={handleEdit} class="ri-chat-forward-fill"></i>
                  <i onClick={handleCancleEdit} class="ri-reply-fill"></i>
                </div>

             </div>
            }
          </div>
          :
          <></>
        }





      </div>
    </div>
  );
};


export default Comment;
