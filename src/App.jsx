  
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';

import ShoopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Card from './Pages/card.jsx';
import LoginSignUp from './Pages/LoginSignUp.jsx';

function App() {
 
  return (
  <>
  <BrowserRouter>
   <Navbar/>
  <Routes>
   <Route path="/" element={<Shop />} />
   <Route path="/men" element={<ShoopCatagory category="men" />} />
   <Route path="/women" element={<ShoopCatagory category="women" />} />
   <Route path="/kids" element={<ShoopCatagory category="kids" />} />
   <Route path="/product" element ={<Product/>}>
     <Route path=":productId" element ={<Product/>}/>
   </Route> 
   <Route path="/card" element={<Card/>} />
   <Route path="/Login" element={<LoginSignUp />} />


  </Routes>
  
  </BrowserRouter>
  </>
  )
}

export default App
 