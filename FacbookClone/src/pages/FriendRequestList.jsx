import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriendRequest } from "../redux/slice/friendSlice"; // Ensure correct path to slice
import FriendRequest from "./FriendRequest";
import '../css/friendRequestList.css';
import Header from "../components/shared/Header";

function FriendRequestList() {
    const friendRequests = useSelector((state) => state.friends.friendRequest);
    const status = useSelector((state) => state.friends.status);
    const currentUser = useSelector((state) => state.profile);

    return (
        <>
            <Header />
            <div className="friend-req-list">
                {status === 'loading' && <p>Loading friend requests...</p>}
                {status === 'succeeded' && (!friendRequests || friendRequests.length === 0) && (
                    <p>No friend requests.</p>
                )}
                {status === 'succeeded' && friendRequests?.length > 0 && friendRequests.map((request) => (
                    <FriendRequest 
                        key={request._id} 
                        requester={request} 
                        recipient={currentUser} 
                    />
                ))}
                {status === 'failed' && <p>Error loading friend requests.</p>}
            </div>
        </>
    );
}

export default FriendRequestList;
