import { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, useAsyncError } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { BurgerMenu } from './components/burgerMenu/BurgerMenu';
import { Overlay } from './components/Overlay/Overlay';
import { Vademecum } from './components/vademecum/Vademecum';

function App() {
  const [year, setYear] = useState(1900);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header year={year} setYear={setYear} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="page">
        <Routes>
          <Route path='/' element={<Home year={year}/>} />
          <Route path='/vademecum' element={<Vademecum year={year}/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
