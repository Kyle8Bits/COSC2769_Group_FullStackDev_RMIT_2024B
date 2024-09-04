import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import '../../css/manageGroup.css'
import { decideGroupRequest } from '../../redux/slice/approveGroupSlice';

function ManageGroup({ groupID ,groupName, banner, description, status}) {

  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState({
    state: true,
    message: ''
});

const handleFirstApprove =()=>{
    setConfirm({
        state: false,
        message: 'Approve'
    });
}

const handleFirstReject = () => {
    setConfirm({
        state: false,
        message: 'Reject'
    });
}

const handleReturn =()=>{
  setConfirm({
    state: true,
    message: ''
  });
}

const handleConfirm = () => {
  dispatch(decideGroupRequest({id: groupID, decision: confirm.message}));
}

  return (
    <div>
         <div className='group_container'>
        <div className="group">
          <div className="group_content">
          <img  src={`http://localhost:1414${banner}`} />
          
          <div className="group_brief">
            <h2 className="group_name">{groupName}</h2>
            <p className="group_intro">Purposes: {description}</p>
            {/* maybe update the card object of the user want to create group here */}
          </div>
          </div>

          {status? (
            confirm.state ?
               <div className="approve_dicision">
                <div className="approve" onClick={handleFirstApprove}>Approve</div>
                <div className="reject" onClick={handleFirstReject}>Reject</div>
               </div>
               :
               <>
                <div className="approve_dicision">
                  <p>Sure you want to <span>{confirm.message}</span></p>
                  <div className="approve">Confirm</div>
                  <div className="reject" onClick={handleReturn}>Return</div>
                </div>
               </>
          )

          :

          <></>

          }

        </div>
      </div>
    </div>
  )
}

export default ManageGroup