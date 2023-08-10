import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    /*Almaceno la cantidad del contador */
    const [quantity, setQuantity] = useState(initial)
/* Sumo en el contador */
    const Addition = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
/* Resto en el contador */
    const Subtraction = () => {
        if (quantity > stock) {
            setQuantity(quantity - 1)
        }
    }
/*Muestro el contador */
    return (
        <div className='Counter'>
            <div className='Control'>
                <button className='Button' onClick={Subtraction}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={Addition}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount