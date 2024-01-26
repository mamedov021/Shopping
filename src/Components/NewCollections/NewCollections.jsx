import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Items/item'
const NewCollections = () => {
  return (
    <div className="newCollactions">
        <h1>NEW  COLLACTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i)=>{
            return <Item id = {item.id}  key ={i} name = {item.name} image={item.image} new_price = {item.new_price}  old_price={item.old_price}/>
        })}

        </div>
      
    </div>
  )
}

export default NewCollections
