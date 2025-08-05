import { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput';

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
      <SearchInput />
    </div>
  )
}

export default App
