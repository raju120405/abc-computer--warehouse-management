
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import PrivatRoute from './PrivatRoute/PrivatRoute';

function App() {
  return (
    <div >
      
      <Navbar></Navbar>
         
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home></Home>} />
        <Route path="products" element={<Products></Products>} />
        <Route path="updateproduct" element={<PrivatRoute>
          <UpdateProduct></UpdateProduct>
        </PrivatRoute>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
