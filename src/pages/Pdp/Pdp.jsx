import React from 'react'
import Bar from '../../components/Bar/Bar.jsx'
import Navbar from '../../components/NavBar/Navbar.jsx'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.jsx'
import s from './Pdp.module.css'
 const Pdp = () => {
  return (
    <div>
        <Bar />
        <Navbar />
        <div className={s.container}>

        <BreadCrumbs />
        </div>
    </div>
  )
}


export default Pdp