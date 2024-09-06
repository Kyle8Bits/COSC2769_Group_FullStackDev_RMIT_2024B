import React from "react";
import '../css/friendRequest.css';
function FriendRequest(requester){
    return(
        <div className="friend-req-container">
            <div className="friend-req-content">
                <div className="friend-req-mes">{requester} want to be your friend</div>
            </div>
            <div className="respond-button">
                    <button className="accept-req">accept</button>
                    <button className="decline-req">decline</button>
                </div>
        </div>
    );
}

export default FriendRequest