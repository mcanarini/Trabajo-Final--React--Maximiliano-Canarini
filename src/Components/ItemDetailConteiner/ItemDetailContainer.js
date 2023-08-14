import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { getProductById } from '../../Services/Firebase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [Product, SetProduct] = useState({});
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { id } = useParams();
    const { addToCart, getItemInCart } = useContext(CartContext);

    const itemInCart = getItemInCart(id);

    const maxItems = itemInCart
        ? Product.stock - itemInCart.count
        : Product.stock


    useEffect(() => {
        async function requestProduct() {
            const respuesta = await getProductById(id);
            SetProduct(respuesta)
        }

        requestProduct()
    }, [id])


    function handleAddToCart(clickCount) {
        addToCart(Product, clickCount)
        alert(`Producto agregado al Carrito, cantidad :${clickCount}`)
        setIsAddedToCart(true)
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...Product} />
        </div>
    )
}

export default ItemDetailConteiner