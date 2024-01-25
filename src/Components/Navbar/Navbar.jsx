import './Navbar.css';
import logo from '../Assets/Logo.png'
import card_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar ">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p> 
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>Shop{menu === "shop"?<hr/> :' '} </li>
        <li onClick={()=>{setMenu("men")}}>Men {menu === "men"?<hr/> :' '}</li> 
        <li onClick={()=>{setMenu("women")}}>Women {menu === "women"?<hr/> :' '}</li> 
        <li onClick={()=>{setMenu("kids")}}>Kids {menu === "kids"?<hr/> :' '}</li> 
      </ul>
      <div className=" login-card">
        <button>Login</button>
        <img src={card_icon} alt="shop" />
        <div className="card-count">0</div>
      </div>
    
    </div>
  )
}
 

export default Navbar
