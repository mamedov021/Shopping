import './popular.css';
import data_product from '../Assets/data';
import Item from '../Items/item';

const Popular = () => {
  return (
    <div className="popular">
    <h1>POPULAR IN WOMEN</h1>
    <hr />
    <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item id = {item.id}  key ={i} name = {item.name} image={item.image} new_price = {item.new_price}  old_price={item.old_price}/>
        })}
    </div>
    </div>
  )
}

export default Popular
