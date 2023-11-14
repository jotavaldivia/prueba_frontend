import React, { useState } from 'react'
import s from './AddToCart.module.css'
const AddToCart = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {

        setContador(contador + 1);
    };

    const decrementarContador = () => {
        if (contador <= 0) {
            return
        }
        setContador(contador - 1);
    };


    return (
        <div className={s.container}>
            <div className={s.counter}>
                <button onClick={decrementarContador} >-</button>
                <span>{contador}</span>
                <button onClick={incrementarContador}>+</button>
            </div>
            <button className={s.button__addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default AddToCart