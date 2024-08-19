// App.jsx
import React from 'react';
import Header from './Header';
import Login from './pages/Login';
import './App.css'; 

const App = () => {
    return (
        <div className="app">
            <Header />
            <Login />
        </div>
    );
};

export default App;