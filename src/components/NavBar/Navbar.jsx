import React, {useState} from 'react'
import cart from '../../assets/icons/cart.png'
import search from '../../assets/icons/search.png'
import s from './Navbar.module.css'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    console.log(isMenuOpen)

  return (
    <div className={s.container}>
        <div>
            <h1>BRAND</h1>
        </div>
        <div className={s.container__menu}>
        <div className={s.button__menu} onClick={toggleMenu}>
          ☰
        </div>
            <ul className={`${s.menu} ${isMenuOpen ? 'menu.open' : ''}`}>
                <li>SHOP ALL</li>
                <li>BEST SELLER</li>
                <li>PROTEINAS</li>
                <li>SUPLEMENTOS</li>
                <li>PRE ENTRENOS</li>
                <li>ACCESORIOS</li>
                <li>BARRAS Y SNACK</li>
            </ul>
            <div className={s.container__icons}>
                <img src={search} alt="" />
                <img src={cart} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar