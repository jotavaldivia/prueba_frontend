import React from 'react'
import Flavor from '../Flavor/Flavor'
import AddToCart from '../AddToCart/AddToCart'
import Delivery from '../Delivery/Delivery'
import Comment from '../Comment/Comment'
import s from './Products.module.css'
const Product = () => {
  return (
    <div>
      <h2 className={s.title}>Brand</h2>
      <p className={s.product__name}>WHEY PROTEIN - ORIGINAL</p>
      <div className={s.container__price}>
        <p className={s.discount}>-5%</p> <p className={s.new_price}>$68.390</p> <p className={s.old__price}>$71.990</p>
      </div>
      <div className={s.container__info}>
      <p className={s.shipment}>ENVÍO GRATIS STGO</p>
      <p className={s.sku}>SKU 7834834578923489</p>
      <p className={s.description}>
        Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido cientificamente diseñada para construir músculo magro libre de grasa, aumentar la fuerza y mejorar el rendimiento deportivo.Cada porción contiene 30 g de proteína y una matriz de aminoácidos de cadena ramificada, glutamina y creatina para acelarar el aumento de músculo y la fuerza.
      </p>
      </div>
      <Flavor/>
      <AddToCart/>
      <Delivery/>
      <Comment/>
    </div>
  )
}

export default Product