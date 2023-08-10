import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [Product, SetProduct] = useState({})
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const { ItemId } = useParams()

    const { addToCart, getItemInCart}  = useContext (cartContext)

    const itemInCart = getItemInCart(id)

    const maxItems = itemInCart
    ? product.stock - itemInCart.count
    : product.stock

console.log (maxItems)

    useEffect(() => {
        async function requestProduct() {
            const respuesta = await getProductData(id);
            setProduct(respuesta)
        }

        requestProduct(respuesta)
    },[id])


    function handleAddToCart (clickCount){
        addToCart (Product, clickCount)
        alert (`Producto agregado al Carrito, cantidad :${clickCount}`)
        setIsAddedToCart(true)
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...Products} />
        </div>
    )
}

export default ItemDetailConteiner