import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useContext } from 'react';



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div>
      <Link to="/product/2">Ir al item 2</Link>
      <div>
        <img width={400} src={ItemDetail.img} alt="imagen"></img>
      </div>
      <div>
        <h2>{ItemDetail.name}</h2>
      </div>
      <div>
        <h4>$ {ItemDetail.price}</h4>
        <small>{ItemDetail.description}</small>
      </div>
      {ItemDetail.stock > 0 ? (
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
      <ButtonComponent onClick={handleAddToCart}>Agregar al carrito</ButtonComponent>
      <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
      </Link>
    </div>
  );
}

export default ItemDetail