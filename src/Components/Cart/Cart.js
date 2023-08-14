import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {cart, cleerCart, totalQuantity, total} =useContext(CartContext)

    if( totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map (p => <CartItem key = {p.id}{...p}/>)}
            <h3>Total. ${total}</h3>
            <button onClick={() => cleerCart()} className="Button">Vaciar carrito</button>
            <link to='/checkout'>Checkout</link>
        </div>
    )

}
