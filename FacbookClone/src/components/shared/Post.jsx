import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { givereact, deletereact} from '../../redux/slice/postSlice';
import '../../css/post.css'
import { useNavigate } from 'react-router-dom';
import CommentBox from './CommentBox';

function Post({postId, commentCount ,author_avatar, author_username, author_name, photos, caption, reaction, date}) {
    const currentUser = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const [cmtAction, setcmtAction] = useState(false)
    const [react, setReact] = useState(reaction);
    const [isLike, setIsLike] = useState(false);

    const getImageContainerClass = () => {
        if (photos.length === 1) return 'full-width';
        if (photos.length === 2) return 'half-width';
        if (photos.length >= 3) return 'grid-layout';
        return '';
    };
    
    
    useEffect(() => {
        setReact(reaction);
    }, [reaction]);

    const handleReact= ()=> {
        dispatch(givereact({id: {postId}}))
        setReact(prev => prev+1);
        setIsLike(true);
    }

    const handleDisreact= ()=> {
        dispatch(deletereact({id: {postId}}))
        setReact(prev => prev-1);
        setIsLike(false);
    }
    
    const navigate = useNavigate();
  return (
    <div className='post_container'>

        {author_username === currentUser.username ? 
            <i onClick={() => navigate(`/edit/${postId}`)} class="ri-edit-2-fill edit_button"></i>
            :
            <></>
        }
        <div className="post_author" onClick={()=> setcmtAction(false)}>

            <div class="avatar-wrapper">
                <img src={author_avatar} alt="" className="avatar" />
            </div>
            <div className='text_container'>
                <h2 className="name">{author_name}</h2>
                <h3 className="date">{date}</h3>
            </div>

        </div>
        <div className="post_caption">
            <p>
                {caption}
            </p> 
        </div>

        <div className={`post_content ${getImageContainerClass()}`}>
                {photos && photos.length > 0 && (
                    photos.map((photo, index) => (
                        <img key={index} src={`http://localhost:1414${photo}`} alt={`Post image ${index + 1}`} className="post-image"/>
                    ))
                )}
         </div>
        
        <div className="post_count">
            <h5 className='like_count'>{react} likes</h5>
            <h5 className='cmt_count'> {commentCount} comments</h5>
        </div>

        <div className="post_react">
            {!isLike? 
            <i class="ri-thumb-up-line like" onClick={handleReact}></i>
            :
            <i class="ri-thumb-up-line unlike" onClick={handleDisreact}></i>
            }
            <i class="ri-chat-3-line comment" onClick={() => setcmtAction(true)}></i>
        </div>
        
        {cmtAction===true?<><CommentBox postId={postId} currentUser={currentUser} actionLeft={()=> setcmtAction(false)}/>
        </>:<></>}

    </div>
  );
}

export default Post