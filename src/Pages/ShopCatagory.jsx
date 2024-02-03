 import './Css/ShopCatagory.css'
 import { ShopContex } from '../Contex/ShopContex'
import { useContext } from 'react'
import drop from '../Components/Assets/dropdown_icon.png'


const ShoopCatagory = (props) => {
  // const {all_product} =useContext(ShopContex);
  return (
    <div className="shop_catagory">
      <img src={props.banner} alt="" />
      <div className="shopCatagory_indexSort">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory_sort">
          Sort by <img src={drop} alt="" />
        </div>
      </div>
      .
      
    </div>
  )
}

export default ShoopCatagory
