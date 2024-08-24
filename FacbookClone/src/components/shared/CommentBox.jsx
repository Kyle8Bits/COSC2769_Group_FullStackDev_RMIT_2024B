// import React, { useState } from "react";
// import Comment from "./Comment";

// import "./commentBox.css"




// function CommentBox(){
//     const [comments,setComments] = useState([
//         {
//             id: 1,
//             user: { name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
//             text: 'This is a great post!',
//             time: '2 hours ago',
//           },
//           {
//             id: 2,
//             user: { name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
//             text: 'Thanks for sharing!',
//             time: '1 hour ago',
//           },
//     ])

//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleAddComment = () => {
//         if (inputValue.trim() !== ''){
//             const newComment = {
//                 id: comments.length + 1,
//                 user: {name:"New User", avatar: 'https://via.placeholder.com/40'},
//                 text: inputValue,
//             };
//             setComments([...comments,newComment]);
//             setInputValue('');
//         }
//     }

//     return(
//         <div className="comment-box">
//             <h1 className="comment-title">COMMENTS</h1>
//             {comments.map((comment) => (
//                 <Comment key={comment.id} user = {comment.user} text = {comment.text}/>
//             ))}
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     placeholder="Write a comment..."/>
//                 <button onClick={handleAddComment}>POST</button>
//             </div>
//         </div>
//     );
// };

// export default CommentBox;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../../redux/slice/commentsSlice";
import Comment from "./Comment";
import "../../css/commentBox.css";

function commentBox(){
    const comments = useSelector((state) => state.commentList);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddComment = () => {
        if (inputValue.trim() !== ''){
            const newComment = {
                id: comments.length + 1,
                user: {name:"New User", avatar: 'https://via.placeholder.com/40'},
                text: inputValue,
            };
            dispatch(increase(newComment));
            setInputValue('');
        };
    };

    return(
        <div className="comment-box">
            <div className="return_box"><i class="ri-arrow-left-line"></i></div>
            <h1 className="comment-title">COMMENTS</h1>
            <div className="comments-container">
                {comments && comments.map((comment) => (
                    <Comment key={comment.id} user={comment.user} text={comment.text}/>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Write a comment..."
                />
                <button onClick={handleAddComment}>POST</button>
            </div>
        </div>
    );
}

export default commentBox