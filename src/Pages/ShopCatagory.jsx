 import './Css/ShopCatagory.css'
 import { ShopContex } from '../Contex/ShopContex'
import { useContext } from 'react'


const ShoopCatagory = (props) => {
  const {all_product} =useContext(ShopContex);
  return (
    <div className="shop_catagory">
      <img src={props.banner} alt="" />
      
    </div>
  )
}

export default ShoopCatagory
