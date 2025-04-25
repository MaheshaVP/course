import React, { useState } from "react";
import './App.css'


export default function App() {
  const [isDark,setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  }

  return(
    <div className={isDark?'dark-theme':'light-theme'}>
      <div className="login-container">
        <h2>Login</h2>
        <input type="email" placeholder="email" className="input-field"/><br/>
        <input type="password" placeholder="password" className="input-field" /><br/><br/>
        <button className="login-btn">Login</button>
        <br/><br/>
        <div className="toggle-switch">
          <input type="checkbox" id="themeToggle" onChange={handleToggle} />
          <label htmlFor="themeToggle"></label>
          <span>{isDark? 'Dark': 'Light'} Mode</span>
        </div>

      </div>
    </div>
  )

}