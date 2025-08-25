import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import {useState} from 'react';

function App() {
  const [sideNavbar, setsideNavbar] = useState(true);
  const setsideNavbarFunc = (value) => {
    setsideNavbar(value)
  }

  return (
    <div className="App">
      <Navbar setsideNavbarFunc={setsideNavbarFunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar} />
    </div>
  );
}

export default App;
