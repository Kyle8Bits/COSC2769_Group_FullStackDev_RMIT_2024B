import React, {useEffect} from 'react'
import '../css/grouplist.css'
import Header from '../components/shared/Header'
import { fetchCommunity } from '../redux/slice/communitySlice'
import {useDispatch, useSelector} from 'react-redux'
import ManageGroup from '../components/AdminComponents/ManageGroup'

function GroupList() {

    const dispatch = useDispatch();

    const communityList = useSelector((state) => state.community);

    const {username}= useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchCommunity());
    },[])

    const community = communityList.communityList
    .filter((community) => !community.members.includes(username))
    .map((community) => {
        return (
            <ManageGroup 
            key={community._id} 
            groupID={community.id} 
            groupName={community.name} 
            banner={community.banner} 
            description={community.description} 
            status={false}
            />
        );
    });

    const myCommunity = communityList.communityList
    .filter((community) => community.members.includes(username))
    .map((community) => {
        return (
            <ManageGroup 
                key={community._id} 
                groupID={community.id} 
                groupName={community.name} 
                banner={community.banner} 
                description={community.description} 
                status={false}
            />
        );
    });

  return (
    <>
    
        <Header/>
        <div id='community_page'>

            <h1>My Groups</h1>
            <div id="my_group">
                <div id="mygroup_list">
                    {myCommunity}

                </div>
            </div>
            
            <h1>Explore Groups</h1>
            <div id="explore_group">
                <div id="my_explore">
                    {community}
                </div>
            </div>
        </div>
    </>
  )
}

export default GroupList