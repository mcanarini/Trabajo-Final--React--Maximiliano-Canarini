import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
    const context = useContext(CartContext);
    console.log(context);

    return (
        <Link to="/cart">
            <div>
                🛒
                {/*  Si el valor es 0 - > no mostrar */}
                <span> {context.getTotalItemsInCart()} </span>
            </div>
        </Link>
    );
}

export default CartWidget
