import './ItemList.css'
import Item from '../Item/Item'

/*Presenta los productos que se muestran en ItemListConteiner */
const ItemList = ({Products}) =>{
    return(
        <div className='ListGroup'>
            {Products.map(prod => <Item key={prod.id}{...prod} /> ) }
        </div>
    )
}


  export default ItemList
  