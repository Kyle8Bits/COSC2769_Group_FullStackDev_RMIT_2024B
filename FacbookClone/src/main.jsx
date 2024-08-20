import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import GroupFeed from './pages/GroupFeed'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <GroupFeed/>
  </React.StrictMode>,
)
