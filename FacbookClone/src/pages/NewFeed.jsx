import { useEffect } from "react";
function NewFeed(){
    let user_name = "TEST";
    return(
       <div className="SidePage">
            <div className="Side_Page">
                <div className="SideBar">
                    <ul className="Users_act">
                        <li className="feature">
                            <a className="profile" role="link">
                                <div className="profileTag" role = "button" tabIndex= "0">
                                    <div className="profile_pic"></div>
                                    <div className="profile_name">
                                        {user_name}
                                    </div> 
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="friend" role="link">
                                <div className="friendTag" role="button" tabIndex="0">
                                    <div className="friend_pic"></div>
                                    <div className="friend_name">
                                        FRIEND
                                    </div>
                                </div> 
                            </a>
                        </li>
                        <li>
                            <a className="memory" role="link">
                                <div className="memoryTag" role="button" tabIndex= "0">
                                    <div className="memory_pic"></div>
                                    <div className="memory_name">
                                        MEMORY
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="group" role = "link">
                                <div className="groupTag" role="button" tabIndex= "0">
                                    <div className="group_pic"></div>
                                    <div className="group_name">
                                        GROUP
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    );
}

export default NewFeed