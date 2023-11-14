import React from 'react'
import Bar from '../../components/Bar/Bar.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import Product from '../../components/Product/Product.jsx'
import s from './Pdp.module.css'
const Pdp = () => {
  return (
    <div>
      <Bar />
      <Navbar />
      <div className={s.container}>
        <div className={s.gallery}>
          <BreadCrumbs />
          <Gallery />
        </div>
        <div className={s.product}>
          <Product />
        </div>

      </div>
    </div>
  )
}


export default Pdp