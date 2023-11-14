import React from 'react'
import s from './Gallery.module.css'
import img1 from '../../assets/images/principal.png'
const Gallery = () => {
  return (
    <div className={s.container}>
        
            <img className={s.img_principal} src={img1} alt="placeholder" />
       
        <div className={s.imgs}>
            <img src={img1}  alt="placeholder" />
            <img src={img1}  alt="placeholder" />
            <img src={img1}  alt="placeholder" />

        </div>
    </div>
  )
}

export default Gallery