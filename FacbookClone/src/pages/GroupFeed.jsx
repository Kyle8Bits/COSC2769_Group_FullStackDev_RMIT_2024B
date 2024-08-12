import React from 'react'
import Tab from '../components/Tab'

const tabs =[
  {name: 'Post'}, 
  {name: 'Member'},
  {name: 'Photos'}
]

function GroupFeed() {
  return (
    <div style={{backgroundColor: 'wheat'}}  className="container">

      <div className="sidebar"> 
        <ul>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>
          <li>SIDEBAR</li>

        </ul>

      </div>

      <div  className="feedside">
        <div className="banner">
          <img id='groupBanner' src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/454416811_122172689240195479_6553318924204077227_n.png?stp=dst-jpg_p720x720&_nc_cat=1&ccb=1-7&_nc_sid=2285d6&_nc_ohc=plfBNyklxsgQ7kNvgGCmMrW&_nc_ht=scontent.fhan19-1.fna&oh=00_AYAxkz3bJ1EnJPwCQBIGPzFmlTuZcKDHMjny5r2T6pdaEw&oe=66BB7A1F" alt="" />
        </div>

        <div className="info">
          <h1>Cộng đồng VALORANT Vietnam</h1>
          <h2> <i class="ri-lock-fill"></i> <span>Private group</span> · 294.7K members</h2>
        </div>

        <div style={{backgroundColor: 'gray'}} className="buttonsection">
          Button + few member avater preview
          <div className="member_preview"></div>
          <div className="button"></div>
        </div>

        <div  className="tab">
          <Tab tabs={tabs}/>
        </div>

        <div style={{backgroundColor: 'orange'}} className="feed"> FEED </div>

      </div>


    </div>
  )
}

export default GroupFeed