import './Navbar.css';
import logo from '../Assets/Logo.png'
import card_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar ">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p> 
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'> Shop</Link>{menu === "shop"?<hr/> :' '} </li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men'> Men</Link> {menu === "men"?<hr/> :' '}</li> 
        <li onClick={()=>{setMenu("women")}}><Link to='/women'> Women</Link> {menu === "women"?<hr/> :' '}</li> 
        <li onClick={()=>{setMenu("kids")}}><Link to='kids'> Kids</Link> {menu === "kids"?<hr/> :' '}</li> 
      </ul>
      <div className=" login-card">
         <Link to='/login'> <button>Login</button>  </Link>
         <Link to='/card'> <img src={card_icon} alt="shop" /> </Link>
         <div className="card-count">0</div>
      </div>
    
    </div>
  )
}
 

export default Navbar
