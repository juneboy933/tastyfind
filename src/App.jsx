import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchBar';
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleLightMode = () => {
    setDarkMode(prev => !prev);
  }

  useEffect(() => {
    document.body.className = darkMode ? '' : 'light-mode';
  }, [darkMode]);

  return (
    <div className='app'>
      <button className='theme-toggle' onClick={toggleLightMode}>
          {darkMode ? '🌙 Dark mode' : '🌞 Light mode'}
      </button>
      <h1>TastyFind</h1>
      <SearchBar /> 
    </div>
  )
}

export default App
