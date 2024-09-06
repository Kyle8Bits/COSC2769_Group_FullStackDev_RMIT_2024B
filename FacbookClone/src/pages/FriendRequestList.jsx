import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchFriendRequest } from "../redux/slice/friendSlice";
import FriendRequest from "./FriendRequest";
import '../css/friendRequestList.css';

function FriendRequestList(){
    const {friendRequests,status} = useSelector((state) => state.friends.friend);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.profile);
    useEffect(() => {
        if(currentUser){
            dispatch(fetchFriendRequest(currentUser));
        }
    },[dispatch,currentUser]);
    
    return (
        <div className="friend-req-list">
            {status === 'loading' && <p>Loading friend requests...</p>}
            {status === 'succeeded' && friendRequests.length === 0 && <p>No friend requests.</p>}
            {status === 'succeeded' && friendRequests.map((request) => (
                <FriendRequest key={request._id} requester={request.requester} />
            ))}
            {status === 'failed' && <p>Error loading friend requests.</p>}
        </div>
    );
}

export default FriendRequestList