import React from 'react'
import '../../css/memberManage.css'

function ManageMember({username, name, avatar}) {
  return (
    <div className='manage_card_member'>

            <img src={`http://localhost:1414${avatar}`} alt="" className="mc_avatar_member" />
            <div className="mc_name_member">
                <div className="mc_fullname_member">{name}</div>
                <div className="mc_username_member">@ {username}</div>
            </div>

            <div className="mc_button_member">

            </div>

        </div>
  )
}

export default ManageMember