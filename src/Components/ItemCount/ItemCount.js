import './ItemCount.css'
import { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { Link } from 'react-router-dom';

function ItemCount(props) {
    const [clickCount, setClickCount] = useState(1);
    //sumo
    function Addition() {
        if (clickCount === props.stock) {
        } else {
            setClickCount(clickCount + 1);
        }
    }
    // resto
    function Subtraction() {
        if (clickCount > 1) {
            setClickCount(clickCount - 1);
        }
    }


/*Muestro el contador */
return (
    <div>
        <div className="Counter">
            <button disabled={props.stock === 0} className="Button" onClick={Subtraction} > -</button>
            <h2 className="count-text">{clickCount}</h2>
            <button disabled={props.stock === 0} className="Button" onClick={Addition}>  + </button>
        </div>
        <ButtonComponent disabled={props.stock === 0} onClick={() => props.onConfirm(clickCount)} className="Button">
            <h4>Añadir al carrito</h4>
        </ButtonComponent>
    <Link to="/"> <ButtonComponent>Volver al inicio</ButtonComponent></Link>
       
       
    </div>
);
}

export default ItemCount