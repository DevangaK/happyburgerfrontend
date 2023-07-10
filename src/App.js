import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BurgerDetails from './components/BurgerDetails'
import Cart from './components/Cart'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BurgerDetails />} />
          <Route exact path="/order" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
