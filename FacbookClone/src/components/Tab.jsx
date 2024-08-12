import React from 'react'

function Tab({tabs}) {

    const tabList = tabs.map((t)=>{
        return(
            <div className='tab_container'>
            <li className='link'>
                    <a href="#">{t.name}</a>
            </li>
            </div>
            // <li className='link' onClick={scrollToSkills}><a href="#">Skills</a></li>
        )
    })

  return (
    <div>
            <ul className='nav-links'>
                {tabList}
            </ul>
    </div>
  )
}

export default Tab
