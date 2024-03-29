import React, { useContext } from 'react';
import './Css/ShopCatagory.css';
import { ShopContex } from '../Contex/ShopContex';
import drop from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShoopCatagory = (props) => {
  const { all_product } = useContext(ShopContex);

  return (
    <div className="shop_catagory">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcatagory-indexSort">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i ) =>{
          if(props.category===item.category){
            return <Item key={i}  id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else
          return null;
        })}
      </div>
    </div>
  );
};

export default ShoopCatagory;
