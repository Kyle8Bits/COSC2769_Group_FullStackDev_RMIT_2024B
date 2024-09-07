import React from "react";
import '../css/friendRequest.css';
import { useDispatch } from "react-redux";
import { acceptFriendRequest, declineFriendRequest,fetchFriendRequest } from "../redux/slice/friendSlice";
function FriendRequest({requester, recipient}){

    const dispatch = useDispatch();

    const handleAccept = async () => {
        await dispatch(acceptFriendRequest({requester,recipient}));
        dispatch(fetchFriendRequest(recipient));   
    }

    const handleDecline = async () => {
        await dispatch(declineFriendRequest({requester,recipient}));
        dispatch(fetchFriendRequest(recipient));
    }
    console.log(recipient, requester);
    return (
        <div className="friend-req-container">
            <div className="friend-req-content">
                <div className="friend-req-mes">
                    {`${requester.fullName} wants to be your friend.`} {/* Render string, not object */}
                </div>
            </div>
            <div className="respond-button">
                <button className="accept-req" onClick={handleAccept}>Accept</button>
                <button className="decline-req" onClick={handleDecline}>Decline</button>
            </div>
        </div>
    );
}

export default FriendRequest