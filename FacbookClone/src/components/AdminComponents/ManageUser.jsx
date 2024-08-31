import React from 'react'
import '../../css/adminmanage.css'
import { useDispatch } from 'react-redux'
import { unbanUser } from '../../redux/slice/banUserSlice'
import { banUser } from '../../redux/slice/activeUserSlice'

function ManageUser({username, name, avatar, isban}) {
    const dispatch = useDispatch()

    const handleUnban = () =>{
        dispatch(unbanUser({username: {username}}))
    }

    const handleBan =()=>{
        dispatch(banUser({username: {username}}))
    }

    return (
        <div className='manage_card'>

            <img src={`http://localhost:1414${avatar}`} alt="" className="mc_avatar" />
            <div className="mc_name">
                <div className="mc_fullname">{name}</div>
                <div className="mc_username">@ {username}</div>
            </div>

            <div className="mc_button">
                {isban?
                    <div  onClick={handleUnban}>
                        <i class="ri-eraser-fill"></i>
                        <div className="action_name">Unban</div>
                    </div>
                    :
                    <div onClick={handleBan}>
                        <i class="ri-forbid-fill"></i>
                        <div className="action_name">Ban</div>
                    </div>
                }
            </div>

        </div>
      )
}

export default ManageUser
