import React from 'react'
import { useSelector } from 'react-redux'

function ProfileAbout() {

  const { phone,info } = useSelector(state =>state.profile);

  console.log(phone, info);

  const job = info.map((item, index) => (
    <h3 key={index}>
        <i className={item.role === 'work' ? 'ri-briefcase-4-fill' : 'ri-graduation-cap-fill'}></i>
        {item.role === 'Work at' ? ` Work at ${item.place}` : ` Study at ${item.place}`}
    </h3>
  ) )

  return (
    <div  className='profile_about_container'>
      <div className="about_content">
        <div className="personal">
          {job}
          <h3><i class="ri-phone-fill"></i>{phone}</h3>
        </div>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default ProfileAbout
