import React, { useState } from 'react';
import './App.css'
import CreateFlow from './components/createflow';
export default function App(){
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };


    return (
     <div className='Column'>
       <nav className={isDarkTheme ? 'navbar dark' : 'navbar light'}>
      <h1>My Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <CreateFlow/>
      <div className="Row">
        <div className="Column">
          <div className="card">
            <div className="card-info">
              <p className="title">Magic Card</p>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <p className="title">Magic Card</p>
            </div>
        </div>
        </div>
          <div className="Rotating_card"  >
        <h2>CARD</h2>
        </div>
      </div>
     </div>
    );
};
