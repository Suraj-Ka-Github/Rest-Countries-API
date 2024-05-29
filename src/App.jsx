import './App.css'
import CountryDetail from './components/CountryDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import {themes,ThemeContext} from "./context/themeContext";

import HomePage from './components/HomePage';

function App() {
  const [theme, setTheme] = useState(themes.light);



  return (
    <>
    
    
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage theme = {theme} />}> </Route>
            <Route path="/country/:name" element={<CountryDetail theme = {theme}/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </ThemeContext.Provider>
    </>

  )
}

export default App
