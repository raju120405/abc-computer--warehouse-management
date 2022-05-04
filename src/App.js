
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div >
      
      <Navbar></Navbar>
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home></Home>} />
        <Route path="inventory" element={<Inventory></Inventory>} />
      </Routes>
    </div>
  );
}

export default App;
