import { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, useAsyncError } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { BurgerMenu } from './components/burgerMenu/BurgerMenu';
import { Overlay } from './components/Overlay/Overlay';

function App() {
  const [year, setYear] = useState(1900);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header year={year} setYear={setYear} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BurgerMenu menuOpen={menuOpen} />
      <div className="page">
        <Home year={year}/>
      </div>
    </div>
  );
}

export default App;
