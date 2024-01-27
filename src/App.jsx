  
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/shop.jsx';


import ShoopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import Card from './Pages/Card.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
 
  return (
  <>
  <BrowserRouter>
   <Navbar/>
  <Routes>
   <Route path="/" element={<Shop />} />
   <Route path="/men" element={<ShoopCatagory banner={men_banner} category="men" />} />
   <Route path="/women" element={<ShoopCatagory banner={women_banner} category="women" />} />
   <Route path="/kids" element={<ShoopCatagory banner={kid_banner} category="kids" />} />
   <Route path="/product" element ={<Product/>}>
     <Route path=":productId" element ={<Product/>}/>
   </Route> 
   <Route path="/card" element={<Card/>} />
   <Route path="/Login" element={<LoginSignUp />} />


  </Routes>
  <Footer/>
  
  </BrowserRouter>
  </>
  )
}

export default App
 