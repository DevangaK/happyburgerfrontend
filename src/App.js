import './App.css';
import React from 'react';
import Header from './components/Header';
import BurgerList from './components/BurgerList';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <Header />
      <BurgerList />
    </div>
  );
}

export default App;
