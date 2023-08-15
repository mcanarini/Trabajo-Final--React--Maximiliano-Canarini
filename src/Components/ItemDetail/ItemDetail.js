import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {

  const { isAddedToCart, maxItems, handleAddToCart, itemInCart, getItemInCart } = useContext(CartContext)
  const [clickCount, setClickCount] = useState(1);
  return (
    <div>
      <div>
        <img width={400} src={product.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{product.name}</h2>
      </div>
      <div>
        <h4>$ {product.price}</h4>
        <small>{product.description}</small>
      </div>
      {product.stock > 0 ? (
        /* Mostrar si hay stock*/
        isAddedToCart ? (<Link to={'/cart'}>Ver Carrito</Link>) :
          (<ItemCount stock={maxItems} onConfirm={handleAddToCart} />)
      ) : (
        /* Mostrar si no hoy stock*/
        <p>No hay stock disponible de este producto</p>
      )}
      {itemInCart && (
        <h2>Ya agregaste {itemInCart.count} unidades de este producto</h2>
      )}

    </div>
  );
}


export default ItemDetail