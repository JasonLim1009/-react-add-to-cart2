import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Router } from '@reach/router';

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header />
      <Router>
        <Home path='/' />
        <Cart path='/cart' />
      </Router>
    </main>
  );
}

export default App;
