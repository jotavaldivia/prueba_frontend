import React from 'react'
import s from './Flavor.module.css'
const Flavor = () => {
  return (
    <div className={s.container}>
        <h3>Sabor :</h3>
        <select name="" id="">
        <option   value="" selected>Escoger sabor</option>
            <option value="">Vainilla</option>
            <option value="">Chocolate</option>
            <option value="">Frutilla</option>
        </select>
    </div>
  )
}

export default Flavor