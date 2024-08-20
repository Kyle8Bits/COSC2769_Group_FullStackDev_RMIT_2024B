import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/shared/Header'
import GroupFeed from './pages/GroupFeed'
import Profile from './pages/Profile'
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <GroupFeed/>
    {/* <Profile/> */}
  </React.StrictMode>,
)
