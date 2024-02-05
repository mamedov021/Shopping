import React, { useContext } from 'react';
import './Css/ShopCatagory.css';
import { ShopContex } from '../Contex/ShopContex';
import drop from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShoopCatagory = (props) => {
  const { all_product } = useContext(ShopContex);

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
      <div className="products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} item={item} />;
          }
          return null; // Add this line to handle the case where the category doesn't match
        })}
      </div>
    </div>
  );
};

export default ShoopCatagory;
