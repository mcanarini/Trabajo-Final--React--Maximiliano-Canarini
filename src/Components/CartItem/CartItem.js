import React from "react";
import { useContext } from "react";
import { CartContext, CartContextProvider } from "../../Context/CartContext";
import { createOrder } from "../../Services/Firebase";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";


function CartItem() {
    const { cart, removeItem } = useContext(cartContext);
  
    return (
      <div>
        <h1>Cart</h1>
        {cart.map((item) => (
          <div key={item}>
            {console.log(item.id)}
            <h2>{item.title}</h2>
            <p>Precio unitario: ${item.price}</p>
            <p>Cantidad a comprar{item.count}</p>
            <p>Precio total ${item.count * item.price}</p>
            <button onClick={() => removeItem(item.id)}>Eliminiar</button>
          </div>
        ))}
        <br />
        <div>Total de la compra: $999</div>
        <Link to="/checkout">
          <ButtonComponent>Comprar</ButtonComponent>
          </Link>
      </div>
    );
  }
  
  export default CartItem;